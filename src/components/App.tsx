import { React, ReactFC } from "../deps/react.ts";

import { ServiceWorkerContextProvider } from "../context/service-worker.tsx";

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
}

const App: ReactFC<AppProps> = ({ }) => {
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
    <ServiceWorkerContextProvider>
      <div className="container">
        <p>
          <img src="assets/img/deno-logo.png" style={styles.logo} />
          <img src="assets/img/react-logo192x192.png" style={styles.logo} />
        </p>
        
        {(loading)
          ? <pre>Loading ...</pre>
          : <NotesList />
        }
      </div>
    </ServiceWorkerContextProvider>
  );
};

export default App;
