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
                    <p className={styles.detail__title}>Titel hier</p>
                    <p className={styles.detail__description}>Heerlijke vegetarische quinoa gemaakt deze middag, vol met proteïnen! <span role="img" aria-label="emoji">😋</span></p>
                    <ul className={styles.detail__tags}>
                        <li className={styles.tag}>Tag</li>
                        <li className={styles.tag}>Tag</li>
                    </ul>
                    {/* <ul className={styles.detail__comments}>
                        <li className={styles.comment}>
                            <span className={styles.comment__user}>User: </span>
                            Hallo
                        </li>
                        <li className={styles.comment}>
                            <span className={styles.comment__user}>User: </span>
                            Hallo
                        </li>
                    </ul> */}
                    <Comments post={post} />
                    {/* <form className={styles.form}>
                        <div className={styles.wrapper}>
                            <label htmlFor="comment" className="hidden">Voeg een comment toe</label>
                            <input
                                id="comment"
                                className={styles.comment__input}
                                type="text"
                                placeholder="Type een reactie"
                            />
                            <button
                                className={styles.comment__submit}
                                type="button"
                                style={{ backgroundImage: `url(assets/arrow.svg)` }}
                            />
                        </div>
                    </form> */}
                </div>
            </div>
            : '' }
        </div>
    ));
};

export default Detail;