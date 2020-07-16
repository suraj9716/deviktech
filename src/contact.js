import React from "react";
import { render } from "@testing-library/react";
import './Contact.css';
import skyimage from "./sky.jpeg"
class Contact extends React.Component{
constructor(props){
    super(props);

    this.state = {fullname:"suraj", email:"ss971600@gmail.com", phone:"7836836353", message:"plz write here"}
}
/* handlename =(event)=>
   this.setState({fullname:event.target.value})

   handleemail =(event)=>
   this.setState({email:event.target.value})

   handlephone =(event)=>
   this.setState({phone: event.target.value})

   handlemessage =(event)=>
   this.setState({message:event.target.value})*/

   handlechangeall=(event) =>{

     this.setState( {[event.target.name]: event.target.value} )
   }

   handlesubmit =(event)=>{

  /*  alert(`my name is ${this.state.fullname}. 
    My email id is ${this.state.email}
    My mobile number is ${this.state.phone}
    my message to ur company is ${this.state.message}`
    ); */

    alert(JSON.stringify(this.state))
    event.preventDefault();
   }

    render(){
     
        return(
        
         <div>
         
        <div class="frm">
        <div id="txt" ><h1>Hello i am here</h1></div>
       <form onSubmit={this.handlesubmit}>
      
       <label>Fullname</label><br/>
    <input type="text" name="fullname" value={this.state.fullname} onChange={this.handlechangeall} /><br/>

    <label>Email</label><br/>
    <input type="email" name="email" value={this.state.email} onChange={this.handlechangeall} /><br/>

    <label>Mobile</label><br/>
    <input type="number" name="phone" value={this.state.phone} onChange={this.handlechangeall} /><br/>

    <label>Message</label><br/>
    <textarea value={this.state.message} name="message" onChange={this.handlechangeall} /><br/>

    <input type="submit" value="send" />
       </form>
       </div>
        </div>
        )
}
}
export default Contact