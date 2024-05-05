import {useEffect,useRef,useState} from 'react'
import {DateRangePicker} from 'react-date-range'

import format from 'date-fns/format'
import { addDays } from 'date-fns'

import Chart from "chart.js/auto";

import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import "./styles.css";

const DateRangePickerComp = () => {
    
    //date state 
    const[range,setRange] = useState([ 
      {
        startDate: new Date(),
        endDate: addDays(new Date(),7),
        key: 'selection'
      }
    ])

    //open close
    const[open,setOpen] = useState(false)

    // get the target element to toggle
    const refOne = useRef(null)

    useEffect(() => {
        // set current date on component Load
        document.addEventListener("keydown",hideOnEscape,true)
        document.addEventListener("click",hideOnClickOutside,true)
        fetch('http://localhost:8090/sales/salesReport?startDate=2024-04-24&endDate=2024-04-26', {
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then(response => response.json())
        .then(res => {
            // Process the fetched data to count the number of objects per month
            const salesByMonth = res.reduce((acc, cur) => {
                const month = new Date(cur.saleDate).getMonth(); // Extract month from saleDate
                acc[month] = (acc[month] || 0) + 1; // Increment count for the month
                return acc;
            }, Array.from({ length: 12 }, () => 0)); // Initialize array for 12 months with counts initialized to 0
            
            // Render the chart
            const ctx = document.getElementById('myChart');
            if (ctx && ctx.chart) {
              // If a Chart instance exists, destroy it
                ctx.chart.destroy();
            }
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                    datasets: [{
                        label: '# of Objects',
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
        })
        .catch(error => console.error('Error fetching sales data:', error));

    },[])
    
    //hide dropdown on ESC press
    const hideOnEscape = (e) => {
        console.log(e.key)
        if (e.key === "Escape"){
            setOpen(false)
        }
    }

    //hide on outside click 
    const hideOnClickOutside = () => {
        //console.Log(refOne.current)
        //console.Log(e.target)
        if(refOne.current && !refOne.current.contains(e.target)){
            setOpen(false)
        }
    }
    
    return(
      <>
        <div className="calendarWrap">
            <input 
              value={`${format(range[0].startDate,"MM/dd/yyyy")} to ${format(range[0].endDate,"MM/dd/yyyy")} `}
              readOnly
              className = "inputBox"
              onClick={() => setOpen(open => !open)}
            />
          
          <div ref= {refOne}>
          {open &&
            <DateRangePicker
              onChange={item => setRange([item.selection])}
              editableDateInputs={true}
              moveRangeOnFirstSelection={false}
              ranges={range}
              months={2}
              diretion='horizontal'
              className="calendarElement"
            />
          }
          </div>
        </div>
          <div>
            <canvas id="myChart"></canvas>
          </div>
        </>

        
    )
}
export default DateRangePickerComp