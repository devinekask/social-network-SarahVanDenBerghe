import Store from './Store';
import Post from './Post';

test('Create a new empty store', function() {
  const store = new Store();
  expect(store).not.toBeUndefined();
  expect(store.posts.length).toBe(0);
});

test('Seed a store with new post', function() {
  const store = new Store();
  store.seed([
    new Post({
      picture: '../src/assets/img/vegan-salad-bowl.jpg',
      title: 'Vegan salad bowl',
      user: 'Sarah Van Den Berghe',
      description: 'Een heerlijke vegan avondmaal gemaakt! Vol met vitaminen!  😋',
      tags: ['Vegetarisch', 'Avondeten', 'Gezond']
    })
  ]);
  expect(store.posts.length).toBe(1);
});

test('add a post', () => {
  const store = new Store();
  store.addPost({
    picture: '../src/assets/img/vegan-salad-bowl.jpg',
    title: 'Vegan salad bowl',
    user: 'Sarah Van Den Berghe',
    description: 'Een heerlijke vegan avondmaal gemaakt! Vol met vitaminen!  😋',
    tags: ['Vegetarisch', 'Avondeten', 'Gezond']
  });
  expect(store.posts.length).toBe(1);
  expect(store.posts[0].picture).toBeDefined();
  expect(store.posts[0].title).toBeDefined();
  expect(store.posts[0].user).toBeDefined();
  expect(store.posts[0].description).toBeDefined();
  expect(store.posts[0].tags).toBeDefined();
  expect(store.posts[0].liked).toBeFalsy();
});
