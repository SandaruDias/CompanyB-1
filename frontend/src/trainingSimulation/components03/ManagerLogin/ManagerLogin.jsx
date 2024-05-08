
/*import './ManagerLogin.css'
import { useState } from 'react'
import React from 'react'
import {Switch} from '@mui/material';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const ManagerLogin = (props) => {

    const[Val, setVal] = useState()

    const change = event => {
      setVal(event.target.value)
    }


  return (
    <>
        <h1 className='header'>Manager Portal</h1>
        <center>
            <form onSubmit={(e) => handleSubmit(e,'simulation')} className='portal-container'>
            <div className="form-row">
                    <label htmlFor="testID">Test ID</label>
                    <input className="forminput" type="text" id="testID" name="testID"
                        value={simulationData.testID} onChange={handleInputChange}
                        placeholder='Enter your Text Here' />
                </div>
                <div className="form-row">
                    <label htmlFor="comments">Comments</label>
                    <input className="forminput" type="text" id="comments" name="comments"
                        value={simulationData.comments} onChange={handleInputChange}
                        placeholder='Enter your Text Here' />
                </div>
                <div className="form-row">
                    <FormControlLabel
                        control={<Switch checked={simulationData.circuitSimulation} onChange={handleInputChange} name="circuitSimulation" id="circuitSimulation" />}
                        label="Circuit Simulation"
                    />
                </div>
                <div className="form-row">
                    <FormControlLabel
                        control={<Switch checked={simulationData.thermalSimulation} onChange={handleInputChange} name="thermalSimulation" id="thermalSimulation" />}
                        label="Thermal Simulation"
                    />
                </div>
                <div className="form-row">
                    <FormControlLabel
                        control={<Switch checked={simulationData.manufacturability} onChange={handleInputChange} name="manufacturability" id="manufacturability" />}
                        label="Manufacturability Documentation"
                    />
                </div>
                <button type='submit' className='portal-btn'>Submit</button>
            </form>

            <form onSubmit={(e) => handleSubmit(e,'simulation')} className='portal-container'>
                <button type='submit' className='portal-btn'>Submit</button>
            </form>
        
        </center>
    </>
  )
}

export default ManagerLogin*/