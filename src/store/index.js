import { combineReducers, createStore, applyMiddleware } from 'redux';
import userReducer from 'src/actions/user';
import thunk from 'redux-thunk';

const globalReducers = {
    userReducer,
    // global reducers goes here
}

const store = createStore( combineReducers( globalReducers ), applyMiddleware(thunk) );

store.reducers = globalReducers;

export default store;