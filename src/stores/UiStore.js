import { decorate, observable, action } from "mobx";
const VIEWS = { list: "list", detail: "detail" };
class UiStore {

    constructor() {
        this.currentView = VIEWS.list;
        this.currentPost = undefined;
    }

    setCurrentPost = post => {
        this.currentPost = post;
    };
}

decorate(UiStore, {
    currentView: observable,
    setCurrentView: action,
    currentPost: observable,
    setCurrentPost: action
});

export { VIEWS };
export default UiStore;
