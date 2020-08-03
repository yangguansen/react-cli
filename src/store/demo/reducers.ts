import * as DemoActions from './actions';

export default ( state = DemoActions.initState, action: any ) => {
	console.log( 'one', state );
	switch ( action.type ) {
		case DemoActions.ADD_COUNT:
			return Object.assign( {}, state, { count: action.count } );
		default:
			return state;
	}

};


