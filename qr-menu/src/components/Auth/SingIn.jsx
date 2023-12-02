
import CreateInput from "../CreateInput"
import { useState, useEffect } from "react";

function SingIn({checkUser}){
    const displayBlock = {
        display: 'block'
    }
    const displayNone = {
        display: 'none'
    }
    const displayFlex = {
        display: 'flex'
    }
    const styleFont = {
        fontWeight: 'bold',
        color: '#15C5CE',
        cursor: 'pointer'
    }

    const remember = {
        display: 'flex',
        justifyContent: 'center',
        alingItems: 'center'
    }
  //VALIDATION
  const validate = (values) => {
    const errors = {};
    const regexName = /^[a-zA-Z.-]+$/;  
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
    if (!values.rememberMe) {
      errors.rememberMe = "Ckeckbox is Required!";
    }
    return errors;
  };  
  //VRIFICATION OF FORM
const [formValues, setFormValues] = useState(
  {
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

      submitForm(formValues);

    } else {
      console.log("Checkbox - false!");
      }
    //VALIDATE form fields
    const error = validate(formValues);
    setFormErrors(error);
    if(Object.keys(error).length > 0){

      return;

    }
    setFormValues({

      username: "",

      password: "",

      rememberMe: false,

    });
      setFormErrors({});
      setIsSubmiting(true) 
      submitForm(formValues);
    
    useEffect(() => {
      if(isSubmiting){
        setTimeout(() => {
          setIsSubmiting(true) 
        }, 2000);
      }
  }, [isSubmiting])
  
  //SENDING DATA
  const submitForm = (values) => {
    setIsSubmiting(true)
    console.log(formValues);
  };
  
   function goToSingUp(value){
    checkUser(value)
   }
   return (
    <>
        <div className="sign-into-inputs">
            <div className="sign-into-input-username">
                <CreateInput 
                focus={true} 
                type='username' 
                labeltxt="User name" 
                placeholder="Enter your name or email" 
                labelClass="" 
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
                type='password' 
                labeltxt="Password" 
                placeholder="Enter your Password" 
                labelClass="" 
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
        </div>
        
        <div className="sign-into-remember-me-section" style={displayFlex}>
            <div style={remember}>
                <input 
                name="remember-me" 
                type="checkbox" 
                id="remember-me" 
                value={formValues.rememberMe}
                onChange= {handleChange}
                className= {formErrors.rememberMe && 'input-error'}
                />
              {formErrors.rememberMe && (
                <span className="error" style={{ color:"red"}}>{formErrors.rememberMe}</span>
              )}
                <label style={{margin: '0 0 0 0.2rem', cursor: 'pointer'}} htmlFor="remember-me">Remember me</label>
            </div>
            <div>
                <span id="sign-into-forgot-password" onClick={()=> goToSingUp('reset')}>Forgot Password?</span>
            </div>
        </div>
        
        <div className="sign-into-send-login-info">
            <button  onClick = {handleSubmit} id="sign-into-button" style={displayBlock}>Login</button>
        </div>
        
        <div className="create-account-section-link">
            <p className="sign-in" style={displayBlock}>Don'y have an Account ? <span id="sign-in" style={styleFont} onClick={()=> goToSingUp('up')}>Sign up</span></p>
        </div>              
    </>
   )
}
export default SingIn;
