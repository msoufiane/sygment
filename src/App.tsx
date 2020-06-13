import React from 'react';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Routes from './routes';
import { Theme } from './ui';

const useStyles = makeStyles({
  root: {
      display: 'flex', height: '100vh'
  },
});

function App() {
    const classes = useStyles();

    return (
        <ThemeProvider theme={Theme}>
            <Grid container component="main" className={classes.root}>
                <CssBaseline />
                <Routes/>
            </Grid>
        </ThemeProvider>
    );
}

export default App;
