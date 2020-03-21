import UiStore from "./UiStore";
import User from "../models/User";
import DataStore from "./DataStore";

test("Create a UiStore", () => {
    const uiStore = new UiStore();
    expect(uiStore.currentUser).toBeUndefined();
});

test("Set current user", () => {
    const uiStore = new UiStore();
    const dataStore = new DataStore();
    const user = new User({ name: "testuser", store: dataStore });
    uiStore.setCurrentUser(user);
    expect(uiStore.currentUser).toBe(user);
});
