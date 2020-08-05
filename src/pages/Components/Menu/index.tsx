import React from 'react';
import { Menu } from 'antd';
import RouteConfig from 'src/route/index';
import { RouteChildrenProps, withRouter } from 'react-router-dom';

const MenuComponent = ( props: RouteChildrenProps ) => {

	const toPage = ( page: string ): void => {
		props.history.push( page );
	};

	return (
		<Menu
			mode="inline"
			style={{ height: '100%', borderRight: 0 }}
		>
			{
				RouteConfig.map( ( { title, path }, index ) => {
					return (
						<Menu.Item key={index} onClick={() => toPage( path )}>{title}</Menu.Item>
					);
				} )
			}
		</Menu>
	);
};

export default withRouter( MenuComponent );