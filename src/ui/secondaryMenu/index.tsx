import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import React from 'react';
import SecondaryMenuIcon from './secondaryMenuIcon';
import { ToolBarDivider } from '../shared';
import classNames from 'classnames';

const drawerWidth = 256;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1
      }
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      ...theme.mixins.toolbar
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap'
    },
    list: {
      paddingTop: '8 px',
      paddingBottom: '8 px'
    }
  })
);

const SecondaryMenu: React.FC = props => {
  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: true,
        [classes.drawerClose]: false
      })}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: true,
          [classes.drawerClose]: false
        })
      }}
      open={true}
      data-testid='drawerWrapper'
    >
      <ToolBarDivider />
      <SecondaryMenuIcon />
      <Divider />
      {props.children}
    </Drawer>
  );
};

export default SecondaryMenu;