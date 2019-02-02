import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppLayout from 'src/layouts';
import './App.css';

class App extends Component {
  render() {
    return (
		<Switch>
        	<Route path='/' component={AppLayout} />
    	</Switch>
    );
  }
}

export default App;
