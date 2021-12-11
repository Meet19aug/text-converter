import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//imrs
import React, { useState } from 'react'
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
      setAlert({
        message : message,
        type : type,
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  } 
  const toggleMode = () => {
      if(mode === 'light'){
        setMode('dark');
        document.body.style.background='#042743';
        showAlert("Dark Mode is enable.","success");
        document.title = "TextUtils - Dark Mode";
      }else{
        setMode('light');
        document.body.style.background="white";
        showAlert("Light Mode is enable.","success");
        document.title ="TextUtils - Light Mode";
      }
  }
  return (
    <>
    <Navbar title="TextUtils"  aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <TextForm heading="Enter below the text to analyze" mode={mode} showAlert={showAlert}/>
    <About mode={mode}/>
    
    </>
  );
}

export default App;
