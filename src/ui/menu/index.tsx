import React from 'react';
import { connect } from 'react-redux';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Drawer, Toolbar, AppBar } from '@material-ui/core';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import { mainListItems, secondaryListItems } from './listItems';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import clsx from 'clsx';

interface MenuWrapperProps {
  menuOpen: boolean;
  closeMenu: any;
  openMenu: any;
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) =>
  createStyles({
    toolbarIcon: {
      backgroundColor: '#24292e',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
    },
    drawerPaper: {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerPaperClose: {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
  })
);

export const Menu: React.FC<MenuWrapperProps> = (props) => {
  const classes = useStyles();
  const { menuOpen, openMenu, closeMenu } = props;
  return (
    <Drawer
      variant="permanent"
      // className={classes.drawer}
      // classes={{ paper: classes.drawerPaper }}
      classes={{
        paper: clsx(classes.drawerPaper, !menuOpen && classes.drawerPaperClose),
      }}
      open={menuOpen}
      // onClose={closeMenu}
    >
      <div className={classes.toolbarIcon}>
        {/*<IconButton onClick={closeMenu}>
          <ChevronLeftIcon />
    </IconButton> */}
      </div>
      <List>{mainListItems}</List>
      <Divider />
      <List>{secondaryListItems}</List>
      <Divider />
      <List>
        <ListItem button onClick={menuOpen ? closeMenu : openMenu}>
          {menuOpen ? (
            <>
              <ListItemIcon>
                <ChevronLeftIcon />
              </ListItemIcon>
              <ListItemText primary="Collapse Menu" />
            </>
          ) : (
            <ListItemIcon>
              <ChevronRightIcon />
            </ListItemIcon>
          )}
        </ListItem>
      </List>
    </Drawer>
  );
};
const mapStateToProps = (state: any) => {
  return {
    menuOpen: state.app.menuOpen,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    openMenu: () => dispatch({ type: 'APP_MENU_OPEN' }),
    closeMenu: () => dispatch({ type: 'APP_MENU_CLOSE' }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
