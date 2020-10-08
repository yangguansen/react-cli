import * as ModuleTwoActions from './actions';

export default ( state = ModuleTwoActions.initState, action: any ) => {
	switch ( action.type ) {
		case ModuleTwoActions.DECREASE_COUNT:
			return Object.assign( {}, state, { count2: action.count } );
		default:
			return state;
	}

};


