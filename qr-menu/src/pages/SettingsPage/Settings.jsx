import React from 'react';

import styles from './Settings.module.scss';
import { useRef, useState } from "react";

import Button from '../../components/Button/Button';
import { AppLayout } from '../../layouts/AppLayout/AppLayout';
import PasswordInput from '../../components/Input/PasswordInput';
import validate from '../../components/Auth/SignUp/validation/func'
import RestourantName from '../../components/Input/RestourantName';
function Setting() {
  const [formErrors, setFormErrors] = useState({});
    const [formValues, setFormValues] = useState(
        {   
          email: '',    
          restourant: '',   
          password: '',    
          confirmPassword: '', 
      });  
  const handleChange = (e) => {   
    const { name, value } = e.target;      
    setFormValues({ ...formValues, [name]:value });    
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
       <div><h1 className={ styles.pageTitle}>Settings</h1></div> 
    <div id='signIn'>
     <div className="sign-into-container">
       <div className="sign-into-inputs">
        
        <PasswordInput onChange={handleChange} handleCheckInput={handleCheckInput} formErrors={formErrors} />
        <RestourantName onChange={handleChange} handleCheckInput={handleCheckInput} formErrors={formErrors} />
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
