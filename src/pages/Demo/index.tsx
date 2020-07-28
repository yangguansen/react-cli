import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { NotificationOutlined } from '@ant-design/icons';
import styles from './index.module.scss';
import { menuData, bread } from './data';
import ContentComponent from './content';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


function DemoPage() {
	return (
		<Layout className={styles.page}>
			<Header className={styles.header}>
				<div className={styles.logo}>
					<img width={115} src={require( '../../assets/img/logo_deloitte.png' )} alt=""/>
					<img width={128} src={require( '../../assets/img/BDH_wordmark_white.png' )} alt=""/>
					<span>首页</span>
					<span>工作台</span>
				</div>

			</Header>
			<Layout className={styles.content}>
				<Sider width={230} className="site-layout-background" breakpoint="lg" collapsedWidth="0">
					<Menu
						mode="inline"
						defaultSelectedKeys={[ '1' ]}
						defaultOpenKeys={[ menuData[ 0 ].title ]}
						style={{ height: '100%', borderRight: 0 }}
					>
						{
							menuData.map( ( { title, submenu }, index ) => {
								return (
									<SubMenu key={title} icon={<NotificationOutlined/>} title={title}>
										{
											submenu.map( ( child, subIndex ) => {
												return (
													<Menu.Item key={index * menuData[ index ].submenu.length + subIndex}>{child}</Menu.Item>
												);
											} )
										}
									</SubMenu>
								);
							} )
						}

					</Menu>
				</Sider>
				<Layout>
					<Breadcrumb className={styles.breadcrumb}>
						{
							bread.map( ( v, i ) => {
								return <Breadcrumb.Item key={i}>{v}</Breadcrumb.Item>;
							} )
						}
					</Breadcrumb>
					<Content className={styles.sectionContent}>
						<ContentComponent/>
					</Content>
				</Layout>
			</Layout>
		</Layout>
	);
}

export default DemoPage;
