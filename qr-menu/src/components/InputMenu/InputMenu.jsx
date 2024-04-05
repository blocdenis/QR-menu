import './InputMenu.scss';

// eslint-disable-next-line react/prop-types
function InputMenu({ value, onChange, id, menuName }) {
  return (
    <div className='menu-contain'>
      <input
        id={id}
        className="input-menu style-input"
        type="text"
        value={menuName}
        onChange={onChange}
        placeholder="ex “Fresh pasta with seefood”"
      />
    </div>
  );
}

export default InputMenu;
