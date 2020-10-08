import React from 'react';
import { Menu } from 'antd';
import RouteConfig from 'src/route/index';
// import { RouteChildrenProps, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// import { addCount } from 'src/store/demo/actions';
import PropTypes from 'prop-types';
import { setActive, setTabArray } from 'src/store/tabs/actions';
import { withRouter } from 'react-router';

const MenuComponent = ( props: any ) => {

	// const toPage = ( page: string ): void => {
	// 	props.history.push( page );
	// };

	const setActive = ( path: string ): void => {

		let temp = [ ...props.tabArray ];
		let index = temp.indexOf( path );
		if ( index === -1 ) {
			temp.push( path );
			props.setTabArray( temp );
		}

		props.history.push( path );
	};

	return (
		<Menu
			mode="inline"
			style={{ height: '100%', borderRight: 0 }}
		>
			{
				RouteConfig.map( ( { title, path }, index ) => {
					return (
						<Menu.Item key={index} onClick={() => setActive( path )}>{title}</Menu.Item>
					);
				} )
			}
		</Menu>
	);
};

//	映射state到当前组件
const mapStateToProps = ( state: any ) => {
	return {
		tabArray: state.tabStore.tabArray
	};
};

//	映射dispatch到当前组件
const mapDispatchToProps = ( dispatch: any ) => {
	return {
		setActive: ( name: string ) => {
			dispatch( setActive( name ) );
		},
		setTabArray: ( tabArray: string[] ) => {
			dispatch( setTabArray( tabArray ) );
		}
	};
};

MenuComponent.propTypes = {
	setActive: PropTypes.func.isRequired,
	setTabArray: PropTypes.func.isRequired
};

export default withRouter( connect(
	mapStateToProps,
	mapDispatchToProps
)( MenuComponent ) );