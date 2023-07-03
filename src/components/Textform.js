import React, { useState } from 'react'



export default function Textform(props) {
  const UpButton = ()=>{
    console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
}

const LowButton = ()=>{
  console.log("Lowercase was clicked");
  let newText = text.toLowerCase();
  setText(newText);
}

const changeIt = (event)=>{
    console.log("On change");
    setText(event.target.value);
}

const clearIt = ()=>{
    setText("");
} 


  

  const [text, setText] = useState('Enter text here');
  // 
  return (
    <>
    <div className={`container" text-${props.mode ==='light'? 'dark':'light'}`}>
        <h1>{props.title}</h1>
        <div className="mb-3" >
        <textarea className="form-control" value={text} onClick={clearIt} onChange={changeIt} id="mybox" rows="8" style={{backgroundColor: props.mode==='dark'? '#343a40': 'white' , color: props.mode ==='light'? 'black':'white'}} ></textarea>
        </div>
        <button className="btn btn-info primary"onClick={UpButton} style={{backgroundColor:props.mode==='light'? '#0dcaf0': '#343a40',border: props.mode==='light'? '#0dcaf0': '#343a40',color: props.mode ==='light'? 'black':'white'}} >Convert to Uppercase</button>
        <button className="btn btn-info mx-2" onClick={LowButton} style={{backgroundColor:props.mode==='light'? '#0dcaf0': '#343a40',border: props.mode==='light'? '#0dcaf0': '#343a40',color: props.mode ==='light'? 'black':'white'}}>Convert to Lowercase</button>
        <button className="btn btn-info mx-0" onClick={clearIt} style={{backgroundColor:props.mode==='light'? '#0dcaf0': '#343a40',border: props.mode==='light'? '#0dcaf0': '#343a40',color: props.mode ==='light'? 'black':'white'}}>Clear Text</button>
        

    </div>

    <div className={`container my-2 text-${props.mode ==='light'? 'dark':'light'}`}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p> 
        <h2>Preview</h2>
        <p>{text}</p>
        </div>
    </>
  )
}


