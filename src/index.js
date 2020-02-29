import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Store from './stores/Store';
import Post from './models/Post';

const store = new Store();

 store.seed([
   new Post({
     picture: 'assets/vegan-salad-bowl.jpg',
     title: 'Vegan salad bowl',
     user: 'Sarah Van Den Berghe',
     description: 'Een heerlijke vegan avondmaal gemaakt! Vol met vitaminen!  😋',
     tags: ['Vegetarisch', 'Avondeten', 'Gezond']
   }),
 ]);

store.posts[0].addComment({user:'Laura', content: 'Yummy!'});
store.posts[0].addComment({user:'Anna', content: 'Ziet er goed uit!'});

ReactDOM.render(<App store={store} />, document.getElementById("root"));
serviceWorker.unregister();
