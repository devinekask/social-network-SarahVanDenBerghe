import React from "react";
import { useObserver } from "mobx-react-lite";
import Comment from "../Comment/index";
import CommentAdd from "../CommentAdd/index";
import PropTypes from 'prop-types';
import styles from './Comments.module.css';

const Comments = ({ post }) => {
    return useObserver(() => (
        <div className={styles.wrapper}>
            <ul>
                {post.comments.map(comment => (
                    <Comment key={comment.id} comment={comment} />
                ))}
            </ul>
            <CommentAdd post={post} />
        </div>
    ));
};

Comments.propTypes = {
  post: PropTypes.object.isRequired,
};


export default Comments;
