import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import globalStore from 'src/store';
import termReducer from './actions/term';
import App from './App';

class Root extends Component {
	constructor(props) {
		super(props);

		const globalReducers = globalStore.reducers;
		const reducers = {
			...globalReducers,
			termReducer
		}

		this.store = createStore( combineReducers(reducers), applyMiddleware(thunk) );
	}
	
	render() {
		return (
			<Provider store={this.store} globalStore={globalStore}>
				<App />
			</Provider>
		)
	}
}

export default Root;