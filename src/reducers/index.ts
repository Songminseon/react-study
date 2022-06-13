import { combineReducers } from 'redux';
import userReducer from '@Reducers/userReducer';
import authReducer from '@Reducers/authReducer';

export default combineReducers({ userReducer, authReducer });
