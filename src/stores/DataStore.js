import Post from '../models/Post';
import {decorate, observable, action, configure} from 'mobx';

configure({enforceActions: 'observed'});

class DataStore {
  constructor() {
    this.users = [];
    this.posts = [];
  }
  
  addUser(user) {
    this.users.push(user);
  }

  seed(data) {
    this.posts.push(...data);
  }

  addPost(picture, title, user, description, tags) {
    this.posts.push(new Post({picture, title, user, description, tags}));
  }

  getPostById = id => this.posts.find(post => post.id === id);
}

decorate(DataStore, {
  posts: observable,
  addPost: action,
  seed: action
});

export default DataStore;
