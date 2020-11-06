import React from 'react';

class Second extends React.Component {

render(){

let myStyle={
  color : "red",
  fontSize : "20px",
  fontFamily : "georgia"
}

  return (
    <div>
<p style={myStyle}>
React is a js library
</p>
    </div>
  )
}
}
export default Second;