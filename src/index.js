import './style.css';
import Store from './js/Store';
import Post from './js/Post';

const renderPosts = store => {
  const $postList = document.querySelector('.posts');
  $postList.innerHTML = '';
  store.posts.forEach(post => {
    $postList.appendChild(createPost(post, store));
  });
};

const createPost = (post, store) => {
  const $li = document.createElement('li');
  $li.classList.add(
    'post',
    post.liked ? 'post__like--true' : 'post__like--false'
  );

  $li.innerHTML = post.createHTML();
  $li.querySelector('.post__like').addEventListener('click', () => toggleLike(post, store));
  return $li;
};

const toggleLike = (post, store) => {
  post.toggleLike();
  renderPosts(store);
};

const init = () => {
  const store = new Store();

  // Seed post
  store.posts.push(new Post({
    picture: '../src/assets/img/IMG_8644.jpg',
    title: 'Vegetarische quinoa',
    user: 'Sarah Van Den Berghe',
    description: 'Heerlijke vegetarische quinoa gemaakt deze middag, vol met proteïnen! 😋',
    tags: ['Vegetarisch', 'Middageten', 'Gezond']
  }));

  store.posts.push(new Post({
    picture: '../src/assets/img/IMG_8644.jpg',
    title: 'Spaghetti',
    user: 'Marga Persyn',
    description: 'Tekstje 😋',
    tags: ['Vegetarisch', 'Middageten', 'Gezond']
  }));

  // Seed comment on post
  store.posts[0].addComment('Lien', 'Yummy!');
  store.posts[0].addComment('Lieselot', 'Ziet er goed uit!');

  window.store = store;
  renderPosts(store);
};

init();
