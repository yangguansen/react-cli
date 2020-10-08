import * as TabActions from './actions';

export default ( state = TabActions.initState, action: any ) => {

	switch ( action.type ) {
		case TabActions.SET_ACTIVE:
			return Object.assign( {}, state, { activeTab: action.activeTab } );
		case TabActions.SET_TAB_ARRAY:
			return Object.assign( {}, state, { tabArray: action.tabArray } );
		default:
			return state;
	}

};


