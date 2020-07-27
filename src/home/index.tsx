import React from 'react';
import { Button } from 'antd';
import { RouteComponentProps } from 'react-router';

class HomePage extends React.Component<RouteComponentProps> {
	render() {
		return (
			<div>
				<Button type="dashed" onClick={( event: React.MouseEvent ) => this.props.history.push( '/expense' )}>
					Home Page
				</Button>

			</div>
		);
	}
}

export default HomePage;
