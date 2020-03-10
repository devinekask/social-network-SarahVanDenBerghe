import React from "react";
import { useObserver } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import { useStores } from '../../hooks';
import styles from './Detail.module.css';
import Comments from "../Comments/index";
import BackLink from "../BackLink/index";
import Tags from "../Tags/index";
import { useHistory } from 'react-router-dom'

const Detail = () => {
    const { dataStore, uiStore } = useStores();
    const { id } = useParams();
    const post = dataStore.getPostById(id);
    let history = useHistory();

    return useObserver(() => {
        if (!post) {
            history.push("/");
        }

        return (
        <div className={styles.wrapper}>
            <BackLink />
            {post ?
            <div className={styles.detail}>      
                    <img className={styles.detail__img} src={`${post.picture.includes('assets/') ? `../${post.picture}` : post.picture}`} alt={post.title} />
                <div className={styles.detail__info}>
                    <div>
                        <div className={styles.detail__header}>
                                <img src={uiStore.currentUser.avatar} alt="" />
                            <div>
                                <p className={styles.detail__author}>{post.user.name}</p>
                                <p className={styles.detail__date}>{post.readableTime}</p>
                            </div>
                        </div>
                        <p className={styles.detail__title}>{post.title}</p>
                        <p className={styles.detail__description}>{post.description}</p>
                        <Tags post={post} />
                    </div>
                    <Comments post={post} />
                </div>
            </div>
            : '' }
        </div>
        )
    });
};

export default Detail;