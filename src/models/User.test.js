import User from "./User";
import DataStore from "../stores/DataStore";
import Post from './Post';

test("Create a new user", () => {
    const dataStore = new DataStore();
    const user = new User({ name: "Test", store: dataStore });
    expect(user.name).toBe("Test");
    expect(user.avatar).not.toBe("");
});

test("DataStore must have a reference to a created user", () => {
    const dataStore = new DataStore();
    expect(dataStore.users.length).toBe(0);
    const user = new User({ name: "Test", store: dataStore });
    expect(dataStore.users.length).toBe(1);
    expect(dataStore.users[0]).toStrictEqual(user);
});

test("Link a post to a user", () => {
    const user = new User({ name: "Test", store: new DataStore() });
    const post = new Post({ name: "testgroup", user, store: new DataStore() });
    expect(user.posts).toStrictEqual([]);
    user.linkPost(post);
    expect(user.posts).toContain(post);
    expect(user.posts[0].user).toBe(user);
});

test("Can't create a user without store", () => {
  expect(() => new User({ name: 'Sarah' })).toThrow('No store detected');
});
