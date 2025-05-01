import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '../service/store'
import {increment,decrement } from "../features/reducers/counterslice"

const Counter = ()=>  {
    const count = useSelector((state:RootState ) => state.counter.value)
  const dispatch= useDispatch<AppDispatch>( )
    return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      
    </div>
    
        
      
  )
}

export default Counter
