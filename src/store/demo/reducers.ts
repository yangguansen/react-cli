import * as DemoActions from './actions';

export default ( state = DemoActions.initState, action: any ) => {
	switch ( action.type ) {
		case DemoActions.ADD_COUNT:
			return Object.assign( {}, state, { count: action.count } );
		default:
			return state;
	}

};


