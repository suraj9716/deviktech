import React from "react";
import { render } from "@testing-library/react";

import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import amazonimage from "./amazon.png"
const CardBodyWrapper = styled("Card.Body")`

 background-color:rgb(240,240,240)
 ;
 width:350px;
 height:450px;
 margin:50px;
 display-flex:row;
 
`;
const CardImgWrapper = styled("img")`

height:100px;
width:180px;
`;
const UppercaseName = styled("h4")`

font-weight:bold;
font-family: 'Raleway', sans-serif;

word-spacing: 10px;

`;
const ButtonWrapper = styled("Button")`

height:45px;
width:170px;
background-color: #FF4500;
color:white;
border:none;
font-weight:bold;
font-family: 'Raleway', sans-serif;

&:hover{
  background-color: white;
  color:black;
}

`;
const StrikeWrapper = styled("Strike")`
 font-size:25px

`;
const H3Wrapper = styled("h3")`

font-size:40px;
font-weight: normal;
`
class Cord extends React.Component {
  constructor(props) {
    super(props);
   

  }

  render() {

    return (
      <div>
        <Card style={{ width: '18rem' }}>
         
          <CardBodyWrapper>
          <CardImgWrapper src={amazonimage} height="40px" width="60px"></CardImgWrapper>
        <  UppercaseName>MASTER DS AND ALGO<br/> WITH C++</UppercaseName>
          <StrikeWrapper>₹15,999</StrikeWrapper>
           <H3Wrapper>₹12,499</H3Wrapper>
            <br/>
            <br/>
            <ButtonWrapper variant="primary">View Description</ButtonWrapper><br/><br/>
            <ButtonWrapper variant="primary">Take Demo Class</ButtonWrapper>
          </CardBodyWrapper>
        </Card>
      </div>

    )
  }

}
export default Cord