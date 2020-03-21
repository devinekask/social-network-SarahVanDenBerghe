import { v4 } from "uuid";

class User {
    constructor({ id = v4(), name, avatar = "", store }) {
        this.id = id;
        this.name = name;
        this.posts = [];
        this.avatar = avatar;
        this.store = store;

        if (!avatar) {
            this.avatar = `https://www.travelcontinuously.com/wp-content/uploads/2018/04/empty-avatar.png`;
        }

        if (!store) {
            throw new Error("No store detected");
        }

        this.store.addUser(this);
    }

    linkPost(post) {
        !this.posts.includes(post) && this.posts.push(post);
    }
}

export default User;
