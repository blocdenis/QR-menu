import React, { useEffect } from 'react';
import styles from './Settings.module.scss';
import { useRef, useState } from "react";
import Button from '../../components/Button/Button';
import { AppLayout } from '../../layouts/AppLayout/AppLayout.jsx';
import PasswordInput from '../../components/Input/PasswordInput';
import validate from '../../components/Auth/SignUp/validation/func'
import TextInput from '../../components/Input/TextInput.jsx';
import Selector from '../../components/Selectors/selectTime.jsx';
import getFullInfoRestaurant from '../../Fetch/getFullInfoRestaurant.js'
import ImgUploaderNew from '../../components/ImgUploader/ImgUpLoaderNew.jsx'
import Schedule from '../../components/Schedules/Schedule.jsx';
import restaurantUpdate from '../../Fetch/getUpdateRestaraunt.js';
import logo from '../../../public/vite.svg'

function Setting() {
  const [formErrors, setFormErrors] = useState({});
  const [objectRestaurant, setobjectRestaurant] = useState('');
  const [formValues, setFormValues] = useState(
    {
      
    });

  useEffect(() => {
    getFullInfoRestaurant()
      .then(allRestaurantData => {
        setobjectRestaurant(allRestaurantData);
        const restaurantName = objectRestaurant.restaurant_data['name'];
        setFormValues(prevValues => ({
          ...prevValues,
          'name': restaurantName
        }));
      })
      .catch(error => {

      });
  }, [])

  const handleChange = (e) => {
    console.log(e.target.name)
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues)
  };
  const handleSubmitData = () => {
    console.log(formValues)
   restaurantUpdate(formValues)
  }

  return (
    <AppLayout>
      <div className={styles.container_wrap}>
        <div className={styles.container_page}>
          <h1 className={styles.pageTitle}>Settings</h1></div>
        <div id='signIn'>
          <div className="sign-into-container" >
            <div className="sign-into-inputs">

              {objectRestaurant && <>
                 {/* <TextInput onChange={handleChange} placeHolder={'Name of User'} valueName={formValues['User name']} labelName={'User name'} name={'User name'} /> 
                <PasswordInput onChange={handleChange} />  */}
                <div className="input-imagegroup">
                  <label htmlFor="imgload" className="input-subtitle">
                    Logo
                  </label>
                  <div className="input-uploader">
                    <ImgUploaderNew
                      id='logo'
                      type="url"
                      value={formValues['logo']}
                      onChange={handleChange}
                      src={objectRestaurant?.restaurant_data?.logo || logo}
                    />
                  </div>
                </div>
                <TextInput onChange={handleChange} placeHolder={objectRestaurant?.restaurant_data?.name || 'Name'} labelName={'Restourant Name'} name={'name'} />
                <TextInput onChange={handleChange} placeHolder={objectRestaurant?.restaurant_data?.address || 'Enter the street, number and the city'} labelName={'Adress'} name={'address'} />


                <div>
                  <h2 className="title">Schedule</h2>

                  <Schedule time={true} name={'time'} optionStart={objectRestaurant?.restaurant_data?.start_time} optionEnd={objectRestaurant?.restaurant_data?.end_time} onChange={handleChange} />
                  <Schedule time={false} name={'day'} optionStart={objectRestaurant?.restaurant_data?.start_day} optionEnd={objectRestaurant?.restaurant_data?.end_day} onChange={handleChange} />
                </div>
              </>}
            </div>
          </div>
        </div>
        <div>
          <Button variant="custom">Back</Button>
          <Button onClick={handleSubmitData}>Save</Button>
        </div>
      </div>

    </AppLayout>
  );
}

export default Setting;
