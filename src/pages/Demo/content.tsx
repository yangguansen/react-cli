import React from 'react';
import styles from './index.module.scss';
import { Form, Input, Select, Row, Col } from 'antd';

const { Option } = Select;

function ContentComponent() {
	return (
		<div className={styles.page}>
			<h1 className={styles.title}>销售订单</h1>

			<div className={styles.wrap}>
				<Form layout="inline" labelCol={{ span: 10 }} wrapperCol={{ span: 12 }}>
					<Row justify="space-between">
						<Col xs={20} sm={10} md={6} lg={7} xl={7}>
							<Form.Item label="公司">
								<Select placeholder="input placeholder">
									<Option value="A公司">A公司</Option>
									<Option value="B公司">B公司</Option>
								</Select>
							</Form.Item>
						</Col>

						<Col xs={20} sm={10} md={6} lg={7} xl={7}>
							<Form.Item label="销售订单号">
								<Input placeholder="input placeholder"/>
							</Form.Item>
						</Col>

						<Col xs={20} sm={10} md={6} lg={7} xl={7}>
							<Form.Item label="订单类型">
								<Input placeholder="input placeholder"/>
							</Form.Item>
						</Col>
					</Row>

					<Row justify="space-between">
						<Col xs={20} sm={10} md={6} lg={7} xl={7}>
							<Form.Item label="客户">
								<Input placeholder="input placeholder"/>
							</Form.Item>
						</Col>

						<Col xs={20} sm={10} md={6} lg={7} xl={7}>
							<Form.Item label="客户PO">
								<Input placeholder="input placeholder"/>
							</Form.Item>
						</Col>

						<Col xs={20} sm={10} md={6} lg={7} xl={7}>
							<Form.Item label="审批状态">
								<Input placeholder="input placeholder"/>
							</Form.Item>
						</Col>
					</Row>

					<Row justify="space-between">
						<Col xs={20} sm={10} md={6} lg={7} xl={7}>
							<Form.Item label="币种">
								<Input placeholder="input placeholder"/>
							</Form.Item>
						</Col>

						<Col xs={20} sm={10} md={6} lg={7} xl={7}>
							<Form.Item label="业务员">
								<Input placeholder="input placeholder"/>
							</Form.Item>
						</Col>

						<Col xs={20} sm={10} md={6} lg={7} xl={7}>
							<Form.Item label="订单日期">
								<Input placeholder="input placeholder"/>
							</Form.Item>
						</Col>
					</Row>
				</Form>
			</div>

		</div>
	);
}

export default ContentComponent;
