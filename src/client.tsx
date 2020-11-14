import { React } from "./deps/react.ts";
import { ReactDOM } from "./deps/react-dom.ts";

import App from "./components/App.tsx";

window.addEventListener("DOMContentLoaded", (evt) => {
  ReactDOM.render(
    <App />,
    // @ts-ignore
    document.getElementById("root"),
  );
});

export {};
