import './InputMenu.scss';

// eslint-disable-next-line react/prop-types
function InputMenu({value, onChange, id}) {
  return (
    <div>
      <input
         id={id}
        className="input-menu style-input"
        type="text"
        value={value}
        onChange={onChange}
        placeholder="ex “Fresh pasta with seefood”"
      />
    </div>
  );
}

export default InputMenu;
