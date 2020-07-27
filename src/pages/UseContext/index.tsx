import React, { useState } from 'react';
import { Button } from 'antd';
import myContext, { initProperty } from './contextProperty';
import ChildComponent from './child';

function UseContextPage() {
	/**
	 * useContext用于组件树传递props，避免了多级组件传参时中间组件的传递，一旦声明，子级组件皆可获取props
	 * 获取时，子组件会获取离子级最接近层级的Context
	 */

	const [ property, setProperty ] = useState( initProperty );

	return (
		<myContext.Provider value={property}>
			<div>
				<Button type="primary" onClick={() => setProperty( { count: property.count + 1 } )}> Click</Button>
				<p>父组件：You clicked {property.count} times</p>
				<ChildComponent/>
			</div>
		</myContext.Provider>

	);

}

export default UseContextPage;
