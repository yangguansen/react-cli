import * as ModuleTwoActions from './actions';

export default ( state = ModuleTwoActions.initState, action: any ) => {
	console.log( 'two', state );
	switch ( action.type ) {
		case ModuleTwoActions.DECREASE_COUNT:
			return Object.assign( {}, state, { count2: action.count } );
		default:
			return state;
	}

};


