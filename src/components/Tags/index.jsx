import React from "react";
import PropTypes from 'prop-types';
import styles from './Tags.module.css';

const Comments = ({ post }) => {
    return (
        <>
            {post.tags ?
                <ul className={styles.post__tags}>
                    {post.tags ? post.tags.map(tag => (<li className={styles.tag} key={tag}>{tag}</li>)) : ''}
                </ul> : ''}
        </>
    );
};

Comments.propTypes = {
    post: PropTypes.object.isRequired,
};


export default Comments;
