
function generateTimes() {
    const times = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 10) {
        const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        times.push(time);
      }
    }
    return times;
  }
const Options = ({time}) => {
    const timesOfDay = generateTimes();
  const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Friday', 'Saturday', 'Sunday']
  return (
    <>
     {time ? (
                timesOfDay.map(time => (
                  <option key={time} value={time}>{time}</option>
                ))
              ) :
              (
                weekDays.map(day => (
                    <option key={day} value={day}>{day}</option>
                  ))
                
              ) 
            }
    </>
  )
}

export default Options