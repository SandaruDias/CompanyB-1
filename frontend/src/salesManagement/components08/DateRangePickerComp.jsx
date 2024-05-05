import React, { useState } from 'react';
import Chart from "chart.js/auto";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateRangePickerComponent = () => {
    const [fromDate, setFromDate] = useState(null);
    const [toDate, setToDate] = useState(null);
    const [chartInstance, setChartInstance] = useState(null);

    const getDate = (inDate) => {
        const date = new Date(inDate);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');

        return `${year}-${month}-${day}`;
    }

    const displayChart = async () => {
        console.log(getDate(fromDate), getDate(toDate));
        await fetch(`http://localhost:8090/sales/salesReport?startDate=${getDate(fromDate)}&endDate=${getDate(toDate)}`, {
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then(response => response.json())
            .then(res => {
                console.log(res);
                const ctx = document.getElementById('myChart');
                const salesByMonth = res.reduce((acc, cur) => {
                    const month = new Date(cur.saleDate).getMonth(); // Extract month from saleDate
                    acc[month] = (acc[month] || 0) + 1; // Increment count for the month
                    return acc;
                }, Array.from({ length: 12 }, () => 0)); 

                if(chartInstance) {
                    chartInstance.data.labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                    chartInstance.data.datasets[0].data = salesByMonth;
                    chartInstance.update();
                } else {
                    const newChartInstance = new Chart(ctx, {
                        type: 'bar',
                        data: {
                            labels: ['January', 'February', 'March', 'April', 'May', 'June','July','August','September','October','November','December'],
                            datasets: [{
                                label: 'No of Sales',
                                data: salesByMonth,
                                borderWidth: 1
                            }]
                        },
                        options: {
                            scales: {
                                y: {
                                    beginAtZero: true
                                }
                            }
                        }
                    });
                    setChartInstance(newChartInstance);
                }
            })
            .catch(error => console.error('Error fetching sales data:', error));

    }

    const handleFromDateChange = (date) => {
        setFromDate(date);
    };

    const handleToDateChange = (date) => {
        setToDate(date);
        displayChart();
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
            <div>
                <canvas id="myChart"></canvas>
            </div>
        </div>
    );
};

export default DateRangePickerComponent;
