import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import Notifier from './components/Notifier';
import { IconButton, Icon, LinearProgress } from '@material-ui/core';
import useRoutes from './hooks/useRoutes';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './app/redux';
import { getUserData } from './app/actions';
import Preloader from './components/Preloader';

function App() {
  const notistackRef = React.useRef<any>(null);
  const onClickDismiss = (key: number) => () => {
    notistackRef.current?.closeSnackbar(key);
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  const token = useSelector((state: RootState) => state.token);
  const startLoader = useSelector((state: RootState) => state.startLoader);
  const isQuerying = useSelector((state: RootState) => state.isQuerying);
  const Routes = useRoutes(token!);

  if (startLoader) return <Preloader />;

  return (
    <Router>
      {isQuerying ? <LinearProgress variant="indeterminate" /> : null}
      <SnackbarProvider
        ref={notistackRef}
        maxSnack={5}
        preventDuplicate
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
        <Routes />
      </SnackbarProvider>
    </Router>
  );
}

export default App;
