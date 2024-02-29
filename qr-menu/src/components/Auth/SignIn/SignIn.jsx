import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import validate from "./validation/func"
import { Toast } from 'primereact/toast';
import CreateInput from "../../Input/CreateInput";
import showSuccess from "../ShowSucces/func"

import { apiRequest, obj } from "../../../Fetch/signUp";
import { USER_LOGIN, COOKIE_KEY } from "../../../Fetch/settings";
import Cookies from "js-cookie";

import {displayBlock,
        displayFlex,
        remember,
        styleFont} from "../css/funcs"




function goToSingUp(checkUser, value){
    checkUser(value)
}

const SignIn = ({checkUser}) => {
    const navigate = useNavigate()
    const toast = useRef(null);
    
    const [formValues, setFormValues] = useState(
        {   
            email: '',
            password: '',
            rememberMe: ''
      });  
    
    const [formErrors, setFormErrors] = useState({});  
    const handleChange = (e) => {   
        const { name, value } = e.target;      
        setFormValues({ ...formValues, [name]:value });          
    }; 

    
    const handleSubmit = async (e) => {      
        e.preventDefault();
        
        const error = validate(formValues);    
        setFormErrors(error);

        if(Object.keys(error).length === 0){ 
            const login = await submitForm(formValues) 
            showSuccess(toast);
            if (login) {
               
                setFormValues({  
                    email: "",    
                    password: "", 
                    rememberMe: '',
                });    
    
                setFormErrors({}); 
             setTimeout(()=> navigate('/home'), 1000)   
            } else {
                throw new Error("Помилка під час входу");
            }
        }

    }


    const submitForm = async (formValues) => {     
        let status = false;

        const data = {
            email: formValues.email,
            password: formValues.password
        } 
    
        const remember = formValues.rememberMe === "on" 
    
        remember ? data.time = {type: "weeks", number: 2.0} : data.time = {}
    
        try {
            const request = await apiRequest(USER_LOGIN, obj("POST", data));
            console.log(request)
            
            Cookies.set(COOKIE_KEY, request.token, {expires: remember ? data.number * 7 : 1});
            if(!request) return status = false;
            status= true;
        } catch (error) {
            Cookies.remove(COOKIE_KEY);
            status = false;
        }

        return status;
    };




    return (
        <>
            <Toast ref={toast} />
                <div className="sign-into-inputs">
                    <div className="sign-into-input-email">
                        <label htmlFor="email">Email</label>
                        <CreateInput 
                        autoFocus={true} 
                        type='email'
                        name="email"
                        onChange={handleChange} 
                        className={formErrors.email}
                        style={formErrors.email ? { borderColor: "red" } : {}} 
                        placeholder="Enter your email" 
                        /><br/>
                        {formErrors.email && (
                            <span className="error" style={{ color:"red"}}>{formErrors.email}</span>
                        )}
                    </div>
                    <div className="sign-into-input-password">
                        <label htmlFor="password">Password</label>
        
                        <CreateInput 
                        type='password' 
                        placeholder="Enter your Password" 
                        name="password"
                        onChange={handleChange}
                        className={formErrors.password}
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
                        name="rememberMe" 
                        type="checkbox" 
                        id="remember-me" 
                        onChange={handleChange}
                        className={formErrors.rememberMe}
                        style={formErrors.rememberMe ? { borderColor: "red" } : {}}
                        /><br/>
                        <label style={{margin: '0 0 0 0.2rem', cursor: 'pointer'}} htmlFor="remember-me">Remember me</label>
                    </div>
                    <div>
                        <span id="sign-into-forgot-password" onClick={()=> goToSingUp(checkUser, 'reset')}>Forgot Password?</span>
                    </div>
                </div>
                
                <div className="sign-into-send-login-info">
                    <button 
                    onClick = {handleSubmit}
                    type="submit" 
                    id="sign-into-button" 
                    style={displayBlock}
                    >Login
                    </button>
                </div>
                
                <div className="create-account-section-link">
                    <p className="sign-in" style={displayBlock}>Don'y have an Account ? <span id="sign-in" style={styleFont} onClick={()=> goToSingUp(checkUser, 'up')}>Sign up</span></p>
                </div>              
        </>
    )
}

export default SignIn;