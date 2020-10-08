import React, { useEffect, useRef } from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { addCount } from 'src/store/demo/actions';
import { decreaseCount } from 'src/store/moduleTwo/actions';
import PropTypes from 'prop-types';
import ChildRedux from './child';

function ReduxPage( props: any ) {

	/**
	 * 函数式组件生命周期，只需一次的话，将第二个参数设为[]
	 * 相当于componentDidMount、componentDidUpdate和componentWillUnmount
	 */

	useEffect( () => {
		console.log( 'component Did mount' );

		//	返回unmount时触发的方法
		return function willUnMount() {
			console.log( 'will unmount' );
		};
	}, [] );


	/**
	 * 获取组件实例ref
	 *
	 */
	const pEl = useRef( null );


	return (
		<div>
			<p ref={pEl}>demo module parents count: {props.count}</p>
			<Button type="primary" onClick={() => {
				props.addCount( props.count );
			}}>demo Add Click</Button>
			<p>module two count: {props.count2}</p>
			<Button type="primary" onClick={() => {
				props.decreaseCount( props.count2 );
			}}>module two decrease Click</Button>
			<ChildRedux/>
		</div>
	);
}

//	映射state到当前组件
const mapStateToProps = ( state: any ) => {
	return {
		count: state.demoState.count,
		count2: state.moduleTwo.count2
	};
};

//	映射dispatch到当前组件
const mapDispatchToProps = ( dispatch: any ) => {
	return {
		addCount: ( count: number ) => {
			console.log( 1 );
			dispatch( addCount( count ) );
		},
		decreaseCount: ( count: number ) => {
			dispatch( decreaseCount( count ) );
		}
	};
};

ReduxPage.propTypes = {
	count: PropTypes.number.isRequired,
	addCount: PropTypes.func.isRequired
};

const ReduxPageStore = connect(
	mapStateToProps,
	mapDispatchToProps
)( ReduxPage );

export default ReduxPageStore;