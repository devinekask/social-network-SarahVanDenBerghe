import { createContext } from 'react';
import Store from './../stores/Store';
import Post from './../models/Post'; // of via addPost?

const store = new Store();

store.seed([
  new Post({
    picture: 'assets/vegan-salad-bowl.jpg',
    title: 'Vegan salad bowl',
    user: 'Sarah Van Den Berghe',
    description:
      'Een heerlijke vegan avondmaal gemaakt! Vol met vitaminen!  😋',
    tags: ['Vegetarisch', 'Avondeten', 'Gezond']
  })
]);

store.posts[0].addComment({ user: 'Laura', content: 'Yummy!' });
store.posts[0].addComment({ user: 'Anna', content: 'Ziet er goed uit!' });

export const storeContext = createContext(store);
