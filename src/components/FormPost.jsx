import React, { useState } from 'react';
import { useObserver } from "mobx-react-lite";
import PropTypes from 'prop-types';

const FormPost = ({ store }) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState('');
    const [image, setImage] = useState('assets/vegan-salad-bowl.jpg');


    const handleFormSubmit = (store, e) => {
        e.preventDefault();
        store.addPost(image, title, 'Anoniem', description, ['Vegetarisch', 'Avondeten', 'Gezond']);
        setTitle('');
    }; 

    // https://stackoverflow.com/questions/49467195/uploading-image-with-form-data-in-react
    // https://codeburst.io/image-uploading-using-react-and-node-to-get-the-images-up-c46ec11a7129

    return useObserver(() => (
        <form className="form" onSubmit={e => handleFormSubmit(store, e)}>
            <div className="wrapper">
                <p>Add a post</p>
                <label htmlFor="title">Title
                    <input id="title" type="text" value={title} onChange={e => setTitle(e.currentTarget.value)} />
                </label>
                {/* <label htmlFor="description">Description
                    <input id="description" type="text" onChange={e => setDescription(e.currentTarget.value)} />
                </label>
                <label htmlFor="tags">Tags
                    <input id="tags" type="text" onChange={e => setTags(e.currentTarget.value)} />
                </label>
                <label htmlFor="image">Image
                    <input type="file" onChange={(e) => setImage(e.currentTarget.value)} />
                </label> */}
                <button
                    className="comment__submit"
                    type="button"
                    style={{ backgroundImage: `url(assets/arrow.svg)` }}
                />
            </div>
        </form>
    ));
};

FormPost.propTypes = {
    store: PropTypes.object.isRequired
};

export default FormPost;
