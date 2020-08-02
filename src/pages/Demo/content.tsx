import React from 'react';
import styles from './index.module.scss';
import { Form, Input, Select, Row, Col, Button, Table } from 'antd';
import { dataList, columns } from './data';
import { SearchOutlined, ClearOutlined, PlusCircleOutlined, ImportOutlined, ExportOutlined } from '@ant-design/icons';

const { Option } = Select;

function ContentComponent() {
	return (
		<div className={styles.page}>
			<h1 className={styles.title}>销售订单</h1>

			<div className={styles.wrap}>
				<Form layout="horizontal" colon={false} className="demo-form">
					<Row justify="space-between">
						<Col xs={24} sm={10} md={8} lg={8} xl={8}>
							<Form.Item label="公司">
								<Select placeholder="请选择">
									<Option value="A公司">A公司</Option>
									<Option value="B公司">B公司</Option>
								</Select>
							</Form.Item>
						</Col>

						<Col xs={24} sm={10} md={8} lg={8} xl={8}>
							<Form.Item label="销售订单号">
								<Input placeholder="请选择"/>
							</Form.Item>
						</Col>

						<Col xs={24} sm={10} md={8} lg={8} xl={8}>
							<Form.Item label="订单类型">
								<Input placeholder="请选择"/>
							</Form.Item>
						</Col>


						<Col xs={24} sm={10} md={8} lg={8} xl={8}>
							<Form.Item label="客户">
								<Input placeholder="请选择"/>
							</Form.Item>
						</Col>

						<Col xs={24} sm={10} md={8} lg={8} xl={8}>
							<Form.Item label="客户PO">
								<Input placeholder="请选择"/>
							</Form.Item>
						</Col>

						<Col xs={24} sm={10} md={8} lg={8} xl={8}>
							<Form.Item label="审批状态">
								<Input placeholder="请选择"/>
							</Form.Item>
						</Col>

						<Col xs={24} sm={10} md={8} lg={8} xl={8}>
							<Form.Item label="币种">
								<Input placeholder="请选择"/>
							</Form.Item>
						</Col>

						<Col xs={24} sm={10} md={8} lg={8} xl={8}>
							<Form.Item label="业务员">
								<Input placeholder="请选择"/>
							</Form.Item>
						</Col>

						<Col xs={24} sm={10} md={8} lg={8} xl={8}>
							<Form.Item label="订单日期">
								<Input placeholder="请选择"/>
							</Form.Item>
						</Col>
					</Row>

					<Row>
						<Col span={24} style={{ textAlign: 'right' }}>
							<Button type="primary" htmlType="submit" icon={<SearchOutlined/>}>
								搜索
							</Button>
							<Button style={{ margin: '0 0 0 8px' }} icon={<ClearOutlined/>} className="grey-button">
								清除
							</Button>
						</Col>
					</Row>
				</Form>

				<div className={styles.line}></div>

				<Row>
					<Col span={12} style={{ textAlign: 'left' }}>
						<Button type="primary"  icon={<PlusCircleOutlined />}>
							新建
						</Button>
						<Button style={{ margin: '0 0 0 8px' }} icon={<ImportOutlined />} className="grey-button">
							模板导入
						</Button>
					</Col>
					<Col span={12} style={{ textAlign: 'right' }}>
						<Button icon={<ExportOutlined />} className="grey-button">
							导出
						</Button>
					</Col>
				</Row>

				<div>
					<Table scroll={{ x: '100%' }} tableLayout="fixed" columns={columns} dataSource={dataList}
								 style={{ marginTop: '20px' }} bordered={true}
								 size="middle"
								 pagination={{ showSizeChanger: true, pageSize: 10, showTotal: total => `共 ${total} 条` }}/>
				</div>

			</div>


		</div>
	);
}

export default ContentComponent;
