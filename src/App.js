import './App.css';
import Container from "@material-ui/core/Container";
import React, {Component} from "react";
import BoardContainer from "./containers/BoardContainer";
import Box from "@material-ui/core/Box";
import LoginContainer from "./containers/LoginContainer";
import {Route, Switch, withRouter} from "react-router-dom";

class App extends Component {
    render() {

        return (
            <div className="App">
                <Switch>
                    <Route exact path='/' component={LoginContainer} />
                    <Route path='/boards' component={BoardContainer} />
                </Switch>
            </div>
            // <Container>
            //     <Box m={3}><LoginContainer /></Box>
            //     <Box m={3}><BoardContainer /></Box>
            // </Container>
        );
    }
}

export default App;
