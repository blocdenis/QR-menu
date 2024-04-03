import React, { useState } from 'react';
import styles from './InputDate.module.scss'
const WeekdaySelector = () => {
  const [selectedDay, setSelectedDay] = useState('');
  const [showDropDownMenu, setShowDropDownMenu] = useState(false);

  const handleSelectChange = (event) => {
    setSelectedDay(event.target.value);
  };
  const dropdownToggle = `${styles.dropdownMenu} ${showDropDownMenu ? styles.active : styles.disable}`
  return (
    <div className="dropdown">
      <button className={styles.dropdownToggle} type="button" id="weekdayDropdown" data-toggle="dropdown" onClick={()=> setShowDropDownMenu(prevState => !prevState)}>
        {selectedDay ? selectedDay : 'Select a day'}
      </button>
      <div className={dropdownToggle} aria-labelledby="weekdayDropdown">
        <button className={styles.dropdownItem} onClick={() => setSelectedDay('Monday')}>Monday</button>
        <button className={styles.dropdownItem} onClick={() => setSelectedDay('Tuesday')}>Tuesday</button>
        <button className={styles.dropdownItem} onClick={() => setSelectedDay('Wednesday')}>Wednesday</button>
        <button className={styles.dropdownItem} onClick={() => setSelectedDay('Thursday')}>Thursday</button>
        <button className={styles.dropdownItem} onClick={() => setSelectedDay('Friday')}>Friday</button>
        <button className={styles.dropdownItem} onClick={() => setSelectedDay('Saturday')}>Saturday</button>
        <button className={styles.dropdownItem} onClick={() => setSelectedDay('Sunday')}>Sunday</button>
      </div>
    </div>
  );
};

export default WeekdaySelector;
