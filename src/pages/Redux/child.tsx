import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function ChildRedux( props: any ) {
	return (
		<p>child page count: {props.count}</p>
	);
}

const mapStateToProps = ( state: any ) => {
	return {
		count: state.demoState.count
	};
};

ChildRedux.propTypes = {
	count: PropTypes.number.isRequired
};

const ChildReduxStore = connect(
	mapStateToProps
)( ChildRedux );

export default ChildReduxStore;