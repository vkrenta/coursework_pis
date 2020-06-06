import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import SignUp from '../pages/Signup';
import VerifiedSuccess from '../pages/verified/VerifiedSuccess';
import VerifiedTwice from '../pages/verified/VerifiedTwice';
import VerifiedExpired from '../pages/verified/VerifiedExpired';
import Profile from '../pages/Profile';
import Navbar from '../components/Navbar';
import Menu from '../components/Menu';
import BuyingTicketScreen from '../pages/BuyingTicket';
import AddingEventScreen from '../pages/AddingEventScreen';
import EventsScreen from '../pages/Events.screen';

export default function useRoutes(token: string | null) {
  const [begin, setBegin] = React.useState(true);
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
          {begin ? null : <Redirect to="/" />}
        </Switch>
      );

    setBegin(false);
    return (
      <>
        <Menu />
        <Navbar />

        <Switch>
          <Route exact path="/">
            <Redirect to="/profile" />
          </Route>
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/buyticket" component={BuyingTicketScreen} />
          <Route exact path="/addevent" component={AddingEventScreen} />
          <Route exact path="/events" component={EventsScreen} />
          <Redirect to="/" />
        </Switch>
      </>
    );
  };
}
