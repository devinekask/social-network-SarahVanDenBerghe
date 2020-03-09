import { decorate, observable, action } from "mobx";
class UiStore {

    constructor() {
        this.currentUser = undefined;
    }

    setCurrentUser(user) {
        this.currentUser = user;
    }
}

decorate(UiStore, {
    currentUser: observable,
    setCurrentUser: action
});

export default UiStore;
