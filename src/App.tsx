import React from "react";
import "./App.css";
import HomePage from "./home/index";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ExpensePage from "./expense";

function App() {
	return (
		<div className="App">
			<a href="/home">to home</a>
			<br/>
			<a href="/expense">to expense</a>
			<Router>
				<Switch>
					<Route path="/home" component={HomePage}></Route>
					<Route path="/expense" component={ExpensePage}></Route>
				</Switch>

			</Router>
		</div>


	);
}

export default App;
