import React from 'react'
import withLoadable from './utils/withLoadable'
// import useQuerydata from './hooks/useQueryhook';
const Main = withLoadable(import('./components/root-router/main-router'))

function App(props: any) {
  return (
    <main style={{ display: 'grid', placeItems: 'center', height: '100vh', width: '100vw', backgroundColor: "#FAFBFC" }}>
        <Main />
    </main>
  );
}

export default App;
