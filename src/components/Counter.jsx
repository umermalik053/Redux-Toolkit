import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/reducers/counterSlice';

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state)=>state?.counter);
  return (
    <div>
      Counter App
      <button onClick={()=>dispatch(increment())}>+</button>
      <p>{counter?.count}</p>
      <button onClick={()=>dispatch(decrement())}>-</button>
    </div>
  )
}

export default Counter
