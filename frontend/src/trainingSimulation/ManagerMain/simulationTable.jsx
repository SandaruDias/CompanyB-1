import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './SimulationTable.module.css'; // Import the CSS module
import ManagerDash from './managerDash';

function SimulationTable() {
    const [simulations, setSimulations] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const deleteSimulation = (id) => {
        axios.get(`http://localhost:8090/tps/simulations/delete?id=${id}`)
            .then(response => {
                console.log('Deleted successfully:', response);
                fetchSimulations();
            })
            .catch(error => {
                console.error('Failed to delete simulation:', error);
                setError('Failed to delete simulation');
            });
    };
    const fetchSimulations = () => {
        axios.get('http://localhost:8090/tps/simulations/all')
            .then(response => {
                if (response.status === 200) {
                    setSimulations(response.data);
                } else {
                    throw new Error('No content');
                }
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };
    
    useEffect(() => {
        fetchSimulations();
    }, []);

    if (isLoading) {
        return <div className={styles.loading}>Loading...</div>;
    }

    if (error) {
        return <div className={styles.error}>Error: {error}</div>;
    }

    return (
        <div className={styles.tableContainer}>
            <h1>SIMULATIONS</h1>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>testID</th>
                        <th>Simulation Approval</th>
                        <th>Circuit Simulation Status</th>
                        <th>Thermal Simulation Status</th>
                        <th>Manufacturability</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {simulations.map((simulation, index) => (
                        <tr key={index}>
                            <td>{simulation.testID}</td>
                            <td>{simulation.simulApproval? 'Passed' : 'Failed'}</td>
                            <td>{simulation.circuitSimulStatus ? 'Passed' : 'Failed'}</td>
                            <td>{simulation.thermalSimulStatus? 'Passed' : 'Failed'}</td>
                            <td>{simulation.manufacturabilityStatus? 'Passed' : 'Failed'}</td>
                            <td><button onClick={() => deleteSimulation(simulation.testID)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        
    );
}

export default SimulationTable;
