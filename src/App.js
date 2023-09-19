
import './App.css';

import Navbar from './components/Navbar';
import Alert from './components/alert';
import TextForm from './components/textForm';
import About from './components/About';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const [btnText, setBtnText] = useState('Dark Mode');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
          msg: message,
          type: type
    })
  }
      
  const toggleMode = ()=>{
      if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      setBtnText('Light Mode');
      setAlert("Dark mode has been enabled", "success");
      }
      else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        setBtnText('Dark Mode');
        setAlert("Light mode has been enabled", "success");
        }
      }

  return (
    <>
    
  <Navbar title="My App" homeText="Home" mode={mode} btnText={btnText} toggleMode={toggleMode} aboutText="About Us"/>
  <Alert alert={alert}/>
  <div className="container my-2">
  <TextForm heading="Enter the text khan" mode={mode} />
  <About/> 
  </div>
 

    </>
  );
}

export default App;
