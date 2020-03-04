import React from "react";
import { useObserver } from "mobx-react-lite";
import PropTypes from 'prop-types';
import styles from './PostComment.module.css';

const PostComment = ({ comment }) => {
    return useObserver(() => (
        <li className={styles.comment} key={comment.content}>
            <span className={styles.comment__user}>{comment.user}: </span>
            {comment.content}
        </li>
    ));
};

PostComment.propTypes = {
  comment: PropTypes.object.isRequired
};

export default PostComment;
