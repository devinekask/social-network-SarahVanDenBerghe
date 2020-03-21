import DataStore from './DataStore';
import Post from '../models/Post';
import User from "../models/User";

test('Create a new empty store', () => {
  const store = new DataStore();
  expect(store.users).toBeInstanceOf(Array);
  expect(store.posts).toBeInstanceOf(Array);
  expect(store.posts.length).toBe(0);
  expect(store.users.length).toBe(0);
  expect(store).not.toBeUndefined();
});

const getSeedData = store => {
  const user = new User({
    id: "sarahvdb",
    name: "Sarah Van Den Berghe",
    avatar: "https://i.pravatar.cc/300",
    store
  });
  
  const post = new Post({
      id: '0',
      picture: 'assets/vegan-salad-bowl.jpg',
      title: 'Vegan salad bowl',
      user: user,
      description:
        'Een heerlijke vegan avondmaal gemaakt! Vol met vitaminen!  😋',
      tags: ['Vegetarisch', 'Avondeten', 'Gezond'],
      time: new Date(),
      store
    })

    return [user, post]
}

test('Test adding post and user in store', () => {
  const store = new DataStore();
  getSeedData(store);
  expect(store.posts.length).toBe(1);
  expect(store.users.length).toBe(1);
});

test('Test seeding a store', () => {
  const store = new DataStore();
  getSeedData(store);
  expect(store.posts.length).toBe(1);
  expect(store.users.length).toBe(1);
});

test('Get post by id', () => {
  const store = new DataStore();
  getSeedData(store);
  const post = store.getPostById('0')
  expect(post).toBeDefined();
  expect(post).toBe(store.posts[0]);
  expect(post.id).toBe('0');
});