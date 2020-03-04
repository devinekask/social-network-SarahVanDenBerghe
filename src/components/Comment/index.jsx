import React from "react";
import { useObserver } from "mobx-react-lite";
import PropTypes from 'prop-types';

const Comment = ({ comment }) => {
    return useObserver(() => (
        <li className="comment" key={comment.content}>
            <span className="comment__user">{comment.user}: </span>
            {comment.content}
        </li>
    ));
};

Comment.propTypes = {
  comment: PropTypes.object.isRequired
};

export default Comment;
