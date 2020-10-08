import styles from './index.module.scss';
import React from 'react';
import { Layout, Button } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

const { Header } = Layout;

interface IProps {
  isCollapsed: boolean;
  handleCollapsed: ( bool: boolean ) => void;
}

const HeaderComponent = ( props: IProps ) => {
	return (
		<Header className={styles.header}>
			<div className={styles.logo}>
				<img width={115} src={require( 'src/assets/img/logo_deloitte.png' )} alt=""/>
				<img width={128} src={require( 'src/assets/img/BDH_wordmark_white.png' )} alt=""/>
				<Button type="text" icon={props.isCollapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/> }
					onClick={() => props.handleCollapsed( !props.isCollapsed )}></Button>
				<span>首页</span>
				<span>工作台</span>
			</div>
		</Header>
	);
};

export default React.memo( HeaderComponent );
