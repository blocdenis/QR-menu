export const validate = (values) => {
    const errors = {};
  
    if (!values.email) {  
      errors.email = "Name is Required!"; 
    }  
    if (!values.password) {
      errors.password = "Password is Required!";
    } else if(values.password.length < 6){ 
      errors.password = "Password must be more than 6 sumbols!" 
     } 
     
    return errors;
}; 