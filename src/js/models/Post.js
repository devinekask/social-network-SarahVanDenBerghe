import {decorate, observable, action} from 'mobx';
class Post {
  constructor({picture, title, user, description, tags, liked = false}) {
    this.picture = picture;
    this.title = title;
    this.user = user;
    this.description = description;
    this.tags = tags;
    this.liked = liked;
    this.comments = [];
    this.activeInput = { user: 'Anoniem', comment: '' };
  }

  toggleLike(value) {
    this.liked = value;
  }

  setComment(user, comment) {
    this.activeInput = { user: user, comment: comment }
  }

  addComment(user, comment) {
    this.comments.push({user: user, comment: comment});
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
