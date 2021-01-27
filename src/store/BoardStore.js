import {action, makeObservable, observable, toJS} from "mobx";

class BoardStore {

    constructor() {
        makeObservable(this);
    }


    @observable
    _boards = [];

    get boards() {
        return toJS(this._boards);
    }

    @action
    setBoards(boards) {
        this._boards = boards;
        console.log(toJS(this._boards));
    }

}

export default new BoardStore();