import React, { useState } from 'react'

export default function Form(props) {

  const[text,newtext] = useState(''); 
  const handleUpClick = ()=>{
    let text1 = text.toUpperCase();
    newtext(text1)
  }
  const handlonclear = ()=>{
    let text1 =  '';
    newtext(text1)
  }

  const handLoClick = ()=>{
    let text1 = text.toLowerCase();
    newtext(text1)
  }
  const handleOnChang = (event)=>
  {
 newtext(event.target.value);
  }
  return (
    <>
    <div className='container' >
        <h3>{props.heading}</h3>
    <div className="container my-3" >
      <textarea className="form-control" text value = {text} onChange={handleOnChang} style={{backgroundColor: props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#c7236d'}}  id="my box" rows="12"  ></textarea>
</div>
      < button className="btn btn-outline-primary mx-2" onClick={handleUpClick}>convert to toUpperCase</button>
      < button className="btn btn-outline-primary mx-2"  onClick={handLoClick}>convert to tolowerCase</button>
      <button className='btn-outline-primary mx-2' onClick={handlonclear}>clear</button>
      
</div>
<div className="container my-3" >
  <h1 >your text summary</h1>
  <p>{text.split(" ").length-1} words and  <b>{text.length}</b> charecters you entered </p>
  <p>total time for reading this={0.008 * text.split(" ").length}</p>
 <p> <h1>Previwe</h1></p><p>{text.length>0?text:"enter your text"}</p>
</div>
 </>
   )
}
