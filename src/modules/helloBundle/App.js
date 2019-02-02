import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from './pages/main';
import './bundle.css';

class App extends Component {
	render() {
		return (
			<Switch>
				<Route path='/' component={MainPage} />
			</Switch>
		);
	}
}

export default App;
