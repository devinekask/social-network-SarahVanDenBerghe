import React from 'react';
import { Route } from "react-router-dom";
import { Switch, Redirect } from 'react-router';
import styles from "./App.module.css";
import Home from "./components/Home/index";
import NavBar from "./components/Navbar/index";
import AddPost from "./components/AddPost";
import Detail from "./components/Detail/index";
import Profile from "./components/Profile/index";

const App = () => {

  const isLoggedIn = true;

  return (
    <div className={styles.app}>
      <h1 className="hidden">Foodgram</h1>
      <div className={styles.wrapper}>
        <NavBar />
        <div className={styles.content}>>
          <Switch>
            <Route path="/detail/:id">
              <Detail />
            </Route>
            <Route path="/profile">
              {isLoggedIn ? <Profile /> : <Redirect to="/" />}
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
    </div>
  );
}

export default App;
