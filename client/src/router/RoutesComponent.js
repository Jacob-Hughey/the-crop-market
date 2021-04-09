import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

// Page
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';

class RoutesComponent extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/login" component={LoginPage} />
            </div>
      </BrowserRouter>
    );
  }
}

export default RoutesComponent;