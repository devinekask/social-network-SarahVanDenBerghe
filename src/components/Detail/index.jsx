import React from "react";
import { useObserver } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import { useStores } from '../../hooks';
import styles from './Detail.module.css';
import Comments from "../Comments/index";

const Detail = () => {
    const { dataStore } = useStores();
    const { id } = useParams();

    const posts = dataStore.posts;
    let post = undefined;

    for (let i = 0; i < posts.length; i++) {
        if (posts[i].id === id) {
                post = posts[i];
        }
    }

    // let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    // {new Intl.DateTimeFormat('nl-NL', options).format(post.time)}

    return useObserver(() => (
        <div className={styles.wrapper}>
            <p>Keer terug</p>
            {post ?
            <div className={styles.detail}>      
                <img className={styles.detail__img} src="./../assets/vegan-salad-bowl.jpg" alt="" />
                <div className={styles.detail__info}>
                    <div className={styles.detail__header}>
                        <img src="./../assets/vegan-salad-bowl.jpg" alt="" />
                        <div>
                            <p className={styles.detail__author}>Sarah Van Den Berghe</p>
                            <p className={styles.detail__date}>zaterdag 7 maart 2020</p>
                        </div>
                    </div>
                    <p className={styles.detail__title}>{post.title}</p>
                        <p className={styles.detail__description}>{post.description}</p>
                    <ul className={styles.detail__tags}>
                        <li className={styles.tag}>Tag</li>
                        <li className={styles.tag}>Tag</li>
                    </ul>
                    <Comments post={post} />
                </div>
            </div>
            : '' }
        </div>
    ));
};

export default Detail;