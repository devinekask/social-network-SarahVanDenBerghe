import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Store from './js/Store';
import Post from './js/Post';
import {useObserver} from 'mobx-react-lite';

const store = new Store();

 store.seed([
   new Post({
     picture: 'vegan-salad-bowl.jpg',
     title: 'Vegan salad bowl',
     user: 'Sarah Van Den Berghe',
     description: 'Een heerlijke vegan avondmaal gemaakt! Vol met vitaminen!  😋',
     tags: ['Vegetarisch', 'Avondeten', 'Gezond']
   }),
 ]);

 store.seed([
   store.posts[0].addComment('Laura', 'Yummy!'),
   store.posts[0].addComment('Anna', 'Ziet er goed uit!')
 ]);

const App = () => {
  return useObserver(() => (
    <>
      <ul className="posts">
        <li className="post">
          <button className="post__like post__like--true">
            <span className="hidden">Vind ik leuk</span>
          </button>
          <img
            className="post__img"
            src={store.posts[0].picture}
            alt={store.posts[0].title}
          />
          <div className="post__info">
            <header>
              <h3 className="post__title">{store.posts[0].title}</h3>
              <p className="post__user">{store.posts[0].user}</p>
            </header>
            <p className="post__description">{store.posts[0].description}</p>
            <ul className="post__tags">
              <li className="tag">Een tag</li>
            </ul>
          </div>
          <ul className="post__comments">
            <li className="comment">
              <span className="comment__user">User: </span>Comment
            </li>
          </ul>
          <form className="form">
            <div className="wrapper">
              <label className="hidden">Voeg een comment toe</label>
              <input
                className="comment__input"
                type="text"
                placeholder="Type een reactie"
              />
              <button className="comment__submit" type="submit" />
            </div>
          </form>
        </li>
      </ul>
    </>
  ));
};

ReactDOM.render(<App />, document.getElementById('root'));
