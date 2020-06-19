import React from 'react';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

interface HeaderLogoProps {
  text: string;
}

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

const HeaderLogo: React.FC<HeaderLogoProps> = ({ text }) => {
  const classes = useStyles();
  return (
    <Typography
      component="h1"
      variant="h6"
      color="inherit"
      noWrap={true}
      className={classes.title}
    >
      {text}
    </Typography>
  );
};

export default HeaderLogo;
