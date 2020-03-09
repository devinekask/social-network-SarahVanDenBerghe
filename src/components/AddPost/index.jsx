import React, { useState } from 'react';
import { useObserver } from "mobx-react-lite";
import { useStores } from '../../hooks';
import styles from './AddPost.module.css';
import { useHistory } from 'react-router-dom'

const FormPost = () => {
    const { dataStore, uiStore } = useStores();
    let history = useHistory();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState('');
    const [image, setImage] = useState('assets/vegan-salad-bowl.jpg');


    const handleSubmitForm = e => {
        e.preventDefault();
        dataStore.addPost(image, title, uiStore.currentUser, description, tags);
        setTitle('');
        setDescription('');
        setTags('');
        setImage('');
        history.push("/")
    }; 

    const handleLoadImage = target => {
        const file = target.files[0];
        const reader = new FileReader();

        const handleLoadReader = e => {
            setImage(e.currentTarget.result)
        }
        
        reader.addEventListener('load', handleLoadReader);
        reader.readAsDataURL(file);
    }

    const handleChangeTags = e => {
        const input = e.currentTarget.value;
        const inputTags = input.split(`,`);
        setTags(inputTags);
    }

    return useObserver(() => (
        <form className={styles.form} onSubmit={e => handleSubmitForm(e)}>
                <p className={styles.title}>Voeg een post toe</p>
                <label htmlFor="title" className={styles.post__label}><span className={styles.label__text}>Titel</span>
                    <input id="title" type="text" className={styles.post__input} value={title} onChange={e => setTitle(e.currentTarget.value)} required />
                </label>
                <label htmlFor="description" className={styles.post__label}><span className={styles.label__text}>Description</span>
                    <textarea id="description" rows="4" value={description} className={styles.post__input} onChange={e => setDescription(e.currentTarget.value)} required />
                </label>
                <label htmlFor="tags" className={styles.post__label}><span className={styles.label__text}>Tags</span>
                    <p>Plaats een komma tussen elke tag.</p>
                    <input id="tags" type="text" className={styles.post__input} onChange={e => handleChangeTags(e)} />
                </label>
                <label htmlFor="image" className={styles.post__label}><span className={styles.label__text}>Afbeelding</span>
                <input type="file" onChange={(e) => handleLoadImage(e.currentTarget)} accept=".jpg, .jpeg, .png" required />
                </label>
                <button className={styles.submit} type="submit">Voeg toe </button>
        </form>
    ));
};

export default FormPost;
