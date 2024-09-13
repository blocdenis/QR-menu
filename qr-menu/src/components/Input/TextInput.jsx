import CreateInput from './CreateInput';
function TextInput({ onChange, placeHolder, labelName, valueName, name }) {
  const handleChange = e => {
    onChange(e);
  };

  return (
    <>
      <div className="sign-into-input-password">
        <label htmlFor={labelName}>{labelName}</label>

        <CreateInput
          value={valueName}
          type="text"
          placeholder={placeHolder}
          name={name}
          onChange={handleChange}
        />
        <br />
      </div>
    </>
  );
}
export default TextInput;
