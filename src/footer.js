import React from "react";
function Footer(){

    return(
      <div>
        <div className="mainfooter">
            <div id="logo">DevikTech</div>
            
            <br/>
        
            <div>What Else to know</div>
           <div>
               <p><small>We provide Live sessions by the industry experts where you get to know about the<br/> various paradigms of problem solving and their applications in the real world.<br/> We provide one to one sessions for all types of doubt clarifications.</small></p>
        </div>
        </div>
        <div>
     <h2 id="cour">Course</h2>
     <div class="sub">
     <a href="#" class="action-button shadow animate blue">C++</a><br/>
  <a href="#" class="action-button shadow animate red">Java</a><br/>
  <a href="#" class="action-button shadow animate green">Python</a><br/>
  <a href="#" class="action-button shadow animate yellow">MERN Stack</a><br/>
  <a href="#" class="action-button shadow animate red">DSA</a>
     </div>
     </div>
     <div id="last">
    <h2>Work with us</h2>
     <a href="#">Instructor</a><br/>
     <a href="#">Content Development</a><br/>
     <a href="#">Marketing</a>
     
     </div>
        </div>
    )
}
export default Footer