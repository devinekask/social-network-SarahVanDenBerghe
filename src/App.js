import React from 'react';
import { Route } from "react-router-dom";
import { Switch } from 'react-router';
import styles from "./App.module.css";
import Home from "./components/Home/index";
import NavBar from "./components/NavBar";
import AddPost from "./components/AddPost";
import Detail from "./components/Detail/index";

const App = () => {

  // const isLoggedIn = false;

  return (
    <div className={styles.app}>
      <div className={styles.content}>
      <NavBar />
      <Switch>
        <Route path="/detail/:id">
          <Detail />
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
      </div>
    </div>
  );
}

export default App;
