import { AnyAction, combineReducers } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import authReducer from './auth';
import dataReducer from './data';

const rootReducer = combineReducers({
  authState: authReducer,
  dataState: dataReducer,
});

export type RootReducerT = ReturnType<typeof rootReducer>;
export type AppDispatch = ThunkDispatch<RootReducerT, any, AnyAction>;

export default rootReducer;