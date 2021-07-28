import React from 'react';
import { Row, Col } from 'antd';
import styles from './index.module.scss';

class Home extends React.Component {

	render() {

		return (
			<div className={styles.home}>
				<div>长城汽车</div>
				<Row>
					<Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 8 }}>col-8</Col>
					<Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 8 }}>col-8</Col>
					<Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 8 }}>col-8</Col>
				</Row>
			</div>

		);
	}
}

export default Home;