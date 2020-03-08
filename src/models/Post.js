import Comment from '../models/Comment';
import {decorate, observable, action} from 'mobx';
import { v4 as uuidv4 } from 'uuid';

class Post {
  constructor({picture, title, user, description, tags, liked = false, time}) {
    this.id = uuidv4();
    this.picture = picture;
    this.title = title;
    this.user = user;
    this.description = description;
    this.tags = tags;
    this.liked = liked;
    this.time  = time;
    this.comments = [];
  }

  toggleLike(value) {
    this.liked = value;
  }

  addComment(user, content) {
    this.comments.push(new Comment(user, content));
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
