import React from "react";
import { useStores } from '../../hooks';
import styles from './Profile.module.css';
import BackLink from "../BackLink/index";



const Profile = () => {
    const { uiStore } = useStores();

    return (
        <>
        <BackLink />
        <article className={styles.wrapper}>
            <img src={uiStore.currentUser.avatar} alt="Avatar" />
            <div className={styles.user}>
                <h2 className={styles.title}>Profiel</h2>
                    <p>{uiStore.currentUser.name}</p>
                    <p>Aantal posts: {uiStore.currentUser.posts.length}</p>
            </div>
        </article>
        </>
    );
};

export default Profile;
