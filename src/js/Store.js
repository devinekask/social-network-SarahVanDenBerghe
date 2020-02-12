import Post from './Post';

class Store {

  constructor() {
    this.posts = [];
  }

  addPost(picture, title, user, description, tags) {
    this.posts.push(new Post({ picture, title, user, description, tags }));
  }

  // get unreadLength() {
  //   return this.messages.filter(message => message.unread).length;
  // }
}

export default Store;
