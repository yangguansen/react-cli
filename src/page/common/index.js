import React from 'react';
import style from './style.less';
import {Button} from 'antd';

class Common extends React.Component {
    render() {
        console.log( 'common components' );
        return (
            <div className={style.Test}>
                <Button type="primary">dsadsa</Button>
                <p className={style.child}>
                    This is common components

                </p>
            </div>
        )
    }
}

export default Common;