import { createContext } from 'react';
import DataStore from '../stores/DataStore';
import UiStore from "../stores/UiStore";
import Post from './../models/Post';
import User from "../models/User";

const rootStore = { dataStore: new DataStore(), uiStore: new UiStore() };

const user1 = new User({
  id: "sarahvdb",
  name: "Sarah Van Den Berghe",
  store: rootStore.dataStore,
  avatar: "https://i.pravatar.cc/300"
});

const user2 = new User({
  id: "liencardoen",
  name: "Lien Cardoen",
  store: rootStore.dataStore,
  avatar: "https://i.pravatar.cc/300"
});

const user3 = new User({
  id: "lieselotg",
  name: "Lieselot Geirnaert",
  store: rootStore.dataStore,
  avatar: "https://i.pravatar.cc/300"
});

const user4 = new User({
  id: "mathiasdw",
  name: "Mathias De Wilde",
  store: rootStore.dataStore,
  avatar: "https://i.pravatar.cc/300"
});


rootStore.dataStore.seed([
  new Post({
    picture: 'assets/vegan-salad-bowl.jpg',
    title: 'Vegan salad bowl',
    user: user3,
    description:
      'Een heerlijke vegan avondmaal gemaakt! Vol met vitaminen!  😋',
    tags: ['Vegetarisch', 'Avondeten', 'Gezond'],
    time: new Date(),
  }), new Post({
    picture: 'assets/sushi-met-kip.jpg',
    title: 'Sushi met kip',
    user: user2,
    description:
      'Dit kunstwerkje gemaakt tijdens de kookles!',
    tags: ['Sushi', 'Trendy'],
    time: new Date(),
  })
]);

rootStore.dataStore.posts[0].addComment({ user: user1, content: 'Yummy' });
rootStore.dataStore.posts[0].addComment({ user: user2, content: 'Ziet er goed uit!' });
rootStore.dataStore.posts[1].addComment({ user: user4, content: 'Wooow' });
rootStore.dataStore.posts[1].addComment({ user: user3, content: 'Love it!' });

rootStore.uiStore.setCurrentUser(user1);
window.store = rootStore;

export const storesContext = createContext(rootStore);