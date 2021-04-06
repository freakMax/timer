import './App.css'
import { useEffect, useState } from 'react'
import Timer from './components/timer'
import Buttons from './components/buttons'
import { interval, Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'

function App() {
  const [time, setTime] = useState({ h: 0, m: 0, s: 0 })
  const [status, setStatus] = useState(0)
  let newHours = time.h,
    newMinutes = time.m,
    newSeconds = time.s

  useEffect(() => {
    let unsubscribe = new Subject()
    interval(1000)
      .pipe(takeUntil(unsubscribe))
      .subscribe(() => {
        if (status === 1) {
          if (newMinutes === 59) {
            newHours++
            newMinutes = 0
          }
          if (newSeconds === 59) {
            newMinutes++
            newSeconds = 0
          }
          newSeconds++
          setTime({ h: newHours, m: newMinutes, s: newSeconds })
        }
      })
    return () => {
      unsubscribe.next()
      unsubscribe.complete()
    }
  }, [status])

  const startTimer = () => {
    setStatus(1)
  }

  const stopTimer = () => {
    setStatus(0)
    setTime({ h: 0, m: 0, s: 0 })
  }

  const resetTimer = async () => {
    await setStatus(0)
    await setTime({ h: 0, m: 0, s: 0 })
    await setStatus(1)
  }

  return (
    <div className='App'>
      <div className='body-timer'>
        <Timer time={time} />
        <Buttons
          status={status}
          startTimer={startTimer}
          stopTimer={stopTimer}
          resetTimer={resetTimer}
          setStatus={setStatus}
        />
      </div>
    </div>
  )
}

export default App
