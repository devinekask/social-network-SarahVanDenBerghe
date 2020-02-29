import React from "react";
import { useObserver } from "mobx-react-lite";
import Post from "./Post";
import PropTypes from 'prop-types';

const Posts = ({ store }) => {
    return useObserver(() => (
        <ul className="posts">
            {store.posts.map(post => (
                <Post
                    key={post.id}
                    post={post}
                />
            ))}
        </ul>
    ));
};

Posts.propTypes = {
  store: PropTypes.object.isRequired
};


export default Posts;
