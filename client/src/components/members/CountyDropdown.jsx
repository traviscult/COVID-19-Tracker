import React from 'react';



export default class CountyDropdown extends React.Component{

    render(){
        let counties = this.props.state.counties
        let countyoptions = counties.map((county) =>
        <option key={county}>{county}</option>);
        return (
            <div>
                <select>
                    {countyoptions}
                </select>
           </div>
        )
    }
    

}