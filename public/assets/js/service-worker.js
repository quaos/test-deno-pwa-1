var MessageTypes;
(function(MessageTypes1) {
    MessageTypes1["Hello"] = "hello";
    MessageTypes1["CacheUpdated"] = "cacheUpdated";
})(MessageTypes || (MessageTypes = {
}));
async function createCacheUpdatedMessage(cacheName, request, response) {
    const reqProps = {
        method: request.method,
        url: request.url
    };
    return {
        cacheName,
        request: reqProps
    };
}
self.addEventListener('install', (evt)=>{
    console.log("Hooray, service worker installed!", evt);
    evt.waitUntil(cacheAssets());
});
self.addEventListener('activate', (evt)=>{
    evt.waitUntil(syncCacheVersion().then(()=>self.clients.claim()
    ));
});
self.addEventListener('fetch', (evt)=>{
    evt.respondWith(getResponse(evt.request));
});
self.addEventListener('message', (evt)=>{
    let knownEvent = false;
    if ("messageType" in evt.data) {
        switch(evt.data.messageType){
            case MessageTypes.Hello:
                console.log(`Got ${evt.data.messageType} event from:`, evt.data.from);
                knownEvent = true;
                break;
            case MessageTypes.CacheUpdated:
                console.log(`Got ${evt.data.messageType} event:`, evt.data);
                knownEvent = true;
                break;
            default: break;
        }
    }
    if (!knownEvent) {
        console.log("Got message event:", evt);
    }
});
self.addEventListener('push', (evt)=>{
    console.log("Push notification received:", evt);
});
function getFullCacheName() {
    return `${"test-deno-pwa-1"}-v${"1"}`;
}
function syncCacheVersion() {
    if (!("caches" in self)) {
        return Promise.resolve(false);
    }
    const currentCacheName = getFullCacheName();
    return self.caches.keys().then((cacheNames)=>Promise.all(cacheNames.filter((cacheName)=>cacheName != currentCacheName
        ).map((cacheName)=>caches.delete(cacheName)
        ))
    ).then(()=>true
    );
}
function cacheAssets() {
    if (!("caches" in self)) {
        return Promise.resolve(false);
    }
    console.log("Precaching app assets");
    return self.caches.open(getFullCacheName()).then((cache)=>{
        return cache.addAll([
            '/',
            '/index.html',
            '/assets/css/styles.css',
            '/assets/img/deno-logo.png',
            '/assets/img/react-logo192x192.png', 
        ]);
    }).then(()=>true
    ).catch((err)=>{
        console.error(err);
        return false;
    });
}
function getResponse(request) {
    return tryGetResponseFromCache(request).then((cachedResponse)=>{
        let liveResponse = fetch(request).then((response)=>{
            return saveResponseToCache(request, response).then((success)=>{
                success && dispatchCacheUpdated(self.clients, request, response);
                return response;
            });
        });
        return cachedResponse || liveResponse;
    });
}
function tryGetResponseFromCache(request) {
    if (!("caches" in self)) {
        return Promise.resolve(undefined);
    }
    return self.caches.open(getFullCacheName()).then((cache)=>cache.match(request)
    );
}
function saveResponseToCache(request, response) {
    if (!("caches" in self)) {
        return Promise.resolve(false);
    }
    console.log("Saving response to cache:", response);
    return self.caches.open(getFullCacheName()).then((cache)=>cache.put(request, response)
    ).then(()=>true
    );
}
function dispatchCacheUpdated(clients, request, response) {
    return createCacheUpdatedMessage(getFullCacheName(), request, response).then((msg)=>clients.matchAll().then((matchedClients)=>{
            matchedClients.forEach((client)=>client.postMessage(msg)
            );
            return response;
        })
    );
}
