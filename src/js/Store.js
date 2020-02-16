import Post from './Post';
import {decorate, observable, action, configure} from 'mobx';

configure({enforceActions: 'observed'});

class Store {
  constructor() {
    this.posts = [];
  }

  seed(data) {
    this.posts.push(...data);
  }

  addPost(picture, title, user, description, tags) {
    this.posts.push(new Post({picture, title, user, description, tags}));
  }
}

decorate(Store, {
  posts: observable,
  addPost: action,
  seed: action
});

export default Store;
