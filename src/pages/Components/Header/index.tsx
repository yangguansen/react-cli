import styles from './index.module.scss';
import React from 'react';
import { Layout } from 'antd';
const { Header } = Layout;

const HeaderComponent: React.FC = () => {
	return (
		<Header className={styles.header}>
			<div className={styles.logo}>
				<img width={115} src={require( 'src/assets/img/logo_deloitte.png' )} alt=""/>
				<img width={128} src={require( 'src/assets/img/BDH_wordmark_white.png' )} alt=""/>
				<span>首页</span>
				<span>工作台</span>
			</div>
		</Header>
	);
};

export default HeaderComponent;
