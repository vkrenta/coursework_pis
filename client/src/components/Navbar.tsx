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
import { setOpenMenu } from '../app/actions';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      top: 0,
      zIndex: 3,
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
            {pageName}
          </Typography>
          <Button color="inherit">
            <Avatar
              className={classes.avatar}
            >{`${firstName[0]}${lastName[0]}`}</Avatar>
            <div className={classes.buttonProfileText}>{firstName}</div>
          </Button>
          <Button color="inherit">
            <div className={classes.buttonOutText}>Вихід</div>
            <ExitToAppIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
