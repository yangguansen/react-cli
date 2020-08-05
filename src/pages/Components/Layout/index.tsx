import React from 'react';
import { Layout } from 'antd';
import styles from './index.module.scss';
import HeaderComponent from 'src/pages/Components/Header';
import MenuComponent from 'src/pages/Components/Menu';
import BreadComponent from 'src/pages/Components/Breadcrumb';
import PropTypes from 'prop-types';

const { Content, Sider } = Layout;

const LayoutComponent: React.FC = ( props ) => {
	return (
		<Layout>
			<HeaderComponent/>
			<Layout className={styles.content}>
				<Sider width={230} className="site-layout-background" breakpoint="lg" collapsedWidth="0">
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
