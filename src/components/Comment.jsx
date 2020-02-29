import React from "react";
import { useObserver } from "mobx-react-lite";

const Comment = ({ comment }) => {
    return useObserver(() => (
        <li className="comment" key={comment.content}>
            <span className="comment__user">{comment.user}: </span>
            {comment.content}
        </li>
    ));
};

export default Comment;
