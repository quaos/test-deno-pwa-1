var exports = {
}, _dewExec = false;
var exports1 = {
}, _dewExec1 = false;
var exports2 = {
}, _dewExec2 = false;
var exports3 = {
}, _dewExec3 = false;
var exports4 = {
}, _dewExec4 = false;
function dew() {
    if (_dewExec4) return exports4;
    _dewExec4 = true;
    {
        exports4 = _reactDevelopmentDewDew();
    }
    return exports4;
}
const __default = dew();
var exports5 = {
}, _dewExec5 = false;
var exports6 = {
}, _dewExec6 = false;
var exports7 = {
}, _dewExec7 = false;
var exports8 = {
}, _dewExec8 = false;
var exports9 = {
}, _dewExec9 = false;
var exports10 = {
}, _dewExec10 = false;
const styles = {
    logo: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "192px",
        height: "192px"
    }
};
const App = (props)=>{
    let [loading, setLoading] = __default.useState(true);
    __default.useEffect(()=>{
        console.log("Start loading...");
        const timerId = setTimeout(()=>{
            setLoading(false);
            console.log("Finished loading");
        }, 1000);
        return ()=>{
            clearTimeout(timerId);
        };
    }, []);
    return __default.createElement("div", {
        className: "container"
    }, __default.createElement("p", null, __default.createElement("img", {
        src: "assets/img/deno-logo.png",
        style: styles.logo
    }), __default.createElement("img", {
        src: "assets/img/react-logo192.png",
        style: styles.logo
    })), __default.createElement("pre", null, "Loading ...", loading ? "" : " OK!"), __default.createElement("p", null, "Open up App.tsx to start working on your app!"));
};
const serviceWorkerContainer = {
    register: (config)=>{
        if (!('serviceWorker' in navigator)) {
            console.warn("serviceWorker not enabled in navigator:", navigator);
            return;
        }
        navigator.serviceWorker.ready.then(()=>{
            console.log('This web app is being served cache-first by a service ' + 'worker. To learn more, visit https://bit.ly/CRA-PWA');
        });
        navigator.serviceWorker.onmessage = (evt)=>{
            console.log('Message received from SW ->', evt.data);
            config.onMessage(evt);
        };
        navigator.serviceWorker.register(config.scriptUrl, {
            scope: "/"
        }).then((registration)=>{
            console.log("Service worker registered:", registration);
            if (!("controller" in navigator.serviceWorker) || !navigator.serviceWorker.controller) {
                console.warn("navigator.serviceWorker.controller not available");
                return false;
            }
            let msg;
            navigator.serviceWorker.controller.postMessage({
                from: "container"
            });
            return true;
        }).catch((err)=>{
            console.error('Error during service worker registration:', err);
        });
    },
    unregister: ()=>{
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.ready.then((registration)=>{
                registration.unregister();
            });
        }
    }
};
window.addEventListener("DOMContentLoaded", (evt)=>{
    ReactDOM.render(__default.createElement(App, null), document.getElementById("root"));
});
serviceWorkerContainer.register({
    scriptUrl: "/assets/js/service-worker.js",
    onMessage: (evt)=>{
        console.log("Got message from service worker:", evt);
    }
});
