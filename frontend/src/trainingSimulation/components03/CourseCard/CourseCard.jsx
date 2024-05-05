import React from 'react'
import './CourseCard.css'
import { useState } from 'react'

export const Card = (props) => {

  const[Val, setVal] = useState()

  const change = event => {
    setVal(event.target.value)
  }

  
  return (
    <div className='card-container'>
        <img src = {props.imgLink} alt = {props.imgAlt} className='card-img'/>
        <h1 className='card-title'>{props.CourseTitle}</h1>
        <p className='card-description'>{props.CourseDescription}</p>
        <input onChange ={change}
        value = {Val} className="card-input" placeholder ="Enter your Index No here"/>
        <a href = {props.EnrolLink} className='card-btn'>Enrol Now</a>
    </div>
  )
}