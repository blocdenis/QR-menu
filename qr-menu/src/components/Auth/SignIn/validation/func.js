import {regexEmail} from "../../../../regex/regex"

 const validate = (values) => {
    const errors = {};
    console.log('values.email')
    if (!values.email) {  
      errors.email = "Name is Required!"; 
    }else if(!regexEmail.test(values.email)){
      errors.email = "Email is Entered Incorrectly!";
    }  
    if (!values.password) {
      errors.password = "Password is Required!";
    } else if(values.password.length < 6){ 
      errors.password = "Password must be more than 6 sumbols!" 
     } 
     
    return errors;
}; 
export default validate;