import React from "react";

function FuncComp(){
  let click=()=>{
    document.getElementById("i1").innerHTML="I am a professional coder";
  };
  return (
    <div>
  <h1 id="i1">Hello World</h1>
  <button onClick={click}> Please Click me</button>
  </div>
  );
}
export default FuncComp;