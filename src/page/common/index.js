import React from 'react';
import style from './style.less';

class Common extends React.Component {
    render() {
        console.log( 'common components' );
        return (
            <div className={style.Test}>This is common components</div>
        )
    }
}

export default Common;