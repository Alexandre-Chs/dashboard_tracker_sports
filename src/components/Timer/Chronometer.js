import React, { useState, useRef, Fragment } from "react";

const Chronometer = () => {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [length, setLength] = useState(null);
  const countRef = useRef(null);

  const formatTime = () => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(true);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
      
    }, 1000);
    
  };
  const handlePause = () => {
    clearInterval(countRef.current);
    setIsPaused(false);
  };

  const handleReset = () => {
    clearInterval(countRef.current);
    setIsActive(false);
    setIsPaused(false);
    setTimer(0);
  };
  return (
    <Fragment>
      <div className="container_chronometer">
        <h3>Chronometer</h3>
        <div className="stopwatch-card">
          <p>{formatTime(timer)}</p>
          <div className="buttons">
            <button onClick={handleStart} disabled={isPaused ? true : false}>
              Start
            </button>
            <button onClick={handlePause} disabled={isPaused ? false : true}>
              Pause
            </button>
            <button onClick={handleReset}>Reset</button>
          </div>
        </div>
        <svg className="circleSVG" width="600" height="600">
        <circle id="circle1" cx="250" cy="250" r="220"></circle>
        <circle
          ref={(ref) => {
            if (ref) {
              setLength(ref.getTotalLength());
            }
          }}
          id="circle2"
          strokeDasharray={length}
          strokeDashoffset={length - (timer / 60) * length}
          cx="250"
          cy="250"
          r="220"
        ></circle>
      </svg>
      </div>
    </Fragment>
  );
};

export default Chronometer;
