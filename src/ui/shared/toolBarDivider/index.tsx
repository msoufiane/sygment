import React from 'react';

import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      ...theme.mixins.toolbar,
    },
  })
);

const ToolBarDivider: React.FC = () => {
  const classes = useStyles();

  return <div className={classes.toolbar} />;
};

export default ToolBarDivider;
