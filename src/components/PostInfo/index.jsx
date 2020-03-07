import React from "react";
import PropTypes from 'prop-types';
import styles from './PostInfo.module.css';

const PostInfo = ({ post }) => {
    return (
        <div className={styles.post__info}>
            <header>
                <h3 className={styles.post__title}>{post.title}</h3>
                <p className={styles.post__user}>{post.user}</p>
            </header>
            <p className={styles.post__description}>{post.description}</p>
            <ul className={styles.post__tags}>
                {post.tags ? post.tags.map(tag => (<li className={styles.tag} key={tag}>{tag}</li>)) : '' }
            </ul>
        </div>
    )
};

PostInfo.propTypes = {
  post: PropTypes.object.isRequired,
};


export default PostInfo;
