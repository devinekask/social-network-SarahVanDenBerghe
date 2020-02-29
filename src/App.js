import React from 'react';
import Posts from "./components/Posts";

function App({ store }) {
  return (
    <>
      <Posts store={store} />
    </>
  );
}

export default App;
