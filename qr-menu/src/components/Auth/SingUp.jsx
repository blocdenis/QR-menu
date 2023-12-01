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

function SingUp(){
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

   function goToSingUp(value){
    checkUser(value)
   }
   return (
    <>
    <div className="sign-into-inputs">
        <div className="sign-into-input-email" >
            <label htmlFor="email" className="before-active">Email</label>
            <input 
                type="email"
                placeholder="Enter your email"
                name="email"
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
            <label htmlFor="username" className="before-active">User name</label>
            <input 
                autoFocus="" 
                type="text" 
                placeholder="Enter your user name"
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
            <label htmlFor="password" className="before-active">Password</label>
            <input 
                type="password" 
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
        <label htmlFor="password" className="before-active">Confirm Password</label>
    <input 
        type="password" 
        placeholder="Confirm your password" 
        name="confirmPassword" 
        id="confirmPassword"
        onChange={handleChange}
        value={formValues.confirmPassword}
        className={formErrors.confirmPassword && 'input-error'}
        style={formErrors.confirmPassword ? { borderColor: "red" } : {}}
        />
        {formErrors.confirmPassword && (
            <span className="error" style={{ color:"red"}}>{formErrors.confirmPassword}</span>
        )}<br/>
    </div></div>
   
   
    <div classNameName="sign-into-remember-me-section" style={displayFlex}>
        <div>
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
            )}<br/>
            <label htmlFor="remember-me">Remember me</label>
        </div>
        <div>
            <span id="sign-into-forgot-password">Forgot Password?</span>
        </div>
    </div>
    
    <div className="sign-into-send-login-info">
        <button onClick = {handleSubmit} id="sign-into-button" style={displayBlock}>Login</button>
        <button style={displayNone} id="create-account-button">Register</button>
    </div>
   
    <div className="create-account-section-link">
        <p className="sign-in" style={displayBlock}>Don'y have an Account ? <span id="sign-in" style={styleFont} onClick={()=> goToSingUp(false)}>Sign up</span></p>
        <p className="sign-up" style={displayNone}>Already have an Account ? <span id="sign-up" style={styleFont}>Sign in</span></p>
    </div>


    </>
   )
}
export default SingUp;