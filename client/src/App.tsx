import React from 'react';
import Login from './pages/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import SignUp from './pages/Signup';
import { SnackbarProvider } from 'notistack';
import Notifier from './components/Notifier';
import { IconButton, Icon } from '@material-ui/core';
import VerifiedSuccess from './pages/verified/VerifiedSuccess';
import VerifiedTwice from './pages/verified/VerifiedTwice';
import VerifiedExpired from './pages/verified/VerifiedExpired';

function App() {
  const notistackRef = React.useRef<any>(null);
  const onClickDismiss = (key: number) => () => {
    notistackRef.current?.closeSnackbar(key);
  };
  return (
    <Router>
      <SnackbarProvider
        ref={notistackRef}
        maxSnack={5}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        action={(key: number) => (
          <>
            <IconButton onClick={onClickDismiss(key)} color="inherit">
              <Icon>deleteforever</Icon>
            </IconButton>
          </>
        )}
      >
        <Notifier />
        <Switch>
          <Route exact path="/">
            <Redirect to="/verifiedexpired" />
          </Route>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/verifiedsuccess" component={VerifiedSuccess} />
          <Route exact path="/verifiedtwice" component={VerifiedTwice} />
          <Route exact path="/verifiedexpired" component={VerifiedExpired} />
        </Switch>
      </SnackbarProvider>
    </Router>
  );
}

export default App;
