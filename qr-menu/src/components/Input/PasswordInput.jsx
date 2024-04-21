import { useRef, useState } from "react";
import CreateInput from "./CreateInput";
function PasswordInput({onChange, handleCheckInput, formErrors}){
  
    const handleChange = (e) => {  
        onChange(e) ;
        // const { name, value } = e.target;      
        // setFormValues({ ...formValues, [name]:value });    
        // console.log(formValues)      
    }; 
 const  handleLoseFocus = (e) => {
    handleCheckInput(e)
 }
    return(
        <>
        <div className="sign-into-input-password">
<label htmlFor="password">Password</label>

<CreateInput 
type='password' 
placeholder="Enter your Password" 
onBlur={handleLoseFocus}
name="password"
onChange={handleChange}

/>
<br/>

</div>
        </>
    )
}
export default PasswordInput;
