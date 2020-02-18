// import './style.css';
import Store from './js/Store';
import Post from './js/Post';
import {autorun} from 'mobx';

const renderPosts = posts => {
  const $postList = document.querySelector('.posts');
  $postList.innerHTML = '';
  posts.forEach(post => {
    $postList.appendChild(createPost(post));
  });
};

const createPost = post => {
  const $li = document.createElement('li');
  $li.classList.add('post', post.liked ? 'post__like--true' : 'post__like--false');

  $li.innerHTML = post.createHTML();
  $li.querySelector('.post__like').addEventListener('click', () => toggleLike(post));
  return $li;
};

const toggleLike = post => {
  post.liked ? post.toggleLike(false) : post.toggleLike(true);
};

const init = () => {
  const store = new Store();

  autorun(() => {
    renderPosts(store.posts);
  });

  // Seed posts
  store.seed([
    new Post({
      picture: '../src/assets/img/vegan-salad-bowl.jpg',
      title: 'Vegan salad bowl',
      user: 'Sarah Van Den Berghe',
      description: 'Een heerlijke vegan avondmaal gemaakt! Vol met vitaminen!  😋',
      tags: ['Vegetarisch', 'Avondeten', 'Gezond']
    }),

    new Post({
      picture: '../src/assets/img/sushi-rolls.jpg',
      title: 'Sushi rolls',
      user: 'Sarah Van Den Berghe',
      description: 'Voor de eerste keer zelf sushi rolls proberen te maken!',
      tags: ['Aziatisch', 'Gezond']
    })
  ]);

  // Seed comments
  store.seed([
    store.posts[0].addComment('Laura', 'Yummy!'),
    store.posts[0].addComment('Anna', 'Ziet er goed uit!')
  ]);

  window.store = store;
};

init();
