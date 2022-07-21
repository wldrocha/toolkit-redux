import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './store/slices/counterSlice'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const count = useSelector((state) => state.counter.counter)
  const dispatch = useDispatch()

  return (
    <div className='App'>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src='/vite.svg' className='logo' alt='Vite logo' />
        </a>
        <a href='https://reactjs.org' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
        <p> count is {count}</p>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button
        onClick={() => dispatch(increment())}
        >
         Increment
        </button>
        <button
        onClick={() => dispatch(decrement())}
        >
         Decrement
        </button>
        <button
        onClick={() => dispatch(incrementByAmount(2))}
        >
         Increment by 2
        </button>
      </div>
    </div>
  )
}

export default App
