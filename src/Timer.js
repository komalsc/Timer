import './Timer.css';

import React, { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 6000);
    const seconds = Math.floor((time / 100) % 60);
    const milliseconds = time % 100;

    return (
      String(minutes).padStart(2, "0") +
      ":" +
      String(seconds).padStart(2, "0") +
      "." +
      String(milliseconds).padStart(2, "0")
    );
  };

  return (
    <div className='timer'>
        <h1>TIMER APPLICATION</h1>
      <div style={{marginTop:'2rem', fontSize: '3rem'}}>{formatTime(time)}</div>
      <button className='btn1' onClick={handleStartStop}>{isRunning ? "Stop" : "Start"}</button>
      <button className='btn1' onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;