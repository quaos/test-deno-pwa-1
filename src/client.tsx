import { React, ReactDOM } from "./deps/react.ts";

import App from "./components/App.tsx";
import { CacheUpdatedMessage } from "./service-worker/messages.ts";
import serviceWorkerContainer from './service-worker/container.ts';

window.addEventListener("DOMContentLoaded", (evt) => {
  (ReactDOM as any).render(
    <App />,
    // @ts-ignore
    document.getElementById("root"),
  );
});

serviceWorkerContainer.register({ scriptUrl: "/assets/js/service-worker.js" });

export {};
