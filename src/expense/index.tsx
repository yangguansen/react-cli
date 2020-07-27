import React, { useContext } from 'react';
import myContext from '../pages/UseContext/contextProperty';

function ExpensePage() {

	const count = useContext( myContext );
	console.log( count );
	return (
		<div>
			<p>expense: You clicked {count} times</p>

		</div>
	);

}

export default ExpensePage;
