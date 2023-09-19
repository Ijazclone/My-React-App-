
import './App.css';

import Navbar from './components/Navbar';
// eslint-disable-next-line no-unused-vars
import TextForm from './components/textForm';
import About from './components/About';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const [btnText, setBtnText] = useState('Dark Mode');
      
  const toggleMode = ()=>{
      if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      setBtnText('Light Mode');
      }else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        setBtnText('Dark Mode');
        }
      }

  return (
    <>
    
 <Navbar title="My App" homeText="Home" mode={mode} btnText={btnText} toggleMode={toggleMode} aboutText="About Us"/>

<div className="container my-2">
<TextForm heading="Enter the text khan" mode={mode} />
<About/> 
</div>
 

    </>
  );
}

export default App;
