import React from 'react'
import { useState } from 'react'
import {useDispatch,useSelector } from "react-redux"
import {action} from "../store/store"

export default function Component() {
  const [student ,setStudent]= useState
    const counter = useSelector((state)=>state.counter)
    const dispatch = useDispatch();

    const up =()=>{
        dispatch(action.inc())
    }
    const down =()=>{
        dispatch(action.dec())
    }
    const add =()=>{
        dispatch(action.add(student))
    }
  
  return (
    <>
    <div>{counter}</div>

    <button onClick={()=>up()}>upcounter</button>
    <button onClick={()=>down()}>down counter</button>
    <button onClick={()=>add()}>add</button>
    
    </>

  )
}
