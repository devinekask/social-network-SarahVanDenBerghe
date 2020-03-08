import Post from '../models/Post';
import {decorate, observable, action, configure} from 'mobx';

configure({enforceActions: 'observed'});

class DataStore {
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

decorate(DataStore, {
  posts: observable,
  addPost: action,
  seed: action
});

export default DataStore;
