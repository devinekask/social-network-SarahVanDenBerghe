import Post from './Post';

test('Create a new post', () => {
  const post = new Post({
    picture: '../src/assets/img/vegan-salad-bowl.jpg',
    title: 'Vegan salad bowl',
    user: 'Sarah Van Den Berghe',
    description: 'Een heerlijke vegan avondmaal gemaakt! Vol met vitaminen! 😋',
    tags: ['Vegetarisch', 'Avondeten', 'Gezond']
  });
  expect(post.picture).toContain('.jpg' || '.jpeg' || '.png' || '.webp');
  expect(post.title).toBe('Vegan salad bowl');
  expect(post.user).toBe('Sarah Van Den Berghe');
  expect(post.description).toBe('Een heerlijke vegan avondmaal gemaakt! Vol met vitaminen! 😋');
  expect(post.tags.length).toBeGreaterThan(0);
  expect(post.liked).toBeFalsy();
  expect(post.comments.length).toBe(0);
});

test('Add a comment to a post', () => {
  const post = new Post({
    picture: '../src/assets/img/vegan-salad-bowl.jpg',
    title: 'Vegan salad bowl',
    user: 'Sarah Van Den Berghe',
    description: 'Een heerlijke vegan avondmaal gemaakt! Vol met vitaminen! 😋',
    tags: ['Vegetarisch', 'Avondeten', 'Gezond']
  });

  post.addComment('Laura', 'Yummy!'),
  expect(post.comments.length).toBe(1);
  expect(post.comments[0].user).toBe('Laura');
  expect(post.comments[0].comment).toBe('Yummy!');
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
