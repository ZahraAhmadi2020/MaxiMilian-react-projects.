import React, { useCallback, useState } from 'react';

import './App.css';
import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
  const [showParagraph, setShowParagreph] = useState(false)
  const [allowToggle, setAllowToggle] = useState(false)

  console.log('app running');
  const toggleShow =useCallback(()  => {
    // setShowParagreph(!showParagraph)
    if (allowToggle) {
         setShowParagreph((prevShowParagraph)=>!prevShowParagraph)
    }

  },[allowToggle])

  const allowToggleHandler = () => {
    setAllowToggle(true)
  }
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={toggleShow}>Show</Button>
      <Button onClick={allowToggleHandler}>allow</Button>
    </div>
  );
}

export default App;
