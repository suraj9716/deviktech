import React from "react";
import { render } from "@testing-library/react";
class Header extends React.Component{

    constructor(props){
        super(props);
        this.state = {name : "home", cour : "courses", abt:"About", app: "applynow"};
    }
    changename=()=>{this.setState({name:"HOME"})}
    changecour=()=>{this.setState({cour:"COURSE"})}
    changeabout=()=>{this.setState({abt:"ABOUT"})}
    changeapp=()=>{this.setState({app:"APPLYNOW"})}
    render(){
     
        return(<div className="mainheader">
        <div><p onClick={this.changename} >{this.state.name}</p></div>
        <div><p onClick={this.changecour} >{this.state.cour}</p></div>
        <div><p onClick={this.changeabout} >{this.state.abt}</p></div>
        <div><p onClick={this.changeapp}>{this.state.app}</p></div>
    </div>)
}
}
export default Header