import './timer.css'

function Timer({ time }) {
  return (
    <div className='timer'>
      <span className='time-section'>
        {time.h >= 10 ? time.h : '0' + time.h}
      </span>
      <span className='time-section'>
        {time.m >= 10 ? time.m : '0' + time.m}
      </span>
      <span className='time-section'>
        {time.s >= 10 ? time.s : '0' + time.s}
      </span>
    </div>
  )
}

export default Timer
