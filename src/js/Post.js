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
  }

  toggleLike(value) {
    this.liked = value;
  }

  addComment(user, comment) {
    this.comments.push({user: user, comment: comment});
  }
}

decorate(Post, {
  liked: observable,
  comments: observable,
  addComment: action,
  toggleLike: action,
  createPost: action
});

export default Post;
