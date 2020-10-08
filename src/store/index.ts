/**
 * 把所有子模块的reducers在此合并
 */

import { combineReducers } from 'redux';
import demoReducers from './demo/reducers';
import moduleTwoReducers from './moduleTwo/reducers';
import tabReducers from './tabs/reducers';

const rootReducer = combineReducers( {
	demoState: demoReducers,
	moduleTwo: moduleTwoReducers,
	tabStore: tabReducers
} );

export default rootReducer;