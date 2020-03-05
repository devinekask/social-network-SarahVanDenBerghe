import React from "react";
import { useObserver } from "mobx-react-lite";
import PostComment from "../PostComment/index";
import PostAddComment from "../PostAddComment/index";
import PropTypes from 'prop-types';
import styles from './PostComments.module.scss';

const PostComments = ({ post }) => {
    return useObserver(() => (
        <>
            <ul className={styles.post__comments}>
                {post.comments.map(comment => (
                    <PostComment key={comment.id} comment={comment} />
                ))}
            </ul>
            <PostAddComment post={post} />
        </>
    ));
};

PostComments.propTypes = {
  post: PropTypes.object.isRequired,
};


export default PostComments;
