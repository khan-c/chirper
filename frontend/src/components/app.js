import React, { Fragment } from "react";
import { Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

import NavBar from "./nav/navbar";
import MainPage from "./main/main_page";
import LoginForm from "./session/login_form";
import SignupForm from "./session/signup_form";
import Tweets from "./tweets/tweets";
import Profile from "./profile/profile";

const App = () => (
  <Fragment>
    <NavBar />
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginForm} />
      <AuthRoute exact path="/signup" component={SignupForm} />

      <ProtectedRoute exact path="/tweets" component={Tweets} />
      <ProtectedRoute exact path="/profile" component={Profile} />
    </Switch>
  </Fragment>
);

export default App;
