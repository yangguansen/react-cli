import React from 'react';
import Common from './common';

class ComponentOne extends React.Component{
    render(){
        return(
            <div>This is component-one
                <Common></Common>
            </div>
        )
    }
}

export default ComponentOne;