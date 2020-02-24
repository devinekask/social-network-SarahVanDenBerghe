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

store.posts[0].addComment('Laura', 'Yummy!');
store.posts[0].addComment('Anna', 'Ziet er goed uit!');

const App = () => {

  const pushComment = (post, e) => {
    post.addComment(post.activeInput.user, post.activeInput.comment);
    post.setComment(post.activeInput.user, '')
    e.preventDefault();
  }
  
  return useObserver(() => (
    <>
      <ul className="posts">
        {store.posts.map(post => (
          <li className="post" key={post.title}>
            <button
              className={`post__like ${
                post.liked ? 'post__like--true' : 'post__like--false'
              }`}
              onClick={() => {
                post.toggleLike(post.liked ? false : true);
              }}
            >
              <span className="hidden">Vind ik leuk</span>
            </button>
            <img className="post__img" src={post.picture} alt={post.title} />
            <div className="post__info">
              <header>
                <h3 className="post__title">{post.title}</h3>
                <p className="post__user">{post.user}</p>
              </header>
              <p className="post__description">{post.description}</p>
              <ul className="post__tags">
                {post.tags.map(tag => (
                  <li className="tag" key={tag}>
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            <ul className="post__comments">
              {post.comments.map(comment => (
                <li className="comment" key={comment.comment}>
                  <span className="comment__user">{comment.user}: </span>
                  {comment.comment}
                </li>
              ))}
            </ul>
            <form
              className="form"
              onSubmit={e =>
                pushComment(post, e)
              }
            >
              <div className="wrapper">
                <label className="hidden">Voeg een comment toe</label>
                <input
                  className="comment__input"
                  type="text"
                  placeholder="Type een reactie"
                  value={post.activeInput.comment}
                  onChange={e => post.setComment('Anoniem', e.currentTarget.value)}
                />
                <button className="comment__submit" type="button" />
              </div>
            </form>
          </li>
        ))}
      </ul>
    </>
  ));
};

ReactDOM.render(<App />, document.getElementById('root'));
