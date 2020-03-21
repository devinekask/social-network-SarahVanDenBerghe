import Post from './Post';
import DataStore from "../stores/DataStore";

const getPostData = store => {
  const post = new Post({
    id: store.posts.length,
    picture: 'assets/vegan-salad-bowl.jpg',
    title: 'Test',
    user: 'Sarah',
    description: 'Description',
    tags: ['Vegetarisch', 'Avondeten', 'Gezond'],
    time: new Date(),
    store
  });

  return post;
}

test("Create a new post", () => {
  const store = new DataStore();
  const post = getPostData(store);
  expect(post.title).toBeDefined();
  expect(post.picture).toContain('.jpg' || '.jpeg' || '.png' || '.webp');
  expect(post.title).toBe('Test');
  expect(post.user).toBe('Sarah');
  expect(post.description).toBe('Description');
  expect(post.tags).toBeInstanceOf(Array);
  expect(post.tags.length).toBe(3);
  expect(post.liked).toBeFalsy();
  expect(post.comments.length).toBe(0);
  expect(post.time).toBeDefined();
  expect(post.store).toBeDefined();
});

test("Comment on post", () => {
  const store = new DataStore();
  const post = getPostData(store);
  post.addComment('Sarah', 'Test');
  expect(post.comments.length).toBe(1);
});

test('Like a post', () => {
  const store = new DataStore();
  const post = getPostData(store);

   post.toggleLike(true);
   expect(post.liked).toBeTruthy();
});

test('Get time', () => {
  const store = new DataStore();
  const post = getPostData(store);

  const time = post.readableTime;
  expect(time).toBeDefined();
});

test("Can't create a post without a store", () => {
  expect(() => new Post({ title: 'Test' })).toThrow('No store detected');
});