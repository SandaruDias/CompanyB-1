
import './ManagerLogin.css'
import { useState } from 'react'
import React from 'react'
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const ManagerLogin = (props) => {

    const[Val, setVal] = useState()

    const change = event => {
      setVal(event.target.value)
    }


  return (
    <>
    <h1 className='header'>Manager Portal</h1>
    <h1></h1>
    <center>
        <div className='portal-container'>
            <h1>    </h1>
            <h1 className='portal-title'>Simulation</h1>
            <h1></h1>
            
            <div className="form-container">
             <div className="form-row">
                <label htmlFor="question1">Test ID</label>
                <input className ="forminput" type="text" id="question1" name="question1" placeholder='Enter your Text Here'/>
            </div>
            <div className="form-row">
                <label htmlFor="question2">Comments</label>
                <input className ="forminput" type="text" id="question2" name="question2" placeholder='Enter your Text Here'/>
            </div>
            <div className="form-row">
                <label htmlFor="question3">Circuit Simulation</label>
                
                <Switch {...label} />

            </div>
            <div className="form-row">
                <label htmlFor="question4">Thermal Simulation</label>
                <Switch {...label} />
            </div>
            <div className="form-row">
                <label htmlFor="question4">Manufacturability Documentation</label>
                <Switch {...label} />
            </div>
            </div>
       
        <a href = "/simulationsubmit" className='portal-btn'>Submit</a>
        </div>
        </center>

        <center>
        <div className='portal-container'>
            <h1></h1>
            <h1 className='portal-title'>Prototype</h1>
            <h1></h1>
            
            <div className="form-container">
             <div className="form-row">
                <label htmlFor="question1">Test ID</label>
                <input className ="forminput" type="text" id="question1" name="question1" placeholder='Enter your Text Here'/>
            </div>
            <div className="form-row">
                <label htmlFor="question2">Comments</label>
                <input className ="forminput" type="text" id="question2" name="question2" placeholder='Enter your Text Here'/>
            </div>
            <div className="form-row">
                <label htmlFor="question3">Approval Status</label>
                
                <Switch {...label} />

            </div>
            <div className="form-row">
                <label htmlFor="question4">Approval Message</label>
                <input className ="forminput" type="text" id="question2" name="question2" placeholder='Enter your Text Here'/>
            </div>
           
        </div>
        <a href = "/simulationsubmit" className='portal-btn'>Submit</a>
        </div>
        </center>
    </>
  )
}

export default ManagerLogin