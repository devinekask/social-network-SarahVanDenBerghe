import { v4 as uuidv4 } from 'uuid';

class Comment {
    constructor({ user, content, post }) {
        this.id = uuidv4();
        this.user = user;
        this.content = content;
        if (!content) {
          throw new Error('No content detected');
        }
        if (!post) {
            throw new Error("No post detected");
        }
        this.post = post;
        this.post.addComment(this);
    }
}

export default Comment;
