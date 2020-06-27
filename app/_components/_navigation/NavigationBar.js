import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav } from 'react-bootstrap';
import Brand from '../../_images/brand.png'

class NavigationBar extends Component {

    render() {
        return (
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="/">
                <img
                    alt='coronavirus'
                    src={Brand}
                    width='36'
                    height='36'
                    className='d-inline-block align-top'
                />
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/"><strong>Home</strong></Nav.Link>
                    <Nav.Link href="/about"><strong>About</strong></Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}

function mapState(state) {
    return {

    };
}

const actionCreators = {

}

export default connect(mapState, actionCreators)(NavigationBar);