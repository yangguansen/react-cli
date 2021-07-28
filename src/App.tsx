import React from 'react';
import styles from './App.module.scss';
import { Route, Switch, withRouter, RouteComponentProps } from 'react-router-dom';
import appRoute from './route/index';

function App( props: RouteComponentProps ) {
	return (

		<div className={styles.App}>
			<Switch>
				{
					appRoute.map( ( { path, component } ) => {
						return (
							<Route path={path} component={component} key={path} exact={true}></Route>
						);
					} )
				}
			</Switch>
		</div>

	);

}

export default withRouter( App );
