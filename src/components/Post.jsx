import React from "react";
import { useObserver } from "mobx-react-lite";
import Comment from "./Comment";
import Form from "./Form";

const Post = ({ post }) => {
    return useObserver(() => (
        <li className="post" key={post.title}>
            <button
                style={{ backgroundImage: `url(${post.liked ? 'assets/heart--true.svg' : 'assets/heart--false.svg'})` }}
                className='post__like'
                onClick={() => {
                    post.toggleLike(post.liked ? false : true);
                }}
            >
                <span className="hidden">Vind ik leuk</span>
            </button>
            <img className="post__img" src={post.picture} alt={post.title} />
            <div className="post__info">
                <header>
                    <h3 className="post__title">{post.title}</h3>
                    <p className="post__user">{post.user}</p>
                </header>
                <p className="post__description">{post.description}</p>
                <ul className="post__tags">
                    {post.tags.map(tag => (
                        <li className="tag" key={tag}>
                            {tag}
                        </li>
                    ))}
                </ul>
            </div>
            <ul className="post__comments">
                {post.comments.map(comment => (
                    <Comment key={comment.id} comment={comment} />
                ))}
            </ul>
            <Form post={post} />
        </li>
    ));
};

export default Post;
