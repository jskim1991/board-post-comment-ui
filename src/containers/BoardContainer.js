import React, { Component } from 'react';
import BoardListView from "../views/BoardListView";
import axios from 'axios';
import {inject, observer} from "mobx-react";
import autobind from "autobind-decorator";

@inject('boardStore', 'userStore')
@autobind
@observer
class BoardContainer extends Component {

    componentDidMount() {
        this.loadBoards();
    }

    loadBoards() {

        const { authenticationHeader } = this.props.userStore;

        axios.get('api/board/all', {
            // withCredentials: true,
            // auth: {
            //     username: 'john',
            //     password: 'root'
            // }
            // headers: {
            //     'Authorization': authenticationHeader
            // }
        }
            )
            .then(response => this.onSetBoards(response.data))
            .catch(error => console.log(error))
    }

    onSetBoards(boards) {
        this.props.boardStore.setBoards(boards);
    }

    render() {
        console.log("RENDER");
        const { boards } = this.props.boardStore;
        const { loggedIn } = this.props.userStore;

        return (
            // loggedIn ? <BoardListView boards={boards}/> : <BoardListView />
            <BoardListView boards={boards}/>
        )
    }
}

export default BoardContainer;