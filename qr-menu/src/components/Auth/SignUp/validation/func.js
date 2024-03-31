import {regexEmail, regexName} from "../../../../regex/regex"
 

const validate = (values) => {
    const errors = {};
    console.log('values.email')
    if (!values.email) {
      errors.email = "Email is Required!";
    } else if(!regexEmail.test(values.email)){
     
      errors.email = "Email is Entered Incorrectly!";
    }
    if (!values.restourant ) {
      errors.restourant = "Field is Required!";
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

export default validate;