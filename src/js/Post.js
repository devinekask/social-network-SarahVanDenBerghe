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

  // Niet finaal, al gemaakt voor volgende fases
  createPost() {
    return `<button class="post__like"><span class="hidden">Vind ik leuk</span></span></button>
    <img class="post__img" src="${this.picture}" alt="${this.title}">
    <div class="post__info">
      <header>
        <h3 class="post__title">${this.title}</h3>
        <p class="post__user">${this.user}</p>
      </header>
      <p class="post__description">${this.description}</p>
      <ul class="post__tags">
        ${this.tags.map(tag => { return `<li class="tag">${tag}</li>`;}).join('')}
      </ul>
    </div>
    <ul class="post__comments">
      ${this.comments.map(comment => { return `<li class="comment"><span class="comment__user">${comment.user}:</span> ${comment.comment}</li>`;}).join('')}
    </ul>
    <form class="form">
      <div class="wrapper">
        <label class="hidden">Voeg een comment toe</label>
        <input class="comment__input" type="text" placeholder="Type een reactie">
        <button class="comment__submit" type="submit">
      </div>
    </form>`;
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
