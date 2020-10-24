import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./index.css";
import "./App.css";

import HeaderComponent from "./Component/HeaderComponent";
import FooterComponent from "./Component/FooterComponent";
import IndexComponent from "./Component/IndexComponent";
import LoginComponent from "./Component/LoginComponent";
import SignupComponent from "./Component/SignupComponent";
import CareerpathComponent from "./Component/CareerpathComponent";
import { Container } from "react-bootstrap";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Container>
            <HeaderComponent />
            {
              <Switch>
                <Route exact path='/' component={IndexComponent}></Route>
                <Route
                  exact
                  path='/careerpath'
                  component={CareerpathComponent}
                ></Route>
                <Route exact path='/login' component={LoginComponent}></Route>
                <Route exact path='/signup' component={SignupComponent}></Route>
              </Switch>
            }
            <FooterComponent />
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
