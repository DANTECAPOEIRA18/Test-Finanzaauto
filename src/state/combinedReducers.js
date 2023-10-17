import { combineReducers } from 'redux';

import userReducer from './users/reducer';

const reducers = combineReducers({
  userReducer,
});

const rootReducer = (state, action) => reducers(state, action);

export default rootReducer;
