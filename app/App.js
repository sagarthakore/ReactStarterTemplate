import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'bootswatch/dist/flatly/bootstrap.min.css';
import NavigationBar from './_components/_navigation/NavigationBar';
import Home from './_components/_home/Home';
import About from './_components/_about/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';;
import './_styles/style.css';
import Avery from './_components/_avery/Avery';

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <NavigationBar />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/about' component={About} />
                        <Route exact path='/avery' component={Avery} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

function mapState(state) {
    return {

    };
}

const actionCreators = {

}

export default connect(mapState, actionCreators)(App);