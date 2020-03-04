import React, { useState } from 'react';
import { useObserver } from "mobx-react-lite";
import PropTypes from 'prop-types';

const FormComment = ({ post }) => {

    const [content, setContent] = useState('');

    const handleFormSubmit = (post, e) => {
        e.preventDefault();
        if (content !== '') {
            post.addComment({ user: 'Anoniem', content: content });
            setContent('');
        }
    };

    return useObserver(() => (
      <form className="form" onSubmit={e => handleFormSubmit(post, e)}>
        <div className="wrapper">
          <label htmlFor="comment" className="hidden">Voeg een comment toe</label>
          <input
            id="comment"
            className="comment__input"
            type="text"
            placeholder="Type een reactie"
            value={content}
            onChange={e => setContent(e.currentTarget.value)}
          />
          <button
            className="comment__submit"
            type="button"
            style={{ backgroundImage: `url(assets/arrow.svg)` }}
          />
        </div>
      </form>
    ));
};

FormComment.propTypes = {
  post: PropTypes.object.isRequired
};

export default FormComment;
