import { useRef, useState } from "react";
import CreateInput from "./CreateInput";
function PasswordInput(){
    const [formErrors, setFormErrors] = useState({});
    const [formValues, setFormValues] = useState(
        {   
            email: '',
            password: '',
            rememberMe: ''
      });  
    const handleChange = (e) => {   
        const { name, value } = e.target;      
        setFormValues({ ...formValues, [name]:value });    
        console.log(formValues)      
    }; 
    return(
        <>
        <div className="sign-into-input-password">
<label htmlFor="password">Password</label>

<CreateInput 
type='password' 
placeholder="Enter your Password" 
name="password"
onChange={handleChange}
className={formErrors.password}
style={formErrors.password ? { borderColor: "red" } : {}}
/>
<br/>
{formErrors.password && (
    <span className="error" style={{ color:"red"}}>{formErrors.password}</span>
)}
</div>
        </>
    )
}
export default PasswordInput;
