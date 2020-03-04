import React from 'react';
import { Route } from "react-router-dom";
import { Switch, Redirect } from 'react-router';

import Home from "./components/Home/index";
import NavBar from "./components/NavBar";
import AddPost from "./components/AddPost";

const App = () => {

  // const isLoggedIn = false;

  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/detail/:id">
          {/*<Detail />*/}
        </Route>
        <Route path="/profile">
          {/*{isLoggedIn ? <Profile /> : <Redirect to="/" />*/}
        </Route>
        <Route path="/settings">
          {/*<Settings />*/}
        </Route>
        <Route path="/add">
          <AddPost />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
