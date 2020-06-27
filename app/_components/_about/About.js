import React, { Component } from 'react';
import { connect } from 'react-redux';

class About extends Component {
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
                    About
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

export default connect(mapState, actionCreators)(About);