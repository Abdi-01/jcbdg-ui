import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import LandingPage from './pages/landingPage';
import FooterComp from './components/footerComp';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={LandingPage} exact/>
        </Switch>
        <FooterComp />
      </div>
    );
  }
}

export default App;
