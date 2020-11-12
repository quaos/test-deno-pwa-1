import { HelloMessage } from "./messages.ts";

export interface ServiceWorkerContainerConfig {
    scriptUrl: string;
    onMessage: (evt: any) => void;
}

const serviceWorkerContainer = {
    register: (config: ServiceWorkerContainerConfig) => {
        if (!('serviceWorker' in navigator)) {
            console.warn("serviceWorker not enabled in navigator:", navigator);
            return;
        }

        navigator.serviceWorker.ready.then(() => {
            console.log(
              'This web app is being served cache-first by a service ' +
                'worker. To learn more, visit https://bit.ly/CRA-PWA',
            );
        });

        navigator.serviceWorker.onmessage = (evt: any) => {
            console.log('Message received from SW ->', evt.data);
            config.onMessage(evt);
        };

        navigator.serviceWorker
            .register(config.scriptUrl, { scope: "/" })
            .then((registration: any) => {
                console.log("Service worker registered:", registration);
                if ((!("controller" in navigator.serviceWorker))
                    || (!navigator.serviceWorker.controller)) {
                    console.warn("navigator.serviceWorker.controller not available");
                    return false;
                }
                let msg = <HelloMessage> { from: "container" };
                navigator.serviceWorker.controller.postMessage(msg);
                return true;
            })
            .catch((err: Error) => {
                console.error('Error during service worker registration:', err);
            });
    },

    unregister: () => {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.ready.then((registration: any) => {
                registration.unregister();
            });
        }
    }
}

export default serviceWorkerContainer;
