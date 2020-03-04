import React from 'react';
import Posts from "./components/Posts";
import FormPost from "./components/FormPost";

function App({ store }) {
  return (
    <>
      <Posts store={store} />
      <FormPost store={store} />
    </>
  );
}

export default App;
