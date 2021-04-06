import './buttons.css'
import { fromEvent } from 'rxjs'
import { buffer, debounceTime, map, filter } from 'rxjs/operators'
import { useEffect, useRef } from 'react'

function Buttons({ setStatus }) {
  const awaitbtn = useRef(null)
  useEffect(() => {
    const click = fromEvent(awaitbtn.current, 'click')
    const buff = click.pipe(debounceTime(299))
    click
      .pipe(
        buffer(buff),
        map((element) => element.length),
        filter((el) => el === 2)
      )
      .subscribe(() => {
        setStatus(0)
      })
  }, [])

  return (
    <button className='awaitbtn' ref={awaitbtn}>
      Await
    </button>
  )
}

export default Buttons
