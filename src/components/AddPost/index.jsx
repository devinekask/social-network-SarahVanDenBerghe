import React, { useState } from 'react';
import { useObserver } from "mobx-react-lite";
import { useStore } from '../../hooks';
import styles from './AddPost.module.css';

const FormPost = () => {
    const store = useStore();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState('');
    const [image, setImage] = useState('assets/vegan-salad-bowl.jpg');


    const handleSubmitForm = (store, e) => {
        e.preventDefault();
        store.addPost(image, title, 'Anoniem', description, tags);
        setTitle('');
        setDescription('');
        setTags('');
        setImage('');
    }; 


    const handleLoadImage = target => {
        // const preview = document.querySelector('img');
        const file = target.files[0];
        const reader = new FileReader();

        const handleLoadReader = e => {
            // preview.src = e.currentTarget.result;
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
        <form className={styles.form} onSubmit={e => handleSubmitForm(store, e)}>
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
                 {/* <img src="" height="200" alt="preview" /> */}
                <button className={styles.submit} type="submit">Voeg toe </button>
        </form>
    ));
};

export default FormPost;
