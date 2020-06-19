import React from 'react';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles({
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
});

interface ToggleMenuIconProps {
  menuOpen: boolean;
  openMenu: any;
  closeMenu: any;
}

export const ToggleMenuIcon: React.FC<ToggleMenuIconProps> = ({
  menuOpen,
  openMenu,
  closeMenu,
}) => {
  const classes = useStyles();
  return (
    <IconButton
      edge="start"
      color="inherit"
      aria-label="open drawer"
      onClick={openMenu}
      className={clsx(classes.menuButton, menuOpen && classes.menuButtonHidden)}
    >
      <MenuIcon />
    </IconButton>

    // <IconButton
    //   className={classes.menuButton}
    //   color="inherit"
    //   aria-label="Open drawer"
    //   onClick={menuOpen ? closeMenu : openMenu}
    // >
    //   <MenuIcon />
    // </IconButton>
  );
};

const mapStateToProps = (state: any) => {
  return {
    menuOpen: state.app.menuOpen,
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    openMenu: () => dispatch({ type: 'APP_MENU_OPEN' }),
    closeMenu: () => dispatch({ type: 'APP_MENU_CLOSE' }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToggleMenuIcon);
