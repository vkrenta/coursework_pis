import React from 'react';
import {
  Drawer,
  makeStyles,
  Theme,
  createStyles,
  Typography,
  ListItem,
  ListItemIcon,
  ListItemText,
  List,
  Divider,
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { setOpenMenu } from '../app/actions';
import { useHistory } from 'react-router-dom';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import StoreIcon from '@material-ui/icons/Store';
import EventNoteIcon from '@material-ui/icons/EventNote';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: 320,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    navbar: {
      flexGrow: 1,
      minHeight: 64,
    },
  })
);

type MenuItemProps = {
  icon: React.ReactNode;
  title: string;
  path: string;
};

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <>
      <ListItem
        button
        alignItems="center"
        onClick={() => {
          history.push(props.path);
          dispatch(setOpenMenu(false));
        }}
      >
        <ListItemIcon>{props.icon}</ListItemIcon>
        <ListItemText primary={props.title} />
      </ListItem>
    </>
  );
};

export default function SideMenu() {
  const classes = useStyles();
  const pageName = useSelector((state: RootState) => state.pageName);
  const isOpened = useSelector((state: RootState) => state.isMenuOpened);
  const dispatch = useDispatch();
  return (
    <>
      <Drawer
        anchor="left"
        open={isOpened}
        onClose={() => dispatch(setOpenMenu(false))}
      >
        <div className={classes.root}>
          <AppBar position="static" className={classes.navbar}>
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={() => dispatch(setOpenMenu(false))}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                {pageName?.name}
              </Typography>
            </Toolbar>
          </AppBar>
          <Divider />
          <List>
            <MenuItem
              icon={<ConfirmationNumberIcon />}
              title="Мої квитки"
              path="/purchases"
            />
            <MenuItem
              icon={<StoreIcon />}
              title="Придбати квиток"
              path="/buyticket"
            />
          </List>
          <Divider />
          <List>
            <MenuItem
              icon={<EventAvailableIcon />}
              title="Додати подію"
              path="/addevent"
            />
            <MenuItem icon={<EventNoteIcon />} title="Події" path="/events" />
          </List>
          <Divider />
          <List>
            <MenuItem
              icon={<AccountCircleIcon />}
              title="Мій профіль"
              path="/profile"
            />
            <MenuItem icon={<ExitToAppIcon />} title="Вийти" path="/logout" />
          </List>
        </div>
      </Drawer>
    </>
  );
}
