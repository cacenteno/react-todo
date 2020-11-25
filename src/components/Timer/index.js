import React, { useState, useEffect } from 'react';
import Countdown, { zeroPad } from "react-countdown"
import useSound from 'use-sound';
import audio from "./beep-07.mp3"
function Timer() {
  const [started, setStarted] = useState({started: false})
  const [min, setMin] = useState({min: 0});
  const [play] = useSound(audio);
  const handleStart = () => {
    let newStart = !started
    let time = min * (60 * 1000)
    setStarted(newStart)
    setMin(time)
  } 
  const toggleStarted = ()=>{
    let newStarted = !started
    setStarted({
      started: newStarted
    })
  }
  const handleOnComplete = () =>{
    play()
    setStarted(true)
  }
  class TimerOne extends React.Component{
    render(){
    return(
      <Countdown date={Date.now() + (min ? min : null)} renderer={function(render){return (<p className="text-center">{zeroPad(render.minutes) + ':' + zeroPad(render.seconds)}</p>)}} onComplete={() => handleOnComplete()}>
      </Countdown>
    )
    }
  }
    return (
      <div>
        {
          !started ?
            (<div>
              <h2>Timer</h2>
              <TimerOne/>
              <button className="form-control" onClick={(e) => toggleStarted()}>Stop</button>
              <p className="small">Don't add or drag anything! Count Down resets. To be fixed.</p>
            </div>
            )
            : (<div>
              <h2>Timer</h2>

              <input type="text" name="time" id="" onChange={(e) => setMin(e.target.value)} placeholder="Minutes" />
              <br />
              <button className="form-control bg-info" onClick={()=> handleStart()}>Start</button>
            </div>)
        }
      </div>
    )
  }
export default Timer;