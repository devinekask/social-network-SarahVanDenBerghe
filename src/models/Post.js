import {decorate, observable, action} from 'mobx';

class Post {
  constructor({id, picture, title, user, description, tags, liked = false, time, store}) {
    this.id = id;
    this.picture = picture;
    this.title = title;
    this.user = user;
    this.description = description;
    this.tags = tags;
    this.liked = liked;
    this.time  = time;
    this.comments = [];
    if (!store) {
      throw new Error("No store detected");
    }
    this.store = store;
    this.store.addPost(this);
  }
  
  toggleLike(value) {
    this.liked = value;
  }

  addComment(comment) {
    this.comments.push(comment);
  }

  get readableTime () {
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat('nl-NL', options).format(this.time);
  }
}

decorate(Post, {
  liked: observable,
  comments: observable,
  activeInput: observable,
  setComment: action,
  addComment: action,
  toggleLike: action,
  createPost: action
});

export default Post;
