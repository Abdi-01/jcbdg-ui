import React, { Component } from 'react';
import CarouselComp from '../components/carouselComp';

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <h1>Landing Page</h1>
                <CarouselComp />
            </div>
         );
    }
}
 
export default LandingPage;