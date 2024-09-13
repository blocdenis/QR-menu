import React, { useState } from 'react';
import './Schedule.scss';
import Options from './Options';
import IconClock from '../../SVG/IconClock';


function Schedule({ time, name, onChange, optionStart, optionEnd }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange(name, value); 
  };
  
  const startName = `start_${name}`
  const endName = `end_${name}`
  return (
    <div className="schedule-container">
     <div className="schedule-row">
       <div className="time-select-container">
        <label className="label" >Select a {name}</label>
          <div className="time-input">
          <IconClock />
            <select className="time-select" name={startName} onChange={handleChange}>
             {optionStart ? <option>{optionStart}</option>
             :
             <option>Start {name}</option>
            }
               <Options time={time} />
            </select>
          </div>
          <span className="to-text">to</span>
          <div className="time-input">
         <IconClock />
            <select className="time-select" onChange={handleChange} name={endName}>
            {optionEnd ? <option>{optionEnd}</option> 
            :
            <option>End {name}</option>
            }
              <Options time={time} />
            </select>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Schedule;
