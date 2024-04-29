import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
function App() {
  const [mode, setmode] = useState('light');
   
  let changeMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor='#0a1e3c';
      
    } else {
      setmode('light');
      document.body.style.backgroundColor='white';
     
    }
  };
  return (
    <>
      <Navbar title="TextUtils" link="Links" mode={mode} changeMode={changeMode}/>
     
      <div className="container my-3"   >
        <TextForm heading="Write some text to convert" mode={mode}/>
      </div>
    
    </>
  );
}

export default App;
