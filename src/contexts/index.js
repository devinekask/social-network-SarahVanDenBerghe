import { createContext } from 'react';
import DataStore from '../stores/DataStore';
import UiStore from "../stores/UiStore";
import Post from './../models/Post';
import User from "../models/User";
import Comment from "../models/Comment";

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


const post0 = new Post({
  id: '0',
  picture: 'assets/vegan-salad-bowl.jpg',
  title: 'Vegan salad bowl',
  user: user3,
  description:
    'Een heerlijke vegan avondmaal gemaakt! Vol met vitaminen!  😋',
  tags: ['Vegetarisch', 'Avondeten', 'Gezond'],
  time: new Date(),
  store: rootStore.dataStore
}); 

const post1 = new Post({
  id: '1',
  picture: 'assets/sushi-met-kip.jpg',
  title: 'Sushi met kip',
  user: user2,
  description:
    'Dit kunstwerkje gemaakt tijdens de kookles!',
  tags: ['Sushi', 'Trendy'],
  time: new Date(),
  store: rootStore.dataStore
})

new Comment({ user: user1, content: 'Yummy', post: post0 });
new Comment({ user: user2, content: 'Ziet er goed uit!', post: post0 });
new Comment({ user: user4, content: 'Wooow', post: post1 });
new Comment({ user: user3, content: 'Love it!', post: post1 });

rootStore.uiStore.setCurrentUser(user1);
window.store = rootStore;

export const storesContext = createContext(rootStore);