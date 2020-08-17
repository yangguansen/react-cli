import React, { ReactElement, useEffect, useState } from 'react';
import styles from './index.module.scss';
import { Form, Input, Select, Row, Col, Button, Table } from 'antd';
import { dataList, columns } from './data';
import {
	SearchOutlined,
	ClearOutlined,
	PlusCircleOutlined,
	ImportOutlined,
	ExportOutlined,
} from '@ant-design/icons';
import PropTypes from 'prop-types';
import { getVersion } from 'src/services/demo/index';

const { Option } = Select;

interface colProps {
	label: string;
	children: ReactElement;
}

const GridCol: React.FC<colProps> = props => {
	const { label } = props;
	return (
		<Col xs={24} sm={10} md={8} lg={8} xl={8}>
			<Form.Item label={label}>{props.children}</Form.Item>
		</Col>
	);
};

GridCol.propTypes = {
	label: PropTypes.string.isRequired,
	children: PropTypes.element.isRequired,
};

function ContentComponent() {
	const [ pageSize, setPageSize ] = useState( 10 );

	useEffect( () => {
		( async () => {
			await getVersion( {
				lang: 'cn',
				appPlatform: '0',
				version: '0.0.161',
			} );
		} )();
	}, [] );

	return (
		<div className={styles.page}>
			<h1 className={styles.title}>销售订单</h1>

			<div className={styles.wrap}>
				<Form layout='horizontal' colon={false} className='demo-form'>
					<Row justify='space-between'>
						<GridCol label='公司'>
							<Select placeholder='请选择'>
								<Option value='A公司'>A公司</Option>
								<Option value='B公司'>B公司</Option>
							</Select>
						</GridCol>

						<GridCol label='销售订单号'>
							<Input placeholder='请选择' />
						</GridCol>

						<GridCol label='订单类型'>
							<Input placeholder='请选择' />
						</GridCol>
					</Row>

					<Row>
						<Col span={24} style={{ textAlign: 'right' }}>
							<Button type='primary' htmlType='submit' icon={<SearchOutlined />}>
								搜索
							</Button>
							<Button
								style={{ margin: '0 0 0 8px' }}
								icon={<ClearOutlined />}
								className='grey-button'>
								清除
							</Button>
						</Col>
					</Row>
				</Form>

				<div className={styles.line}></div>

				<Row>
					<Col span={12} style={{ textAlign: 'left' }}>
						<Button type='primary' icon={<PlusCircleOutlined />}>
							新建
						</Button>
						<Button
							style={{ margin: '0 0 0 8px' }}
							icon={<ImportOutlined />}
							className='grey-button'>
							模板导入
						</Button>
					</Col>
					<Col span={12} style={{ textAlign: 'right' }}>
						<Button icon={<ExportOutlined />} className='grey-button'>
							导出
						</Button>
					</Col>
				</Row>

				<div>
					<Table
						scroll={{ x: '100%' }}
						tableLayout='fixed'
						columns={columns}
						dataSource={dataList}
						style={{ marginTop: '20px' }}
						bordered={true}
						rowKey={row => row.key}
						size='middle'
						pagination={{
							showSizeChanger: true,
							pageSize: pageSize,
							onShowSizeChange: ( current, size ) => setPageSize( size ),
							showTotal: total => `共 ${total} 条`,
						}}
					/>
				</div>
			</div>
		</div>
	);
}

export default ContentComponent;
