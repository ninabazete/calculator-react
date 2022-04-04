import React from "react";
import '../components/Style/Button.css'

function Button(props) {

const isMathOperator = value => {
  return isNaN(value) && (value != '.') && (value != '=')
};

  return(
   <div 
     className={`container-button ${isMathOperator(props.children) ? 'operator' : null}`.trimEnd()}
     onClick={() => props.handleClick(props.children)}>
     {props.children}
   </div>
  
 );
}

export default Button;