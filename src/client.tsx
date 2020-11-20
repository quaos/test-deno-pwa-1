import { React } from "./deps/react.ts";
import { ReactDOM } from "./deps/react-dom.ts";

import App from "./components/App.tsx";
import serviceWorkerContainer from "./service-worker/container.ts";

interface SWRegisterProps {
  messagesDispatcher: any;
}

const swProm = new Promise<SWRegisterProps>((resolve, reject) => {
  window.addEventListener('load', (evt) => {
    console.log("window.load event:", evt);
    const messagesDispatcher = serviceWorkerContainer.register({ scriptUrl: "/assets/js/service-worker.js" });
    console.log("Got SW messages dispatcher:", messagesDispatcher);
    resolve({ messagesDispatcher })
  });
});

window.addEventListener("DOMContentLoaded", (evt) => {
  console.log("window.DOMContentLoaded event:", evt);
  swProm.then(({ messagesDispatcher }) => {
    ReactDOM.render(
      <App swMessagesDispatcher={messagesDispatcher} />,
      // @ts-ignore
      document.getElementById("root"),
    );
  });
});


export {};
