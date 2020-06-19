import { History } from 'history';
import { connectRouter } from 'connected-react-router';

import { combineReducers } from 'redux';
import appReducer from './appReducer';

const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    app: appReducer,
  });

export default createRootReducer;
