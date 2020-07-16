import React from "react";
class Car extends React.Component{

    constructor(props){

        super(props);
        this.state = {name : "hiiiiii",
     roll : "915"
    };
    }
    changename=()=>{this.setState({name:"vikash"})}
    render(){

        return(
        <div>
        <h2>{this.state.name}</h2>
        <h2>{this.props.model}</h2>
        <h2>{this.state.roll}</h2>
        <button type="button" onClick={this.changename}>button</button>
        </div>
      )}
}
export default Car