import React from "react";
import PropTypes from 'prop-types';
import styles from './PostInfo.module.css';
import Tags from "../Tags/index"

const PostInfo = ({ post }) => {
    return (
        <div className={styles.post__info}>
            <header>
                <h3 className={styles.post__title}>{post.title}</h3>
                <p className={styles.post__user}>{post.user.name}</p>
            </header>
            <p className={styles.post__description}>{post.description}</p>
            <Tags post={post} />
        </div>
    )
};

PostInfo.propTypes = {
  post: PropTypes.object.isRequired,
};


export default PostInfo;
