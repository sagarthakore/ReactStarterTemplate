import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Avery.css';
import _ from 'lodash';

class Avery extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {}

    render() {
        const names = [
            'John',
            'Jane',
            'Mary',
            'Mark',
            'Bob',
            'Tom',
            'Sam',
            'Peter',
            'Sally',
            'Alice',
            'John',
            'Jane',
            'Mary',
            'Mark',
            'Bob',
            'Tom',
            'Sam',
            'Peter',
            'Sally',
            'Alice',
        ];

        return (
            <React.Fragment>
                <div className="container">
                    <h1>Avery</h1>
                </div>
                <br />
                <div className="row">
                    {names.map((name) => (
                        <div className='col-sm-6'>
                            <span>{name}</span>
                        </div>
                    ))}
                </div>

                <br />
                <div>This is a test print document</div>
            </React.Fragment>
        );
    }
}

function mapState(state) {
    return {};
}

const actionCreators = {};

export default connect(mapState, actionCreators)(Avery);
