import React, { useState } from 'react';
import { Layout } from 'antd';
import styles from './index.module.scss';
import HeaderComponent from 'src/pages/Components/Header';
import MenuComponent from 'src/pages/Components/Menu';
import BreadComponent from 'src/pages/Components/Breadcrumb';
import PropTypes from 'prop-types';

const { Content, Sider } = Layout;

const LayoutComponent: React.FC = ( props ) => {
	const [ isCollapsed, setCollapsed ] = useState( false );

	const handleCollapsed = ( bool: boolean ) => {
		setCollapsed( bool );

		//  兼容小屏幕，在小屏时，设置了menu为fixed, 并在收起菜单时，将菜单通过left: 100%隐藏
		if( document.body.clientWidth < 991 ) {
			if ( bool ) {
				setMenuLeft( '-100%' );
			} else {
				setMenuLeft( '0' );
			}
		} else {
			setMenuLeft( '0' );
		}

	};

	const [ menuLeft, setMenuLeft ] = useState( '0' );

	return (
		<Layout>
			<HeaderComponent handleCollapsed={handleCollapsed} isCollapsed={isCollapsed}/>
			<Layout className={styles.content}>
				<Sider width={230} style={{ left: menuLeft }} className="site-layout-background" breakpoint="lg" collapsible
					collapsed={isCollapsed} trigger={null}>
					<MenuComponent/>
				</Sider>
				<Layout>
					<BreadComponent/>
					<Content className={styles.sectionContent}>
						{props.children}
					</Content>
				</Layout>
			</Layout>
		</Layout>
	);
};

LayoutComponent.propTypes = {
	children: PropTypes.element.isRequired
};

export default LayoutComponent;
