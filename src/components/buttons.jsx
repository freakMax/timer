import './buttons.css'
import AwaitBtn from './awaitbtn'

function Buttons({ status, setStatus, startTimer, stopTimer, resetTimer }) {
  return (
    <div className='button-body'>
      {status === 0 ? (
        <button className='start' onClick={startTimer}>
          Start
        </button>
      ) : null}
      {status === 1 ? (
        <div className='control-buttons'>
          <button className='stop' onClick={stopTimer}>
            Stop
          </button>
          <AwaitBtn setStatus={setStatus} />
          <button className='reset' onClick={resetTimer}>
            Reset
          </button>
        </div>
      ) : null}
    </div>
  )
}

export default Buttons
