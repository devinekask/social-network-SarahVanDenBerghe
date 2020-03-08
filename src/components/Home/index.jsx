import React from "react";
import { useObserver } from "mobx-react-lite";
import Post from "../Post/index";
import { useStores } from '../../hooks';
import styles from './Home.module.css';

const Home = () => {
    const { dataStore } = useStores();

    return useObserver(() => (
        <ul className={styles.posts}>
            {dataStore.posts.map(post => (
                <Post
                    key={post.id}
                    post={post}
                />
            ))}
        </ul>
    ));
};

export default Home;