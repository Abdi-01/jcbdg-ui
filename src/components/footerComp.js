import React from 'react';

class FooterComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div style={{ display: 'flex', backgroundColor: 'grey' }}>
                <div>
                    <h6>Facebook</h6>
                </div>
                <div>
                    <h6>Latest Tweet</h6>
                    <p>Here you can use rows and columns
                    to organize your footer content. 
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                <div>
                    <h6>Our Company</h6>
                </div>
            </div>
        );
    }
}

export default FooterComp;