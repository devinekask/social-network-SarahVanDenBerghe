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

  toggleLike() {
    this.liked = true;
    console.log('clicked');
  }

  addComment(user, comment) {
    this.comments.push({user: user, comment: comment});
  }
}

export default Post;
