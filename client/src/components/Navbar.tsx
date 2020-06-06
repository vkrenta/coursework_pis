import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Avatar } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/redux';
import { setOpenMenu, logOut } from '../app/actions';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      top: 0,
      zIndex: 3,
      position: 'sticky',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    buttonProfileText: {
      padding: 5,
    },
    buttonOutText: {
      padding: 5,
    },
    avatar: {
      backgroundColor: '#f44336',
    },
  })
);

export default function Navbar() {
  const classes = useStyles();
  const fullName = useSelector((state: RootState) => state.userInfo?.name!);
  const [firstName, lastName] = fullName.split(' ');
  const pageName = useSelector((state: RootState) => state.pageName);
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => dispatch(setOpenMenu(true))}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {pageName?.name}
          </Typography>
          <Button color="inherit" onClick={() => history.push('/profile')}>
            <Avatar
              className={classes.avatar}
            >{`${firstName[0]}${lastName[0]}`}</Avatar>
            <div className={classes.buttonProfileText}>{firstName}</div>
          </Button>
          <Button color="inherit">
            <div
              className={classes.buttonOutText}
              onClick={() => {
                dispatch(logOut());
              }}
            >
              Вихід
            </div>
            <ExitToAppIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
