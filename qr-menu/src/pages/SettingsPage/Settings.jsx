import React, { useEffect } from 'react';
import styles from './Settings.module.scss';
import { useRef, useState } from "react";
import Button from '../../components/Button/Button';
import { AppLayout } from '../../layouts/AppLayout/AppLayout';
import PasswordInput from '../../components/Input/PasswordInput';
import validate from '../../components/Auth/SignUp/validation/func'
import TextInput from '../../components/Input/TextInput.jsx';
import Selector from '../../components/Selectors/selectTime.jsx';
import getFullInfoUser from '../../Fetch/getFullInfo.js'
function Setting() {
  const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Friday', 'Saturday', 'Sunday']
  const workTime = ['09:00', '10:00', '11:00', '12:00']
  
  const [formErrors, setFormErrors] = useState({});
  const [objectUser, setobjectUser] = useState('');
  const [formValues, setFormValues] = useState(
    {
      email: '',
      restourant: '',
      password: '',
      confirmPassword: '',
    });
  useEffect(() => {
    getFullInfoUser()
      .then(allUserData => {
        setobjectUser(allUserData);
        const restaurantName = objectUser.restaurant['name'];
        setFormValues(prevValues => ({
          ...prevValues,
          restourant: restaurantName
        }));
        console.log(objectUser.restaurant.name); // Здесь будет доступен результат
      })
      .catch(error => {
        // Обработка ошибки, если необходимо
      });
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues)

  };

  const handleCheckInput = (e) => {
    const error = validate(formValues);
    console.log(error)
    setFormErrors(error);
  }

  return (
    <AppLayout>
      <div >
        <div><h1 className={styles.pageTitle}>Settings</h1></div>
        <div id='signIn' style={{ width: '423px' }}>
          <div className="sign-into-container" >
            <div className="sign-into-inputs">

              {objectUser && <>
                <TextInput onChange={handleChange} handleCheckInput={handleCheckInput} formErrors={formErrors} placeHolder={objectUser.restaurant.name} labelName={'User name'} />
                <PasswordInput onChange={handleChange} handleCheckInput={handleCheckInput} formErrors={formErrors} />
                <TextInput onChange={handleChange} handleCheckInput={handleCheckInput} formErrors={formErrors} placeHolder={'Name of the restourant'} labelName={'Restourant Name'} />
                <TextInput onChange={handleChange} handleCheckInput={handleCheckInput} formErrors={formErrors} placeHolder={'Enter the street, number and the city'} labelName={'Adress'} />
                <div style={{ flexFlow: 'row', width: '530px' }}>
                  <p className={styles.nameField}> Select days</p>
                  <Selector selectors={weekDays} nameButton={'Select a day'} />
                  <div className={styles.to}>
                    to
                  </div>
                  <Selector selectors={weekDays} nameButton={'Select a day'} />
                  </div>
                  <div style={{ flexFlow: 'row', width: '530px' }}>
                  <p className={styles.nameField}> Select a time</p>
                  <Selector selectors={workTime} nameButton={'Select a time'}/>
                  <div className={styles.to}>
                    to
                  </div>
                  <Selector selectors={workTime} nameButton={'Select a time'}/>
                  </div>
              </>}
            </div>
          </div>
        </div>
        <div>
          <Button variant="custom">Back</Button>
          <Button>Save</Button>
        </div>
      </div>

    </AppLayout>
  );
}

export default Setting;
