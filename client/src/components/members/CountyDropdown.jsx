import React from 'react';



export default class CountyDropdown extends React.Component{
    constructor(){
        super();
        this.state ={value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange (event) {
        this.setState({value: event.target.value});
    }

   handleSubmit = (event) => {
        alert('You have chosen the county of ' + this.state.value)
        event.preventDefault();
    }
  
    render(){
        let counties = this.props.state.counties
        let countyoptions = counties.map((county) =>
        <option key={county}>{county}</option>);
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label> Choose a County: <br />
                        <select value={this.state.value} onChange={this.handleChange}>
                        <option value="" selected="defaultValue">Select from here...</option>
                            {countyoptions}
                        </select>
                            <input type="submit" value="Submit" className="stateSubmitBtn" ></input>
                    </label> 
                </form>
                
           </div>
        )
    }
    

}