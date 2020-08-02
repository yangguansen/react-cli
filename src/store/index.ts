/**
 * 把所有子模块的reducers在此合并
 */

import { combineReducers } from 'redux';
import demoReducers from './demo/reducers';

const rootReducer = combineReducers( {
	demoState: demoReducers
} );

export default rootReducer;