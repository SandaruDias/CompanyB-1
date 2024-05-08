import React, { useState } from 'react';
import './ManagerLogin.css';
import { Switch, FormControlLabel } from '@mui/material';
import axios from 'axios';
import { useNavigate , useParams } from 'react-router-dom';

const ManagerDash = () => {
    // State for the simulation form
    const [simulationData, setSimulationData] = useState(
        {
            "testID": "",
            "simulApproval" :null,
            "simulComments": "",
            "circuitSimulStatus" : null,
            "thermalSimulStatus": null,
            "manufacturabilityStatus":null
        }
    );
    const navigate= useNavigate();

    const { id } = useParams(); // This retrieves the `id` from the URL
    const [thermalTestPassed, setThermalTestPassed] = useState(false);
    const [electricalTestPassed, setElectricalTestPassed] = useState(false);
    const [approvalStatus, setApprovalStatus] = useState('');
    const [approvalMessage, setApprovalMessage] = useState('');

    // Handle input changes including switches
    const handleInputChange = (event) => {
        const { id, value, checked, type } = event.target;
        setSimulationData({
            ...simulationData,
            [id]: type === 'checkbox' ? checked : value
        });
    };
    const handleInput = (event) => {
        const { id, value, checked, type } = event.target;
        setPrototypeData({
            ...prototypeData,
            [id]: type === 'checkbox' ? checked : value
        });
    };

    // Submit form data
    const handleSubmit = async (event) => {
        event.preventDefault();
        const url = 'http://localhost:8090/tps/simulations/update';  // Change to your API URL

        try {
            const response = await axios.put(url, simulationData);
            console.log('Response:', response.data);
            alert("Successfully Updated");
            navigate("/training-simulation/manager");
            
        } catch (error) {
            console.error('Error:', error);
            // Handle error
        }
    };

    const handleSubmission = async (event) => {
       event.preventDefault();
        try {
            const response = await axios.put(`http://localhost:8090/tps/prototypes/update/${id}`, null, {
                params: {
                    thermalTestPassed,
                    electricalTestPassed,
                    approvalStatus,
                    approvalMessage
                }
            });
            alert('Prototype updated successfully!');
            console.log(response.data);
        } catch (error) {
            alert('Failed to update prototype');
            console.error('Error:', error);
        }
    };

    return (
        <div className='container'>
            <h1 className='header'>Manager Portal</h1>
            <h2 className='header'>Simulations</h2>
            
            <form onSubmit={handleSubmit} className='portal-container'>
                <div className="form-row">
                    <label htmlFor="testID" style={{ fontSize: '20px' ,color: 'white', backgroundColor: 'blue' ,fontWeight : "bold",textAlign: 'left' }}>Test ID</label>
                    <input className="forminput" type="text" id="testID" name="testID"
                        value={simulationData.testID} onChange={handleInputChange}
                        placeholder='Enter TestID Here'  />
                </div>
                <div className="form-row">
                    <label htmlFor='simulApproval' style={{ fontSize: '20px' ,color: 'white', backgroundColor: 'blue',fontWeight : "bold" ,textAlign: 'left' }}>Simulation Approval</label>
                    <FormControlLabel
                        control={<Switch checked={simulationData.simulApproval} onChange={handleInputChange} name="simulApproval" id="simulApproval" />}                    />
                </div>
                <div className="form-row">
                    <label htmlFor='circuitSimulStatus' style={{ fontSize: '20px' ,color: 'white', backgroundColor: 'blue',fontWeight : "bold"  }}>Circuit Simulation Status</label>
                    <FormControlLabel
                        control={<Switch checked={simulationData.circuitSimulStatus} onChange={handleInputChange} name="circuitSimulStatus" id="circuitSimulStatus" />}
                    />
                </div>
                <div className="form-row">
                    <label htmlFor='thermalSimulStatus' style={{ fontSize: '20px' ,color: 'white', backgroundColor: 'blue' ,fontWeight : "bold" ,textAlign: 'center'}}>Thermal Simulation Status</label>
                    <FormControlLabel
                        control={<Switch checked={simulationData.thermalSimulStatus} onChange={handleInputChange} name="thermalSimulStatus" id="thermalSimulStatus" />}
                    />
                </div>
                <div className="form-row">
                    <label htmlFor='manufacturabilityStatus' style={{ fontSize: '20px' ,color: 'white', backgroundColor: 'blue',fontWeight : "bold" ,textAlign: 'center' }}>Manufacturability</label>
                    <FormControlLabel
                        control={<Switch checked={simulationData.manufacturabilityStatus} onChange={handleInputChange} name="manufacturabilityStatus" id="manufacturabilityStatus" />}
                        
                    />
                </div>
                <div className="form-row">
                    <label htmlFor="comments" style={{ fontSize: '20px' ,color: 'white', backgroundColor: 'blue' ,fontWeight : "bold",textAlign: 'center' }}>Comments</label>
                    <input className="forminput" type="text" id="simulComments" name="simulComments"
                        value={simulationData.comments} onChange={handleInputChange}
                        placeholder='Enter your comments Here' />
                </div>
                <button variant="outlined" type="submit" className='portal-btn'>Update</button>
            </form>
            <h2 className='header'>Prototypes</h2>
            <form onSubmit={handleSubmission}>
            <h1>Update Prototype {id}</h1>
            <label>
                Thermal Test Passed:
                <input
                    type="checkbox"
                    checked={thermalTestPassed}
                    onChange={e => setThermalTestPassed(e.target.checked)}
                />
            </label>
            <label>
                Electrical Test Passed:
                <input
                    type="checkbox"
                    checked={electricalTestPassed}
                    onChange={e => setElectricalTestPassed(e.target.checked)}
                />
            </label>
            <label>
                Approval Status:
                <input
                    type="text"
                    value={approvalStatus}
                    onChange={e => setApprovalStatus(e.target.value)}
                />
            </label>
            <label>
                Approval Message:
                <input
                    type="text"
                    value={approvalMessage}
                    onChange={e => setApprovalMessage(e.target.value)}
                />
            </label>
            <button type="submit">Update Prototype</button>
            </form>
            
            
        </div>
        
    );
};

export default ManagerDash;
