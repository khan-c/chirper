import React, { Fragment } from 'react';
import { Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import NavBar from './nav/navbar';
import MainPage from './main/main_page';
import LoginForm from './session/login_form';
import SignupForm from './session/signup_form';

const App = () => (
  <Fragment>
    <NavBar />
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginForm} />
      <AuthRoute exact path="/signup" component={SignupForm} />
    </Switch>
  </Fragment>
);

export default App;
