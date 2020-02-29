import React from "react";
import { useObserver } from "mobx-react-lite";
import PropTypes from 'prop-types';

const Form = ({ post }) => {

const pushComment = (post, e) => {
    post.addComment({user: 'Anoniem', content: post.activeInput});
    post.setComment('')
    e.preventDefault();
  }

    return useObserver(() => (
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
                    value={post.activeInput}
                    onChange={e => post.setComment(e.currentTarget.value)}
                />
                <button className="comment__submit" type="button" style={{ backgroundImage: `url(assets/arrow.svg)` }} />
            </div>
        </form>
    ));
};

Form.propTypes = {
  post: PropTypes.object.isRequired
};

export default Form;
