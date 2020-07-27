import React, { useContext } from 'react';
import myContext from './contextProperty';

function ChildComponent() {

	const property = useContext( myContext );
	return (
		<div>
			<p>子组件: You clicked {property.count} times</p>
		</div>
	);

}

export default ChildComponent;
