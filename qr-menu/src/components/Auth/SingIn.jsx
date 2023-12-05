import CreateInput from "../CreateInput"
import {useState,useEffect} from "react"

//VALIDATION
const validate = (values) => {
    const errors = {};
  
    if (!values.namerestaurant) {  
      errors.namerestaurant = "Name is Required!"; 
    }  
    if (!values.password) {
      errors.password = "Password is Required!";
    } else if(values.password.length < 6){ 
      errors.password = "Password must be more than 6 sumbols!" 
     } 
     if(!values.rememberMe){
        errors.rememberMe = "It's imposible!"
     }
    return errors;
  };  
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
    //VRIFICATION OF FORM
    const [formValues, setFormValues] = useState(
        {   
            namerestaurant: '',
            password: '',
            rememberMe: ''
      });  
      const [formErrors, setFormErrors] = useState({});  
      const [isSubmiting, setIsSubmiting] = useState(false);                 
    //MONITORING CHANGE
    const handleChange = (e) => {   
        const { name, value } = e.target;      
        setFormValues({ ...formValues, [name]:value });          
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
            namerestaurant: "",    
            password: "", 
            rememberMe: '',
          });    
          setFormErrors({});  
          console.log('its success', formValues)
          setIsSubmiting(true) 
          setTimeout(() => { 
            setIsSubmiting(false); 
          }, 2000)                  
        } 
        }              
  //SENDING DATA 
  const submitForm = (formValues) => {     
    console.log(formValues);   
  };     
   function goToSingUp(value){
    checkUser(value)
   }
   return (
    <>
        <div className="sign-into-inputs">
            <div className="sign-into-input-namerestaurant">
                <CreateInput 
                focus={true} 
                type='namerestaurant' 
                labeltxt="Name restaurant" 
                placeholder="Enter your name restaurant" 
                labelClass="" 
                /><br/>
                {formErrors.namerestaurant && (
                    <span className="error" style={{ color:"red"}}>{formErrors.namerestaurant}</span>
                )}
            </div>
            <div className="sign-into-input-password">
                <CreateInput 
                type='password' 
                labeltxt="Password" 
                placeholder="Enter your Password" 
                labelClass="" 
                /><br/>
                {formErrors.password && (
                    <span className="error" style={{ color:"red"}}>{formErrors.password}</span>
                )}
            </div>
        </div>
        
        <div className="sign-into-remember-me-section" style={displayFlex}>
            <div style={remember}>
                <input 
                name="rememberMe" 
                type="checkbox" 
                id="remember-me" 
                /><br/>
                <label style={{margin: '0 0 0 0.2rem', cursor: 'pointer'}} htmlFor="remember-me">Remember me</label>
            </div>
            <div>
                <span id="sign-into-forgot-password" onClick={()=> goToSingUp('reset')}>Forgot Password?</span>
            </div>
        </div>
        
        <div className="sign-into-send-login-info">
            <button onClick = {handleSubmit} type="submit" id="sign-into-button" style={displayBlock}>Login</button>
        </div>
        
        <div className="create-account-section-link">
            <p className="sign-in" style={displayBlock}>Don'y have an Account ? <span id="sign-in" style={styleFont} onClick={()=> goToSingUp('up')}>Sign up</span></p>
        </div>              
    </>
   )
}
export default SingIn;