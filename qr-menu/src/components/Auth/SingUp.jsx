import CreateInput from "../Input/CreateInput"
import {useState, useRef} from "react"
import { useNavigate } from "react-router-dom";
import { Toast } from 'primereact/toast';

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
  if (!values.restourant) {
    errors.restourant = "Name is Required!";
  } else if(!regexName.test(values.restourant)){
    errors.restourant = "Name is Entered Incorrectly!"
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
  const toast = useRef(null);

  const showSuccess = () => {
    toast.current.show({severity:'success', summary: 'Success', detail:' Registration was successful !', life: 3000});
  }
  const navigate = useNavigate();
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
            restourant: '',   
            password: '',    
            confirmPassword: '',         
        });  
        const [formErrors, setFormErrors] = useState({}); 
        
        
        //MONITORING CHANGE
        const handleChange = (e) => {    
            setFormValues({ ...formValues, [e.target.name]: e.target.value }); 
        };  
        //CKECKING THE FORM AND SENDING     
        const handleSubmit = (e) => {      
            e.preventDefault();
            // useTransition();
            const error = validate(formValues);       
            setFormErrors(error);
            if(Object.keys(error).length === 0){ 
             
              submitForm(formValues)
              setFormValues({  
                  email: "",    
                  restourant: "",    
                  password: "", 
                  confirmPassword: '',  
                });   
              setFormErrors({});        
            } else{ 
              return 'something not match'           
            }
            showSuccess(); 
            setTimeout(() => {
              navigate('/home');
            }, 1000);
           
          }             
        //SENDING DATA 
        const submitForm = (formValues) => {
          console.log(formValues);  
        };   
       
        


   function goToSingIn(value){
    checkUser(value)
   }
   return (
    <>
    <Toast ref={toast} />
    <div className="sign-into-inputs">
        <div className="sign-into-input-email" >
        <label htmlFor='email' className='before-active'>Email</label>
        <CreateInput 
            autoFocus={true} 
            type='email' 
            placeholder='Enter your email' 
            onChange={handleChange}
            name="email"
            className={formErrors.email}
            style={formErrors.email ? { borderColor: "red" } : {}} 
            /><br/>
            {formErrors.email && (
                <span className="error" style={{ color:"red"}}>{formErrors.email}</span>
            )}
        </div>
        <div className="sign-into-input-restourant">
        <label htmlFor='restourant' className='before-active'>Restourant name</label>
        <CreateInput 
            type='text'  
            placeholder='Enter your restourant name' 
            name="restourant"
            onChange={handleChange}
            className={formErrors.restourant}
            style={formErrors.restourant ? { borderColor: "red" } : {}}
            /><br/>
            {formErrors.restourant && (
                <span className="error" style={{ color:"red"}}>{formErrors.restourant}</span>
            )}
        </div>
        <div className="sign-into-input-password">
        <label htmlFor='password' className='before-active'>Password</label>

        <CreateInput 
            type='password' 
            placeholder='Enter your Password' 
            name="password" 
            onChange={handleChange}
            className={formErrors.password}
            style={formErrors.password ? { borderColor: "red" } : {}}
            /><br/>
            {formErrors.password && (
                <span className="error" style={{ color:"red"}}>{formErrors.password}</span>
            )}
        </div>
        <div className="sign-into-input-confirm-password">
        <label htmlFor='confirmPassword' className='before-active'>Confirm Password</label>

        <CreateInput 
            type='password' 
            placeholder='Confirm your password' 
            name="confirmPassword" 
            onChange={handleChange}
            className={formErrors.confirmPassword}
            style={formErrors.confirmPassword ? { borderColor: "red" } : {}}
            /><br/>
            {formErrors.confirmPassword && (
                <span className="error" style={{ color:"red"}}>{formErrors.confirmPassword}</span>
            )}
        </div>
    </div>
    
    <div className="sign-into-send-login-info">
        <button 
        onClick = {handleSubmit}
        type='submit' 
        style={displayBlock} 
        id="create-account-button"
        >Register
        </button>
    </div>
   
    <div className="create-account-section-link">
        <p className="sign-up" style={displayBlock}>Already have an Account ? <span id="sign-up" style={styleFont} onClick={() => goToSingIn('in')}>Sign in</span></p>
    </div>

    
    </>
   )
}
export default SingUp;