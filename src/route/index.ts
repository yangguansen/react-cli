import { lazy } from 'react';

const UseStatePage = lazy( () => import( 'src/pages/UseState' ) );
const UseContextPage = lazy( () => import( 'src/pages/UseContext' ) );
const DemoPage = lazy( () => import( 'src/pages/Demo' ) );
const ReduxPage = lazy( () => import( 'src/pages/Redux' ) );


export default [
	{
		title: 'UseState',
		path: '/UseState',
		component: UseStatePage
	},
	{
		title: 'UseContext',
		path: '/UseContext',
		component: UseContextPage
	},
	{
		title: 'demo page',
		path: '/demo',
		component: DemoPage
	},
	{
		title: 'redux',
		path: '/redux',
		component: ReduxPage
	}
];
