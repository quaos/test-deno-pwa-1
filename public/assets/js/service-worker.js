self.addEventListener('install', (evt)=>{
    console.log("Hooray, service worker installed!", evt);
    evt.waitUntil(cacheAssets());
});
self.addEventListener('activate', (evt)=>{
    evt.waitUntil(syncCacheVersion());
});
self.addEventListener('fetch', (evt)=>{
    evt.respondWith(getResponse(evt.request));
});
self.addEventListener('message', (evt)=>{
    let knownEvent = false;
    if ("messageType" in evt.data) {
        switch(evt.data.messageType){
            case "hello":
                console.log("Got hello event from:", evt.data.from);
                knownEvent = true;
                break;
            case "cacheUpdated":
                console.log("Got cacheUpdated event:", evt.data);
                knownEvent = true;
                break;
            default: break;
        }
    }
    if (!knownEvent) {
        console.log("Got message event:", evt);
    }
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
    return self.caches.open(getFullCacheName()).then((cache)=>{
        return cache.addAll([
            'index.html',
            'assets/css/styles.css',
            'assets/js/offline.js',
            'assets/img/', 
        ]);
    }).then(()=>true
    );
}
function getResponse(request) {
    return tryGetResponseFromCache(request).then((cachedResponse)=>{
        let liveResponse = fetch(request).then((response)=>{
            return saveResponseToCache(request, response).then((success)=>{
                success && dispatchCacheUpdated(Clients, request, response);
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
    return self.caches.open(getFullCacheName()).then((cache)=>cache.put(request, response)
    ).then(()=>true
    );
}
function dispatchCacheUpdated(clients, request, response) {
    let msg = {
        request,
        response
    };
    return clients.matchAll().then((matchedClients)=>{
        matchedClients.forEach((client)=>postMessage(msg)
        );
        return response;
    });
}
