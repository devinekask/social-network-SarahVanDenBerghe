import { createContext } from 'react';
import DataStore from '../stores/DataStore';
import UiStore from "../stores/UiStore";
import Post from './../models/Post';

const rootStore = { dataStore: new DataStore(), uiStore: new UiStore() };

rootStore.dataStore.seed([
  new Post({
    picture: 'assets/vegan-salad-bowl.jpg',
    title: 'Vegan salad bowl',
    user: 'Sarah Van Den Berghe',
    description:
      'Een heerlijke vegan avondmaal gemaakt! Vol met vitaminen!  😋',
    tags: ['Vegetarisch', 'Avondeten', 'Gezond'],
    time: new Date()
  })
]);

rootStore.dataStore.posts[0].addComment({ user: 'Laura', content: 'Yummy!' });
rootStore.dataStore.posts[0].addComment({ user: 'Anna', content: 'Ziet er goed uit!' });

export const storesContext = createContext(rootStore);