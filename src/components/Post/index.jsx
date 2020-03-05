import React from "react";
import { useObserver } from "mobx-react-lite";
import PostComments from "../PostComments/index";
import PostLike from "../PostLike/index";
import PostImage from "../PostImage/index";
import PostInfo from "../PostInfo/index";
import PropTypes from 'prop-types';
import styles from './Post.module.scss';

const Post = ({ post }) => {
    return useObserver(() => (
        <li className={styles.post} key={post.title}>
            <PostLike post={post} />
            <PostImage post={post} />
            <PostInfo post={post} />
            <PostComments post={post} />
        </li>
    ));
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
};


export default Post;
