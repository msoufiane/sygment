import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { createBrowserHistory } from 'history';

import Routes from './routes';
import { Theme } from './ui';
import configureStore from './redux/store/configureStore';

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
});

const App = () => {
  const classes = useStyles();
  const browserHistory = createBrowserHistory();
  const reduxStore = configureStore(browserHistory);

  return (
    <ReduxProvider store={reduxStore}>
      <ThemeProvider theme={Theme}>
        <div className={classes.root}>
          <CssBaseline />
          <Routes />
        </div>
      </ThemeProvider>
    </ReduxProvider>
  );
};

export default App;
