import React from "react";
import { useObserver } from "mobx-react-lite";
import PropTypes from 'prop-types';
import styles from './PostLike.module.css';

const Like = ({ post }) => {
    return useObserver(() => (
        <button
            style={{ backgroundImage: `url(${post.liked ? 'assets/heart--true.svg' : 'assets/heart--false.svg'})` }}
            className={styles.post__like}
            onClick={() => {
                post.toggleLike(post.liked ? false : true);
            }}
        >
            <span className="hidden">Vind ik leuk</span>
        </button>

    ));
};

Like.propTypes = {
  post: PropTypes.object.isRequired,
};


export default Like;
