import React, { Suspense } from 'react';
import { Tabs, Spin } from 'antd';
import route from 'src/route/index';
import { RouteChildrenProps } from 'react-router-dom';
import { setActive, setTabArray } from 'src/store/tabs/actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Location } from 'history';

const { TabPane } = Tabs;

interface tabType {
  title: string,
  path: string,
  component: React.Component
}

interface IProps extends RouteChildrenProps {
  tabArray: string[];
  activeTab: string;
  setActive: ( activeTab: string ) => void;
  setTabArray: ( arrayTab: string[] ) => void;
}

class PageTabsComponent extends React.Component<IProps> {

	constructor( props: IProps ) {
		super( props );

		// 监听路由的变化,如果路由发生变化则进行相应操作
		this.props.history.listen( ( location: Location ) => {
			this.props.setActive( location.pathname );
		} );
	}

  onChange = ( activeKey: string ) => {
  	this.props.setActive( activeKey );
  };

  onEdit = ( targetKey: string | any, action: string ) => {
  	console.log( targetKey );

  	let index = this.props.tabArray.findIndex( tab => tab === targetKey );
  	let nextActive = index < this.props.tabArray.length - 1 ? this.props.tabArray[ index + 1 ] : this.props.tabArray[ index - 1 ];

  	const newTabArray = this.props.tabArray.filter( tab => tab !== targetKey );

  	this.props.setTabArray( newTabArray );
  	this.props.setActive( nextActive );
  };

  render() {
  	const tabComponent = this.props.tabArray.map( ( v: any ) => {
  		let item = route.find( j => j.path === v );
  		return item;
  	} );

  	return (
  		<Tabs
  			hideAdd
  			onChange={this.onChange}
  			onEdit={this.onEdit}
  			activeKey={this.props.activeTab}
  			type="editable-card"
  		>
  			{tabComponent.map( ( pane: any ) => (
  				<TabPane tab={pane.title} key={pane.path}>
  					{
  						<Suspense fallback={<Spin size="large" style={{ 'top': '50%', 'position': 'absolute' }}></Spin>}>
  							<pane.component></pane.component>
  						</Suspense>
  					}
  				</TabPane>
  			) )}
  		</Tabs>
  	);
  }
};

//	映射state到当前组件
const mapStateToProps = ( state: any ) => {
	return {
		activeTab: state.tabStore.activeTab,
		tabArray: state.tabStore.tabArray
	};
};

//	映射dispatch到当前组件
const mapDispatchToProps = ( dispatch: any ) => {
	return {
		setActive: ( name: string ) => {
			dispatch( setActive( name ) );
		},
		setTabArray: ( tabArray: string[] ) => {
			dispatch( setTabArray( tabArray ) );
		}
	};
};

export default withRouter( connect(
	mapStateToProps,
	mapDispatchToProps
)( PageTabsComponent ) );