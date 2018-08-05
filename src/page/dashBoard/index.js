import React from 'react';
import ComponentOne from '../componentOne';
import ComponentTwo from '../componentTwo';
import ComponentThree from '../componentThree';

class DashBoard extends React.Component{
    render(){
        return(
            <div>dashboard page
                <ComponentOne></ComponentOne>
                <ComponentTwo></ComponentTwo>
                <ComponentThree></ComponentThree>
            </div>
        )
    }
}

export default DashBoard;