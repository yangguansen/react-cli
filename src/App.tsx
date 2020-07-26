import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import HomePage from './home/index';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ExpensePage from './expense';

function App( ) {


	return (
		<div className="App">

			<Router>
				<Link to='/home'>to home</Link>
				<br/>
				<Link to='/expense'>to expense</Link>
				<Switch>
					<Route path="/home" component={HomePage}></Route>
					<Route path="/expense" component={ExpensePage}></Route>
				</Switch>

			</Router>
		</div>


	);
}

export default App;
