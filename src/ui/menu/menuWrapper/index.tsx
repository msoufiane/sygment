import { createStyles, makeStyles } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import React from 'react';
import { ToolBarDivider } from '../../shared';

interface MenuWrapperProps {
}

const drawerWidth = 292;

const useStyles = makeStyles(
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth
    }
  })
);

export const MenuWrapper: React.FC<MenuWrapperProps> = props => {
  const classes = useStyles();

  return (
    <Drawer
      variant="temporary"
      className={classes.drawer}
      classes={{ paper: classes.drawerPaper }}
      open={false}
    >
      <ToolBarDivider />
      {props.children}
    </Drawer>
  );
};

export default MenuWrapper;

