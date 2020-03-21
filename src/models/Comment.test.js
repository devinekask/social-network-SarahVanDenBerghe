import Comment from "./Comment";
import DataStore from "../stores/DataStore";
import Post from './Post';

const getSeedData = store => {
    const post = new Post({
        id: store.posts.length,
        picture: 'assets/vegan-salad-bowl.jpg',
        title: 'Test',
        user: 'Sarah',
        description: 'Description',
        tags: ['Vegetarisch', 'Avondeten', 'Gezond'],
        time: new Date(),
        store
    });

    const comment = new Comment({
        user: 'Sarah',
        content: 'Test',
        post
    });

    return [post, comment];
}

test("Add a comment to a post", () => {
    const store = new DataStore();
    getSeedData(store);
    const post = store.posts[0];
    expect(post.comments.length).toBe(1);
    expect(post.comments[0].content).toBe('Test');
    expect(post.comments[0].user).toBe('Sarah');
});

test("Can't create a comment on undefined post", () => {
  expect(() => new Comment({ user: 'Sarah', content: 'Test' })).toThrow('No post detected');
});

test("Can't create a comment without text", () => {
  expect(() => new Comment({ user: 'Sarah', content: '' })).toThrow('No content detected');
});