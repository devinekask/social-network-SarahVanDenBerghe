import React from "react";
import { useObserver } from "mobx-react-lite";
import Post from "./Post";

// this.posts = [];

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


export default Posts;
