import { Breadcrumb } from 'antd';
import styles from './index.module.scss';
import React from 'react';
import bread from './data';

const BreadComponent = () => {
	return (
		<Breadcrumb className={styles.breadcrumb}>
			{
				bread.map( ( v, i ) => {
					return <Breadcrumb.Item key={i}>{v}</Breadcrumb.Item>;
				} )
			}
		</Breadcrumb>
	);
};

export default BreadComponent;