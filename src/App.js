import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import NavbarComp from "./components/navbarComp";
import FooterComp from './components/footerComp';
import authPage from "./pages/authPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <NavbarComp />
        <Switch>
          <Route path="/" component={LandingPage} exact />
          <Route path="/auth" component={authPage} />
        </Switch>
        <FooterComp />
      </div>
    );
  }
}

export default App;
