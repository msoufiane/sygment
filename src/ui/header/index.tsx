import React from 'react';
import {
  ButtonBase,
  Avatar,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Badge,
} from '@material-ui/core';

import Gravatar from 'react-gravatar';

import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import clsx from 'clsx';
import HeaderLogo from './headerLogo';
import ToggleMenuIcon from './toggleMenuIcon';
import SettingsIcon from '@material-ui/icons/Settings';
import NotificationsIcon from '@material-ui/icons/Notifications';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
}));

export const Header = (props: any) => {
  const { menuOpen } = props;
  const classes = useStyles();
  return (
    <AppBar position="absolute" className={clsx(classes.appBar)}>
      <Toolbar className={classes.toolbar}>
        {/* <ToggleMenuIcon /> TODO Insert dynamic logo here*/}
        <HeaderLogo text="Sygment" />
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <ButtonBase style={{ marginLeft: '16px' }}>
          <Avatar
            alt="Soufiane Mghanen"
            src="/static/images/avatar/1.jpg"
            style={{ marginRight: '8px' }}
            className={classes.small}
          >
            <Gravatar
              email="mgh.soufiane@gmail.com"
              rating="pg"
              default="monsterid"
            />
          </Avatar>
          <Typography variant="subtitle1">Soufiane Mghanen</Typography>
        </ButtonBase>
        <IconButton color="inherit">
          <SettingsIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
const mapStateToProps = (state: any) => {
  return {
    menuOpen: state.app.menuOpen,
  };
};

export default connect(mapStateToProps)(Header);
