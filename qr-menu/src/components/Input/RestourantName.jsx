
import CreateInput from "./CreateInput";
function RestourantName({onChange, handleCheckInput, formErrors}){
  
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
<label htmlFor="restourant">Restourant Name</label>

<CreateInput 
type='text' 
placeholder="Enter your restourant name" 
name="restourant"
onChange={handleChange}
className={formErrors.restourant}
style={formErrors.restourant ? { borderColor: "red" } : {}}
/>
<br/>
{formErrors.restourant && (
    <span className="error" style={{ color:"red"}}>{formErrors.restourant}</span> 
)}
</div>
        </>
    )
}
export default RestourantName;
