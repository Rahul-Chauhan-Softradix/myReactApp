import React, { useReducer } from 'react'
import '../App.css'


function Reducer() {
    const initialstate = 0
const reducer = (state,action)=>{
    if(action.type === "Inc"){
       return state + 1
    }
    if(action.type === 'Dec'){
      return  state - 1
    }
}

const [state,dispatch]  = useReducer(reducer,initialstate)

  return (
    <div className='Reducer'> 
        <div className='card'>
        <h1>{state}</h1>
        <div className='buttons'>
        <button onClick={()=>{dispatch({type:'Inc'})}}>Increment</button>
        <button onClick={()=>{dispatch({type:'Dec'})}}>Decrement</button>
        </div>
        </div>
  

    </div>
  )
}

export default Reducer