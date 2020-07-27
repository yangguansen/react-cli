import React, { useState } from 'react';
import { Button } from 'antd';

function UseStatePage() {
	/**
	 * useState用于声明当前函数组件中的状态，以及设置该变量的setter,参数为状态初始值
	 */

	const [ count, setCount ] = useState( 0 );

	return (
		<div>
			<Button type="primary" onClick={() => setCount( count + 1 )}> Click</Button>
			<p>You clicked {count} times</p>
		</div>
	);

}

export default UseStatePage;
