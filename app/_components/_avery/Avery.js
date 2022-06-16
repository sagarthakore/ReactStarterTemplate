import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Avery.css';
import _ from 'lodash';

class Avery extends Component {
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
                    Avery
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

export default connect(mapState, actionCreators)(Avery);