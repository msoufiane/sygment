import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

interface PageWrapperProps {
  children?: React.ReactNode;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
  })
);

const PageWrapper: React.FC<PageWrapperProps> = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {props.children}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
};

export default PageWrapper;
