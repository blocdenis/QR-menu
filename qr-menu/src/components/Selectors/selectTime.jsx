import React, { useState } from 'react';
import styles from './selectTime.module.scss'
const Selector = ({selectors, nameButton}) => {
  const [selectedDay, setSelectedDay] = useState('');
  const [showDropDownMenu, setShowDropDownMenu] = useState(false);
  const handleSelectChange = (event) => {
    setSelectedDay(event.target.value); 
  };
  const dropdownToggle = `${styles.dropdownMenu} ${showDropDownMenu ? styles.active : styles.disable}`
  return (
    <div className="dropdown" style={{ position: 'relative', display: 'inline-block' }}>
    <div >
       <button className={styles.dropdownToggle} type="button" id="weekdayDropdown" data-toggle="dropdown" onClick={()=> setShowDropDownMenu(prevState => !prevState)}>
        {selectedDay ? selectedDay : nameButton}</button>

        </div> 
      
      <div className={dropdownToggle} style={{ position: 'absolute', top: '100%', left: 0, zIndex: 100 }} aria-labelledby="weekdayDropdown">
       {selectors && selectors.map((element, i)=> (
  <button key={element + i} className={styles.dropdownItem} onClick={() => setSelectedDay(element)}>{element}</button>
       ))}
      
        {/* <button className={styles.dropdownItem} onClick={() => setSelectedDay('Tuesday')}>Tuesday</button>
        <button className={styles.dropdownItem} onClick={() => setSelectedDay('Wednesday')}>Wednesday</button>
        <button className={styles.dropdownItem} onClick={() => setSelectedDay('Thursday')}>Thursday</button>
        <button className={styles.dropdownItem} onClick={() => setSelectedDay('Friday')}>Friday</button>
        <button className={styles.dropdownItem} onClick={() => setSelectedDay('Saturday')}>Saturday</button>
        <button className={styles.dropdownItem} onClick={() => setSelectedDay('Sunday')}>Sunday</button> */}
      </div>
    </div>
  );
};

export default Selector;
