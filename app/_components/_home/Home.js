import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Home.css';
import _ from 'lodash';
import ModalPopup from '../_modal/modal';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        };
    }

    handleShow() {
        this.setState({ show: true });
    }

    handleClose() {
        this.setState({ show: false });
    }

    doSomethingOnSave() {
        console.log('Saved');
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <React.Fragment>
                <div className='container'>
                    Home
                </div>
                <br />
                <div className='m-2'>
                    <ModalPopup
                        name={'Modal Example'}
                        heading={'Test'}
                        content={'This is the content of the modal'}
                        onSave={this.doSomethingOnSave}
                    />
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