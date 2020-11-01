import { lazy } from 'react';

const UseStatePage = lazy( () => import( 'src/pages/UseState' ) );
const UseContextPage = lazy( () => import( 'src/pages/UseContext' ) );
const DemoPage = lazy( () => import( 'src/pages/Demo/index' ) );
const ReduxPage = lazy( () => import( 'src/pages/Redux' ) );
const DragPage = lazy( () => import( 'src/pages/Draggable' ) );
const DragTestPage = lazy( () => import( 'src/pages/dnd' ) );



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
	},
	{
		title: 'drop and drag',
		path: '/dnd',
		component: DragPage
	},
	{
		title: 'dnd',
		path: '/dndtest',
		component: DragTestPage
	}
];
