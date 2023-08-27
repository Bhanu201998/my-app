
import { useState } from 'react';
import './App.css';
import Form from './Navbar/Form';
import Navbar from './Navbar/Navbar';
import Alart from './Navbar/Alart';


function App() {
  const [mode,setMode] = useState('dark');
  const [alart,setalart] = useState(null);
  const showalart = (massge,type)=>{
   setalart({
msg: massge,
type: type
   })

  }
  const togleMode = ()=>{
if(mode === 'white')
{
setMode('dark');
document.body.style.backgroundColor = "#0d588c";
showalart("dark mode is enable","success");
document.title = 'Textutils-light mode'
/*setInterval(() =>{
  document.title = 'Textutils-is amazing'
},2000);
setInterval(() =>{
  document.title = 'inastall Textutils'
},1500);*/
}
else{
  setMode('white');
  document.body.style.backgroundColor = "white";
  showalart("light mode is enable","success");
  document.title = 'Textutils-dark mode'
}
  }
  return (
   <>
   
  <div><Navbar  title="Hidden Bar" mode={mode} togleMode={togleMode}/></div>
  <Alart alart={alart}/>
   <div className="container my box">
    
          
          <Form heading="Enert the text" mode={mode} />

    
   </div>
   
  </>
  );
}

export default App;
