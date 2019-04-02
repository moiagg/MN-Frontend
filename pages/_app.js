import App, { Container } from "next/app";
import React from "react";
import Head from "next/head";
import Package from "../package.json";
import withReduxStore from "../lib/with-redux-store";
import { Provider } from "react-redux";
import Navbar from "../src/components/Navbar.js";
import jwt_decode from "jwt-decode";
// Utilities
import setAuthToken from "../src/utils/setAuthToken";
// Actions
import { setCurrentUser, logoutUser } from "../src/actions/authActions";
import { clearCurrentProfile } from "../src/actions/profileActions";
import {store}from '../src/store'

if (typeof (Storage) !== "undefined") {
//   //use the local storage

//   // Checks for token
  const jwtToken = localStorage.jwtToken
  if (jwtToken) {
    //set auth token header auth
    setAuthToken(jwtToken)
    // Decode token and get user info and exp
    const decoded = jwt_decode(jwtToken);
    // Set User and is Authenticated
    
    console.log(store.dispatch(setCurrentUser(decoded)));

    //Check for Expired token
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      // Logout user
      store.dispatch(logoutUser());
      // CLear Current Profile
      store.dispatch(clearCurrentProfile());

    }
  }
}



class MyApp extends App {
  render() {
    const { name } = Package;
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <Container>
        <Provider store={reduxStore}>
          <Head>
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
              key="viewport"
            />
            <link rel="stylesheet" href="./static/bootstrap.min.css" />
          </Head>
          <Navbar siteName={name} />
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withReduxStore(MyApp);
