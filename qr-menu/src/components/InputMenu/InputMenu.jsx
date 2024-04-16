import './InputMenu.scss';

// eslint-disable-next-line react/prop-types
function InputMenu({onChange, id, value }) {
  return (
    <div className='menu-contain'>
      <input
        id={id}
        className="input-menu style-input"
        type="text"
        name='menuName'
        value={value}
        onChange={onChange}
        placeholder="ex “Fresh pasta with seefood”"
      />
    </div>
  );
}

export default InputMenu;
