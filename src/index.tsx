//	IE polyfill
import './polyfill';
import 'core-js/es';
import 'mutation-observer';
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
//	IE polyfill end
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from 'src/store/index';

let store = createStore( rootReducer, { demoState: { count: 0 } } );
console.log( store.getState() );

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App/>
		</Router>
	</Provider>,
	document.getElementById( 'root' )
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
