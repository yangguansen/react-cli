import React, { useEffect, useRef } from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { addCount } from 'src/store/demo/actions';
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
	} );


	/**
	 * 获取组件实例ref
	 *
	 */
	const pEl = useRef( null );


	return (
		<div>
			<p ref={pEl}>parents count: {props.count}</p>
			<Button type="primary" onClick={() => {
				props.addCount( props.count + 1 );
			}}>Click</Button>

			<ChildRedux/>
		</div>
	);
}

const mapStateToProps = ( state: any ) => {
	return {
		count: state.demoState.count
	};
};

const mapDispatchToProps = ( dispatch: any ) => {
	return {
		addCount: ( count: number ) => {
			console.log( 1 );
			dispatch( addCount( count ) );
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