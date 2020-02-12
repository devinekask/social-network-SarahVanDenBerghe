import './style.css';
import Store from './js/Store';
import Post from './js/Post';



const renderPosts = store => {
  const $postList = document.querySelector('.posts');
  $postList.innerHTML = '';
  store.posts.forEach(post => {
    $postList.appendChild(createPost(post, store));
  })
};

const createPost = (post, store) => {
  console.log(post.tags)
  const $li = document.createElement('li');
  $li.classList.add('post')
  $li.innerHTML =
    `<button class="post__like post__like--false"><span class="hidden">Vind ik leuk</span></span></button>
    <img class="post__img" src="${post.picture}" alt="${post.title}">
    <div class="wrapper">
      <header>
        <h3 class="post__title">${post.title}</h3>
        <p class="post__user">${post.user}</p>
      </header>
      <p class="post__description">${post.description}</p>
      <ul class="post__tags">` +
        post.tags.map(tag => {
          return `<li class="tag">${tag}</li>`
        }).join('')
      + `</ul>
    </div>`;

  $li.addEventListener('click', () => toggleLike(post, store));
  return $li;
};

const toggleLike = (post, store) => {
  post.toggleLike();
};



const init = () => {
  const store = new Store();

  // Seed
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

  window.store = store;

  renderPosts(store);
};

init();
