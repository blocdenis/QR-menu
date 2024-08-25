import React, { useEffect, useState } from 'react';
import styles from './Settings.module.scss';
import Button from '../../components/Button/Button';
import { AppLayout } from '../../layouts/AppLayout/AppLayout.jsx';
import TextInput from '../../components/Input/TextInput.jsx';
import ImgUploaderNew from '../../components/ImgUploader/ImgUpLoaderNew.jsx';
import Schedule from '../../components/Schedules/Schedule.jsx';
import getFullInfoRestaurant from '../../Fetch/getFullInfoRestaurant.js';
import restaurantUpdate from '../../Fetch/getUpdateRestaraunt.js';
import logo from '../../../public/vite.svg';

function Setting() {
  const [formErrors, setFormErrors] = useState({});
  const [objectRestaurant, setObjectRestaurant] = useState(null);
  const [formValues, setFormValues] = useState({
    name: '',
    address: '',
    logo: '',
    start_time: '',
    end_time: '',
    start_day: '',
    end_day: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allRestaurantData = await getFullInfoRestaurant();
        setObjectRestaurant(allRestaurantData);
        setFormValues({
          name: allRestaurantData.restaurant_data.name || '',
          address: allRestaurantData.restaurant_data.address || '',
          logo: allRestaurantData.restaurant_data.logo || '',
          start_time: allRestaurantData.restaurant_data.start_time || '',
          end_time: allRestaurantData.restaurant_data.end_time || '',
          start_day: allRestaurantData.restaurant_data.start_day || '',
          end_day: allRestaurantData.restaurant_data.end_day || ''
        });
      } catch (error) {
        console.error("Error fetching restaurant data:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues(prevValues => ({ ...prevValues, [name]: value }));
  };

  const handleSubmitData = () => {
    console.log(formValues);
    restaurantUpdate(formValues);
  };

  return (
    <AppLayout>
      <div className={styles.container_wrap}>
        <div className={styles.container_page}>
          <h1 className={styles.pageTitle}>Settings</h1>
        </div>
        <div id='signIn'>
          <div className="sign-into-container">
            <div className="sign-into-inputs">
              {objectRestaurant && (
                <>
                  <div className="input-imagegroup">
                    <label htmlFor="imgload" className="input-subtitle">
                      Logo
                    </label>
                    <div className="input-uploader">
                      <ImgUploaderNew
                        id='logo'
                        type="url"
                        value={formValues['logo']}
                        onChange={(e) => handleChange({ target: { name: 'logo', value: e.target.value } })}
                        src={formValues['logo'] || logo}
                      />
                    </div>
                  </div>
                  <TextInput
                    onChange={handleChange}
                    placeHolder="Enter restaurant name"
                    labelName="Restaurant Name"
                    name="name"
                    value={formValues.name}
                  />
                  <TextInput
                    onChange={handleChange}
                    placeHolder="Enter the street, number and the city"
                    labelName="Address"
                    name="address"
                    value={formValues.address}
                  />
                  <div>
                    <h2 className="title">Schedule</h2>
                    <Schedule
                      time={true}
                      name="time"
                      optionStart={formValues.start_time}
                      optionEnd={formValues.end_time}
                      onChange={(name, value) => setFormValues(prevValues => ({ ...prevValues, [name]: value }))}
                    />
                    <Schedule
                      time={false}
                      name="day"
                      optionStart={formValues.start_day}
                      optionEnd={formValues.end_day}
                      onChange={(name, value) => setFormValues(prevValues => ({ ...prevValues, [name]: value }))}
                    />
                  </div>
                </>
              )}
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