import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Home.css';
import _ from 'lodash';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <React.Fragment>
                <div className='container'>
                    Home
                </div>
            </React.Fragment>
        );
    }
}

function mapState(state) {
    
    return {
    
    };
}

const actionCreators = {
    
}

export default connect(mapState, actionCreators)(Home);