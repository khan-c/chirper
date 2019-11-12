import React from 'react';
import ReactDOM from 'react-dom';
import jwt_decode from 'jwt-decode';

import Root from './components/root';
import './index.css';

import configureStore from './store/store';

import { setAuthToken } from './util/session_api_util';
import { logout } from './actions/session_actions';


document.addEventListener('DOMContentLoaded', () => {
  let store;

  // If a returning user has a session token stored in localStorage
  if (localStorage.jwtToken) {
    // Set the token as acommon header for all axios requests
    setAuthToken(localStorage.jwtToken);

    // Decode token to obtain user's info
    const decodedUser = jwt_decode(localStorage.jwtToken);

    // Create preconfigured state that can be immediately added to store
    const preloadedState = { session: { isAuthenticated: true, user: decodedUser } };

    store = configureStore(preloadedState);

    const currentTime = Date.now() / 1000;

    // If user's token has expired
    if (decodedUser.exp < currentTime) {
      // Logout user and redirect to login page
      store.dispatch(logout());
      window.location.href = '/login';
    }
  } else {
    // first time user, start with empty store
    store = configureStore({});
  }

  // render root component and pass store as prop
  const root = document.getElementById('root');

  ReactDOM.render(<Root store={store} />, root);
});
