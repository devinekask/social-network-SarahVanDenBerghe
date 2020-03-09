import React, { useState } from 'react';
import { useObserver } from "mobx-react-lite";
import PropTypes from 'prop-types';
import styles from './CommentAdd.module.css';
import { useStores } from '../../hooks';

const CommentAdd = ({ post }) => {

    const { uiStore } = useStores();
    const [content, setContent] = useState('');

    const handleFormSubmit = (post, e) => {
        e.preventDefault();
        if (content !== '') {
          post.addComment({ user: uiStore.currentUser, content });
            setContent('');
        }
    };

    return useObserver(() => (
      <form className={styles.form} onSubmit={e => handleFormSubmit(post, e)}>
        <div className={styles.wrapper}>
          <label htmlFor="comment" className="hidden">Voeg een comment toe</label>
          <input
            id="comment"
            className={styles.comment__input}
            type="text"
            placeholder="Type een reactie"
            value={content}
            onChange={e => setContent(e.currentTarget.value)}
          />
          <button
            className={styles.comment__submit}
            type="button"
            style={{ backgroundImage: `url(assets/arrow.svg)` }}
          />
        </div>
      </form>
    ));
};

CommentAdd.propTypes = {
  post: PropTypes.object.isRequired
};

export default CommentAdd;
