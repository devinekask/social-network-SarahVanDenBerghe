import React from "react";
import PropTypes from 'prop-types';
import styles from './PostImage.module.css';

const PostImage = ({ post }) => {
  console.log(post.picture)
    return (
        <img className={styles.post__img} src={post.picture} alt={post.title} />
    );
};

PostImage.propTypes = {
  post: PropTypes.object.isRequired,
};


export default PostImage;
