
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import About from './components/About';


function App() {

  const [mode, setMode] = useState('light'); 

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#1b2e42';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
<Navbar title="Texty" aboutText="About" mode={mode} toggleMode={toggleMode}/>
<div className="container my-3">

<Textform title="Enter text to analyze" mode={mode} />
{/* <About/> */}
</div>
   </>
  );
}

export default App;
