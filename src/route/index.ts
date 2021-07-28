import UseStatePage from '../pages/UseState';
import UseContextPage from '../pages/UseContext';
import DemoPage from '../pages/Demo';
import ReduxPage from '../pages/Redux';
import Home from '../pages/Home';

export default [
	{
		path: '/',
		component: Home
	},
	{
		path: '/UseState',
		component: UseStatePage
	},
	{
		path: '/UseContext',
		component: UseContextPage
	},
	{
		path: '/demo',
		component: DemoPage
	},
	{
		path: '/redux',
		component: ReduxPage
	}
];
