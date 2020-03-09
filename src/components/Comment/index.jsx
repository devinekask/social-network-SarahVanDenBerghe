import React from "react";
import { useObserver } from "mobx-react-lite";
import PropTypes from 'prop-types';
import styles from './Comment.module.css';

const Comment = ({ comment }) => {
    return useObserver(() => (
        <li className={styles.comment} key={comment.content}>
            <span className={styles.comment__user}>{comment.user.name}: </span>
            {comment.content}
        </li>
    ));
};

Comment.propTypes = {
  comment: PropTypes.object.isRequired
};

export default Comment;
