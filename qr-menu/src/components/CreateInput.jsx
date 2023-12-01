function CreateInput({inputType, labeltxt, placeholder, labelClass, focus = false}) {
    return (
        <>
            <label htmlFor={inputType} className={labelClass}>{labeltxt}</label>

            {focus ? <input autoFocus type={inputType} placeholder={placeholder} name={inputType} id={inputType} /> :
            <input type={inputType} placeholder={placeholder} name={inputType} id={inputType} />
        }
        </>
    )
}

export default CreateInput;