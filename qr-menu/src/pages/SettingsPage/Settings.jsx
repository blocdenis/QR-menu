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

  const [imageChanged, setImageChanged] = useState(false);
  const [savedLogo, setSavedLogo] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allRestaurantData = await getFullInfoRestaurant();
        setObjectRestaurant(allRestaurantData);
        setFormValues({
          name: allRestaurantData.name || '',
          address: allRestaurantData.address || '',
          logo: allRestaurantData.logo || '',
          start_time: allRestaurantData.start_time || '',
          end_time: allRestaurantData.end_time || '',
          start_day: allRestaurantData.start_day || '',
          end_day: allRestaurantData.end_day || ''
        });0
        
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
    const dataToSend = { ...formValues };

    if (!imageChanged) {
      delete dataToSend.logo;
    }


    restaurantUpdate(dataToSend).then(() => {
      getFullInfoRestaurant().then(updatedData => {
        setObjectRestaurant(updatedData);
        setSavedLogo(updatedData.logo || '');
      });
    }).catch(error => {
      console.error("Error updating restaurant data:", error);
    });
  };

  return (
    <AppLayout restaurantLogo={savedLogo}>
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
                        onImageChange={setImageChanged}
                      />
                    </div>
                  </div>
                  <TextInput
                    onChange={handleChange}
                    placeHolder="Enter restaurant name"
                    labelName="Restaurant Name"
                    name="name"
                    valueName={formValues.name}
                  />
                  <TextInput
                    onChange={handleChange}
                    placeHolder="Enter the street, number and the city"
                    labelName="Address"
                    name="address"
                    valueName={formValues.address}
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