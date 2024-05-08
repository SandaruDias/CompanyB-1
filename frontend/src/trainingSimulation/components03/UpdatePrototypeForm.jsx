import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import axios from 'axios';

function UpdatePrototypeForm() {
  const [id, setId] = useState('');
  const [thermalTestPassed, setThermalTestPassed] = useState(false);
  const [electricalTestPassed, setElectricalTestPassed] = useState(false);
  const [approvalStatus, setApprovalStatus] = useState('');
  const [approvalMessage, setApprovalMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      thermalTestPassed,
      electricalTestPassed,
      approvalStatus,
      approvalMessage,
    };

    try {
      await axios.put(`http://localhost:8090/tps/prototypes/update/${id}`, formData);
      alert('Prototype updated successfully!');
    } catch (error) {
      console.error('Failed to update prototype:', error);
      alert('Failed to update prototype.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Prototype ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
        required
        fullWidth
      />
      {/* Other input fields */}
      <Button type="submit">Update Prototype</Button>
    </form>
  );
}

export default UpdatePrototypeForm;
