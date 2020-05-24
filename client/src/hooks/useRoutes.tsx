import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import SignUp from '../pages/Signup';
import VerifiedSuccess from '../pages/verified/VerifiedSuccess';
import VerifiedTwice from '../pages/verified/VerifiedTwice';
import VerifiedExpired from '../pages/verified/VerifiedExpired';
import Profile from '../pages/Profile';
import Navbar from '../components/Navbar';

export default function useRoutes(token: string | null) {
  return function () {
    if (!token)
      return (
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/verifiedsuccess" component={VerifiedSuccess} />
          <Route exact path="/verifiedtwice" component={VerifiedTwice} />
          <Route exact path="/verifiedexpired" component={VerifiedExpired} />
        </Switch>
      );

    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Redirect to="/profile" />
          </Route>
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/login" component={() => <Redirect to="/" />} />
        </Switch>
      </>
    );
  };
}
