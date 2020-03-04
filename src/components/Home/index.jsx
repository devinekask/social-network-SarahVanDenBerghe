import React from "react";
import { useObserver } from "mobx-react-lite";
import Post from "../Post/index";
import { useStore } from '../../hooks';

const Home = () => {
    const store = useStore();
    
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

export default Home;