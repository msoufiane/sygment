import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
});

interface ToggleMenuIconProps {
  menuOpen: boolean;
}

export const ToggleMenuIcon: React.FC<ToggleMenuIconProps> = ({menuOpen}) => {
  const classes = useStyles();
  return (
    <IconButton
      className={classes.menuButton}
      color="inherit"
      aria-label="Open drawer"
    >
      <MenuIcon />
    </IconButton>
  );
};

export default ToggleMenuIcon;
