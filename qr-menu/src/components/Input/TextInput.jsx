
import CreateInput from "./CreateInput";
function TextInput({onChange, handleCheckInput, formErrors, placeHolder, labelName}){
    const handleChange = (e) => {  
        onChange(e) ; 
    }; 
 const  handleLoseFocus = (e) => {
    handleCheckInput(e)
 }
    return(
        <>
        <div className="sign-into-input-password">
<label htmlFor={labelName}>{labelName}</label>

<CreateInput 
type='text' 
placeholder={placeHolder} 
name={labelName}
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
export default TextInput;
