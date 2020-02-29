import Comment from '../models/Comment';
import {decorate, observable, action} from 'mobx';
import { v4 as uuidv4 } from 'uuid';

class Post {
  constructor({picture, title, user, description, tags, liked = false}) {
    this.id = uuidv4();
    this.picture = picture;
    this.title = title;
    this.user = user;
    this.description = description;
    this.tags = tags;
    this.liked = liked;
    this.comments = [];
    this.activeInput = '';
  }

  toggleLike(value) {
    this.liked = value;
  }

  setComment(comment) {
    this.activeInput = comment;
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
