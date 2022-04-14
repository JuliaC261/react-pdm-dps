import React from 'react';
/*função anonima
export default ()=> <h3> Motor 2.0 </h3>;*/
/*função normal*/
var Motor = function (props) {
  return <h3> Motor 2.0 {props.aro} </h3>;
};
export default Motor;