import React, { Suspense } from 'react';
import styles from './App.module.scss';
import { Route, Switch } from 'react-router-dom';
import appRoute from './route/index';
import LayoutComponent from 'src/pages/Components/Layout';
import { Spin } from 'antd';

function App() {
	return (
		<div className={styles.App}>
			<LayoutComponent>
				<Suspense fallback={<Spin size="large" style={{ 'top': '50%', 'position': 'absolute' }}></Spin>}>
					<Switch>
						{
							appRoute.map( ( { path, component } ) => {
								return (
									<Route path={path} component={component} key={path}></Route>
								);
							} )
						}
					</Switch>
				</Suspense>

			</LayoutComponent>
		</div>

	);

}

export default App;
