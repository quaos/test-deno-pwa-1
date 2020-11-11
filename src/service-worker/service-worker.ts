import { CacheUpdatedMessage } from "./messages.ts";

const APP_CACHE_NAME = "test-deno-pwa-1";
const APP_CACHE_VERSION = "1";

self.addEventListener('install', (evt: any) => {
  console.log("Hooray, service worker installed!", evt);
  evt.waitUntil(
      cacheAssets()
  );
});

self.addEventListener('activate', (evt: any) => {
  evt.waitUntil(
    syncCacheVersion()
  );
});

self.addEventListener('fetch', (evt: any) => {
  evt.respondWith(
    getResponse(evt.request as Request)
  )
});

self.addEventListener('message', (evt: MessageEvent<any>) => {
  let knownEvent = false;
  if ("messageType" in evt.data) {
    switch (evt.data.messageType) {
      case "hello":
        console.log("Got hello event from:", evt.data.from);
        knownEvent = true;
        break;
      case "cacheUpdated":
        console.log("Got cacheUpdated event:", evt.data);
        knownEvent = true;
        break;
      default:
        break;
    }
  }
  if (!knownEvent) {
    console.log("Got message event:", evt);
  }
});

function getFullCacheName(): string {
  return `${APP_CACHE_NAME}-v${APP_CACHE_VERSION}`
}

function syncCacheVersion(): Promise<boolean> {
  if (!("caches" in window)) {
    return Promise.resolve(false);
  }

  const currentCacheName = getFullCacheName();

  return window.caches.keys()
    .then((cacheNames: string[]) => Promise.all(
      cacheNames
        .filter((cacheName: string) => (cacheName != currentCacheName))
        .map((cacheName: string) => caches.delete(cacheName))
    ))
    .then(() => true)
}

function cacheAssets(): Promise<boolean> {
  if (!("caches" in window)) {
    return Promise.resolve(false);
  }

  return window.caches.open(getFullCacheName())
    .then((cache: any) => {
      return cache.addAll([
        'index.html',
        'assets/css/styles.css',
        'assets/js/offline.js',
        'assets/img/',
      ]);
    })
    .then(() => true)
}

function getResponse(request: Request): Promise<Response> {
  return tryGetResponseFromCache(request)
    .then((cachedResponse?: Response) => {
      let liveResponse = fetch(request)
        .then((response) => {
          return saveResponseToCache(request, response)
            .then((success) => {
              (success) && dispatchCacheUpdated(self.clients, request, response);
              return response
            })
        });

      return cachedResponse || liveResponse;
    })
}

function tryGetResponseFromCache(request: Request): Promise<Response | undefined> {
  if (!("caches" in window)) {
    return Promise.resolve(undefined);
  }

  return window.caches.open(getFullCacheName())
    .then((cache: any) => cache.match(request))
}

function saveResponseToCache(request: Request, response: Response): Promise<bool> {
  if (!("caches" in window)) {
    return Promise.resolve(false);
  }

  return window.caches.open(getFullCacheName())
    .then((cache: any) => cache.put(request, response))
    .then(() => true)
}

function dispatchCacheUpdated(clients: any, request: Request, response: Response): Promise<Response> {
  let msg = <CacheUpdatedMessage> { request, response };

  return clients.matchAll()
    .then((matchedClients: any[]) => {
      matchedClients.forEach((client: any) => postMessage(msg));
      return response
    })
}
