import CreateInput from "../CreateInput"
import {useState,useEffect} from "react"

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
   if(!values.confirmPassword){
    errors.confirmPassword = "Confirm Password is Required!"
   } else if(values.password !== values.confirmPassword){
    errors.confirmPassword = "Password do not match!"
   }
  return errors;
};

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
            confirmPassword: '',         
        });  
        const [formErrors, setFormErrors] = useState({}); 
        // const [isSubmiting, setIsSubmiting] = useState(false);           
        //MONITORING CHANGE
        const handleChange = (e) => {    
          // const { name, value } = e.target;      
            setFormValues({ ...formValues, [e.target.name]: e.target.value });          
        };  
        //CKECKING THE FORM AND SENDING     
        const handleSubmit = (e) => {      
            e.preventDefault();

            const error = validate(formValues);       
            setFormErrors(error);
            console.log(error)  

             if(Object.keys(error).length === 0){ 
              return
            }     else{ 
            submitForm(formValues)  
            setFormValues(formValues)
            console.log(formValues)     
            setFormValues({  
                email: "",    
                username: "",    
                password: "", 
                confirmPassword: '',  
              });    
              setFormErrors({});  
              console.log('its success', formValues)
              // setIsSubmiting(true) 
              // setTimeout(() => { 
                // setIsSubmiting(false); 
              // }, 2000)                 
            }
            }             
        //SENDING DATA 
        const submitForm = (formValues) => {   
          console.log(formValues);  
        };   
        // useEffect(() => {
//           if (Object.keys(error).length === 0) {
            // submitForm(formValues);
          // }
        // }, [formErrors]);   
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
            onChange={handleChange}
            value={formValues.email}
            className={formErrors.email}
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
            onChange={handleChange}
            value={formValues.username}
            className={formErrors.username}
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
            onChange={handleChange}
            value={formValues.password}
            className={formErrors.password}
            style={formErrors.password ? { borderColor: "red" } : {}}
            /><br/>
            {formErrors.password && (
                <span className="error" style={{ color:"red"}}>{formErrors.password}</span>
            )}
        </div>
        <div className="sign-into-input-confirm-password">
        <CreateInput 
            inputType='confirmPassword' 
            labeltxt='Confirm Password' 
            placeholder='Confirm your password' 
            labelClass='before-active' 
            name="confirmPassword" 
            onChange={handleChange}
            value={formValues.confirmPassword}
            className={formErrors.confirmPassword}
            style={formErrors.confirmPassword ? { borderColor: "red" } : {}}
            /><br/>
            {formErrors.confirmPassword && (
                <span className="error" style={{ color:"red"}}>{formErrors.confirmPassword}</span>
            )}
        </div>
    </div>
    
    <div className="sign-into-send-login-info">
        <button onClick = {handleSubmit} type='submit' style={displayBlock} id="create-account-button">Register</button>
    </div>
   
    <div className="create-account-section-link">
        <p className="sign-up" style={displayBlock}>Already have an Account ? <span id="sign-up" style={styleFont} onClick={() => goToSingIn('in')}>Sign in</span></p>
    </div>


    </>
   )
}
export default SingUp;