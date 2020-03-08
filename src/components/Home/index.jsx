import React from "react";
import { useObserver } from "mobx-react-lite";
import Post from "../Post/index";
import { useStores } from '../../hooks';
import styles from './Home.module.css';
import { VIEWS } from "../../stores/UiStore";

const Home = () => {
    const { dataStore, uiStore } = useStores();
    console.log(uiStore)

    return useObserver(() => (
        <ul className={styles.posts}>
            {dataStore.posts.map(post => (
                <Post
                    key={post.id}
                    post={post}
                    onClick={() => {
                        uiStore.setCurrentPost(post);
                        uiStore.setCurrentView(VIEWS.detail);
                        console.log('klik');
                        console.log(uiStore)
                    }}
                />
            ))}
        </ul>
    ));
};

export default Home;