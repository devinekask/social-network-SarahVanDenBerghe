import Post from './Post';

test('Create a new post', () => {
  const post = new Post({
    picture: '../src/assets/img/vegan-salad-bowl.jpg',
    title: 'Vegan salad bowl',
    user: 'Sarah Van Den Berghe',
    description: 'Een heerlijke vegan avondmaal gemaakt! Vol met vitaminen!  😋',
    tags: ['Vegetarisch', 'Avondeten', 'Gezond']
  });
  expect(post.picture).toContain('.jpg' || '.jpeg' || '.png' || '.webp');
  expect(post.title).toBeDefined();
  expect(post.user).toBeDefined();
  expect(post.description).toBeDefined();
  expect(post.tags.length).toBeGreaterThan(0);
  expect(post.liked).toBeFalsy();
  expect(post.comments.length).toBe(0);
});

test('Add a comment to a post', () => {
  const post = new Post({
    picture: '../src/assets/img/vegan-salad-bowl.jpg',
    title: 'Vegan salad bowl',
    user: 'Sarah Van Den Berghe',
    description: 'Een heerlijke vegan avondmaal gemaakt! Vol met vitaminen!  😋',
    tags: ['Vegetarisch', 'Avondeten', 'Gezond']
  });

  post.addComment('Laura', 'Yummy!'),
  expect(post.comments.length).toBe(1);
  expect(post.comments[0].user).toBeDefined();
  expect(post.comments[0].comment).toBeDefined();
});

test('Like a post', () => {
  const post = new Post({
    picture: '../src/assets/img/vegan-salad-bowl.jpg',
    title: 'Vegan salad bowl',
    user: 'Sarah Van Den Berghe',
    description: 'Een heerlijke vegan avondmaal gemaakt! Vol met vitaminen!  😋',
    tags: ['Vegetarisch', 'Avondeten', 'Gezond']
  });

  post.toggleLike(true);
  expect(post.liked).toBeTruthy();
});
