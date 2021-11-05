import React from "react";
import withLoadable from "./utils/withLoadable";
const Main = withLoadable(import("./components/root-router/main-router"));

function App() {
  return (
    <main
      style={{
        display: "grid",
        placeItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#FAFBFC",
      }}
    >
      <Main />
    </main>
  );
}

export default App;
