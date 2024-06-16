
import CreateInput from "./CreateInput";
function TextInput({onChange, placeHolder, labelName, valueName}){
    const handleChange = (e) => {  
        onChange(e) ; 
    }; 

    return(
        <>
        <div className="sign-into-input-password">
<label htmlFor={labelName}>{labelName}</label>

<CreateInput 
value={valueName}
type='text' 
placeholder={placeHolder} 
name={labelName}
onChange={handleChange}

/>
<br/>

</div>
        </>
    )
}
export default TextInput;
