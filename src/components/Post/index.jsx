import React from "react";
import { Link } from "react-router-dom";
import { useObserver } from "mobx-react-lite";
import Comments from "../Comments/index";
import PostLike from "../PostLike/index";
import PostImage from "../PostImage/index";
import PostInfo from "../PostInfo/index";
import PropTypes from 'prop-types';
import styles from './Post.module.css';

const Post = ({ post }) => {

    return useObserver(() => (
        <li className={styles.post} key={post.title}>
            <PostLike post={post} />
            <PostImage post={post} />
            <div className={styles.post__text}>
                <Link to={`/detail/${post.id}`}>
                    <PostInfo post={post} />
                </Link>
                <Comments post={post} />
            </div>
        </li>
    ));
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
};


export default Post;
