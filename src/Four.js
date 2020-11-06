import React from 'react';
import styled from 'styled-components';


class Four extends React.Component {

render(){
//configuration of the styled component in reactjs
//want to make the css of 
let x = props =>{

}
let Books = styled.div `
color : black;
width : ${(props)=>{
 return props.wid
}};
height : ${(props)=>{
  return props.ht
}};
background-color:${(props)=>{
  return props.bcol
}};
border : 1px solid #cccccc;
margin : 10px;
padding : 10px;
`

  return (
<div>
<Books wid="400px" ht="300px" bcol="yellow">
Let Us C
</Books> | 
<Books wid="200px" ht="100px" bcol="pink">
Complete Reference In Java
</Books>
</div>
  )
}

}

export default Four;