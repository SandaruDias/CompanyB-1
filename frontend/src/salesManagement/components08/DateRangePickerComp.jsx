import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateRangePickerComponent = () => {
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  const handleFromDateChange = (date) => {
    setFromDate(date);
  };

  const handleToDateChange = (date) => {
    setToDate(date);
  };

  return (
    <div>
      <h2>Select a Date Range</h2>
      <div>
        <label>From Date:</label>
        <DatePicker selected={fromDate} onChange={handleFromDateChange} />
      </div>
      <div>
        <label>To Date:</label>
        <DatePicker selected={toDate} onChange={handleToDateChange} />
      </div>
    </div>
  );
};

export default DateRangePickerComponent;