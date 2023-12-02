
import { useState, useEffect } from "react";
//VALIDATION
  const validate = (values) => {
  const errors = {};
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const regexName = /^[a-zA-Z.-]+$/;
  if (!values.email) {
    errors.email = "Email is Required!";
  } else if(!regexEmail.test(values.email)){
    errors.email = "Email is Entered Incorrectly!";
  }
  if (!values.username) {
    errors.username = "Name is Required!";
  } else if(!regexName.test(values.username)){
    errors.username = "Name is Entered Incorrectly!"
  }
  if (!values.password) {
    errors.password = "Password is Required!";
  } else if(values.password.length < 6){
    errors.password = "Password must be more than 6 sumbols!"
   } 
   if(!confirmPassword){
    errors.confirmPassword = "Confirm Password is Required!"
   } else if(values.password !== values.confirmPassword){
    errors.confirmPassword = "Password do not match!"
   }
  if (!values.rememberMe) {
   errors.rememberMe = "Ckeckbox is Required!";
  }
  return errors;
};

import CreateInput from "../CreateInput"

function SingUp({checkUser}){
    const displayBlock = {
        display: 'block'
    }
    const styleFont = {
        fontWeight: 'bold',
        color: '#15C5CE',
        cursor: 'pointer'
    }

    //VRIFICATION OF FORM
    const [formValues, setFormValues] = useState(
      {
        email: '',
        username: '',
        password: '',     
        rememberMe: false    
    });
    const [formErrors, setFormErrors] = useState({});
    const [isSubmiting, setIsSubmiting] = useState(true);         
    //MONITORING CHANGE
    const handleChange = (e) => {    
      const { name, value, checked } = e.target;   
      if (name === "remember-me") {    
        setFormValues({ ...formValues, rememberMe: checked });    
      } else {    
        setFormValues({ ...formValues, [name]: value });    
      }      
    };
    //CKECKING THE FORM AND SENDING   
    const handleSubmit = (e) => {    
        e.preventDefault();    
        if (formValues.rememberMe) {
          submitForm(formValues)    
      } else {    
          console.log("Checkbox - false!"); 
      }

      //Validate form fields   
        const error = validate(formValues);    
        setFormErrors(error);   
        if(Object.keys(error).length > 0){  
            return 
        }    
        setFormValues({
            email: "",   
            username: "",   
            password: "",
            confirmPassword: '', 
            rememberMe: false,  
          });   
          setFormErrors({}); 
          setIsSubmiting(true) 
          submitForm(formValues) 
    }            
    useEffect(() => {    
        if(isSubmiting){    
          setTimeout(() => {      
            setIsSubmiting(true)   
          }, 2000);  
        }
    }, [isSubmiting]);
    //SENDING DATA
    const submitForm = (values) => {  
      setIsSubmiting(true)    
      console.log(formValues);   
    };      

   function goToSingIn(value){
    checkUser(value)
   }
   return (
    <>
    <div className="sign-into-inputs">
        <div className="sign-into-input-email" >

            <CreateInput 
            focus={true} 
            inputType='email' 
            labeltxt='Email' 
            placeholder='Enter your email' 
            labelClass='before-active'
            name='email'
            id="email"
            onChange={handleChange}
            value={formValues.email}
            className={formErrors.email && 'input-error'}
            style={formErrors.email ? { borderColor: "red" } : {}} 
            /><br/>
            {formErrors.email && (
                <span className="error" style={{ color:"red"}}>{formErrors.email}</span>
            )}
        </div>
        <div className="sign-into-input-username">
            <CreateInput 
            inputType='text' 
            labeltxt='User name' 
            placeholder='Enter your user name' 
            labelClass='before-active' 
            name="username"
            id="username"
            onChange={handleChange}
            value={formValues.username}
            className={formErrors.username && 'input-error'}
            style={formErrors.username ? { borderColor: "red" } : {}}
            /><br/>
                {formErrors.username && (
                    <span className="error" style={{ color:"red"}}>{formErrors.username}</span>
                )}
        </div>
        <div className="sign-into-input-password">
            <CreateInput 
            inputType='password' 
            labeltxt='Password' 
            placeholder='Enter your Password' 
            labelClass='before-active'
            name="password" 
            id="password" 
            placeholder="Enter your Password"
            onChange={handleChange}
            value={formValues.password}
            className={formErrors.password && 'input-error'}
            style={formErrors.password ? { borderColor: "red" } : {}}
            /><br/>
            {formErrors.password && (
                <span className="error" style={{ color:"red"}}>{formErrors.password}</span>
            )}
        </div>
        <div className="sign-into-input-confirm-password">
            <CreateInput 
            inputType='password' 
            labeltxt='Confirm Password' 
            placeholder='Confirm your password' 
            labelClass='before-active' 
            name="confirmPassword" 
            id="confirmPassword"
            onChange={handleChange}
            value={formValues.confirmPassword}
            className={formErrors.confirmPassword && 'input-error'}
            style={formErrors.confirmPassword ? { borderColor: "red" } : {}}
            /><br/>
            {formErrors.confirmPassword && (
                <span className="error" style={{ color:"red"}}>{formErrors.confirmPassword}</span>
            )}
        </div>
    </div>
    
    <div className="sign-into-send-login-info">
        <button onClick = {handleSubmit} style={displayBlock} id="create-account-button">Register</button>
    </div>
   
    <div className="create-account-section-link">
        <p className="sign-up" style={displayBlock}>Already have an Account ? <span id="sign-up" style={styleFont} onClick={() => goToSingIn('in')}>Sign in</span></p>
    </div>
    </>
   )
}
export default SingUp;