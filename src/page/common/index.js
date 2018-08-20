import React from 'react';
import style from './style.less';
import {Button} from 'antd';

console.log(style, 1111);

class Common extends React.Component {
    render() {
        console.log( 'common components' );
        return (
            <div className="Test">
                <Button type="primary">dsadsa</Button>
                <p className="child">
                    This is common components

                </p>
            </div>
        )
    }
}

export default Common;