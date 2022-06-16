import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Avery.css';
import _ from 'lodash';
// import { degrees, PDFDocument, rgb, StandardFonts } from 'pdf-lib';

class Avery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        };
    }

    componentDidMount() {
        
    }

    render() {

        // const template = PDFDocument.load('./templates/avery5160.pdf');
        // const pages = template.getPages();
        // const firstPage = pages[0];
        // const { width, height } = firstPage.getSize();

        // firstPage.drawText('Hello World', {
        //     x: width / 2,
        //     y: height / 2,
        //     size: 72,
        //     font: StandardFonts.HelveticaBold,
        //     color: rgb(0, 0, 0),
        //     rotate: degrees(0),
        //     align: 'center',
        //     valign: 'middle',
        //     lineHeight: 1.5,
        //     maxWidth: width,
        //     maxHeight: height,
        //     letterSpacing: 0,
        //     lineSpacing: 1.5,
        // });

        // const modifiedDocument = template.save();

        // download(modifiedDocument, "stickets.pdf", "application/pdf");

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