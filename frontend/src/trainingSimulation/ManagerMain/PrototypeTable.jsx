import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './PrototypeTable.module.css'; // Import the CSS module
import { useNavigate } from 'react-router-dom';

function PrototypeTable() {
    const [prototypes, setPrototypes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleItemClick = (id) => {
        navigate(`/training-simulation/manager/update/${id}`);
    };

    useEffect(() => {
        axios.get('http://localhost:8090/tps/prototypes/all') // Make sure URL matches your backend endpoint
            .then(response => {
                if (response.status === 200) {
                    setPrototypes(response.data);
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
    }, []);

    if (isLoading) {
        return <div className={styles.loading}>Loading...</div>;
    }

    if (error) {
        return <div className={styles.error}>Error: {error}</div>;
    }

    return (
        <div className={styles.tableContainer}>
            <h1>PROTOTYPES</h1>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Thermal Test</th>
                        <th>Circuit Test</th>
                        <th>Simulation Approval</th>
                        <th>Simulation Message</th>
                    </tr>
                </thead>
                <tbody>
                    {prototypes.map((prototype, index) => (
                        <tr key={index}>
                            <td>{prototype.id}</td>
                            <td>{prototype.thermalTestPassed ? 'Passed' : 'Failed'}</td>
                            <td>{prototype.electricalTestPassed ? 'Passed' : 'Failed'}</td>
                            <td>{prototype.approvalStatus}</td>
                            <td>{prototype.approvalMessage}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
    
        <h1>Choose an Item to Edit</h1>
        <ul>
            {prototypes.map(prototype => (
                <li key={prototype.id} onClick={() => handleItemClick(prototype.id)}>
                    {prototype.id}
                </li>
            ))}
        </ul>
    </div>
    );
}

export default PrototypeTable;
