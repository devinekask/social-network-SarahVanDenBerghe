import { v4 as uuidv4 } from 'uuid';

class Comment {
    constructor({ user, content }) {
        this.id = uuidv4();
        this.user = user;
        this.content = content;
    }
}

export default Comment;
