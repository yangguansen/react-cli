import React from 'react';
import styles from './App.module.scss';
import { Route, Switch, withRouter, RouteComponentProps } from 'react-router-dom';
import { Button } from 'antd';
import appRoute from './route/index';

function App( props: RouteComponentProps ) {

	const toPage = ( page: string ): void => {
		props.history.push( page );
	};

	return (

		<div className={styles.App}>
			{
				props.location.pathname !== '/demo' ? (
					<div className={styles.menu}>
						{
							appRoute.map( ( { path, component } ) => {
								return (
									<Button type="link" onClick={( event: React.MouseEvent ) => toPage( path )} key={path}>{path}</Button>
								);
							} )
						}
					</div>
				) : ( null )
			}

			<Switch>
				{
					appRoute.map( ( { path, component } ) => {
						return (
							<Route path={path} component={component} key={path}></Route>
						);
					} )
				}
			</Switch>
		</div>

	);

}

export default withRouter( App );
