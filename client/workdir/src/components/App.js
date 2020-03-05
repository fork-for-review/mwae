import React, { Component, Fragment } from 'react';

/* Components */
import { Main } from './Main';

/* Constants */
import { AUTH_TOKEN } from '../Constants';

export default class App extends Component {

  state = {
    // Check if user is logged in
    isLoggedIn: localStorage.getItem(AUTH_TOKEN) === null ? false : true,
  }

  render() {
    return <Fragment><Main /></Fragment>;
  }
};
