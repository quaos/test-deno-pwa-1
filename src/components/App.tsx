import { EventEmitter } from "../deps/events.ts";
import { React, ReactFC } from "../deps/react.ts";

import { ServiceWorkerContext } from "../context/service-worker.tsx";

import { NotesList } from "./NotesList.tsx";

const styles = {
  logo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "192px",
    height: "192px",
  },
};

interface AppProps {
  swMessagesDispatcher: EventEmitter;
}

const App: ReactFC<AppProps> = ({ swMessagesDispatcher }) => {
  let [ loading, setLoading ] = React.useState(true);

  React.useEffect(() => {
    console.log("Start loading...");
    const timerId = setTimeout(() => {
      setLoading(false);
      console.log("Finished loading");
    }, 1000);

    return () => {
      //cleanup
      clearTimeout(timerId);
    }
  }, []);

  return (
    <ServiceWorkerContext.Provider value={{ messagesDispatcher: swMessagesDispatcher }}>
      <div className="container">
        <p>
          <img src="assets/img/deno-logo-280x280.png" style={styles.logo} />
          <img src="assets/img/react-logo-192x192.png" style={styles.logo} />
        </p>
        
        {(loading)
          ? <pre>Loading ...</pre>
          : <NotesList />
        }
      </div>
    </ServiceWorkerContext.Provider>
  );
};

export default App;
