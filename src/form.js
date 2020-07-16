import React from "react";
import Contact from './contact.js';
import { render } from "@testing-library/react";
class Form extends React.Component{

    constructor(props){
        super(props);
        this.state = {};
    }
   
    render(){
     
        return(<div className="contactstyle">
       <h1>Welcome</h1>
       <Contact/>
      

    </div>)
}
}
export default Form