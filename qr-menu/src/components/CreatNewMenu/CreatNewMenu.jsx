import CreatMenuInput from '../CreatMenuInput/CreatMenuInput.jsx';
import './CreatNewMenu.scss';

function CreatNewMenu({ rows, setRows, closeCreatMenu }) {
  return (
    <div className="container-wrap">
      <div className="container-page">
        <h1 className="page-titlemenu">Create a new menu</h1>
        <CreatMenuInput
          rows={rows}
          setRows={setRows}
          closeCreatMenu={closeCreatMenu}
        />
      </div>
    </div>
  );
}

export default CreatNewMenu;
