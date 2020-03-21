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
  
  addPost(post) {
    this.posts.push(post);
  }

  getPostById = id => this.posts.find(post => post.id === id);
}

decorate(DataStore, {
  posts: observable,
  addPost: action,
  seed: action,
  getPostById: action
});

export default DataStore;


