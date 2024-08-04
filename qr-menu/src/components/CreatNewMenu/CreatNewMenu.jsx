import CreatMenuInput from '../CreatMenuInput/CreatMenuInput.jsx';
import './CreatNewMenu.scss';

// eslint-disable-next-line react/prop-types
function CreatNewMenu({onSubmit, rows, setRows, closeCreatMenu}){
 
  return (
    <div className="container-wrap">
      <div className="container-page">
        <h1 className="page-titlemenu">Create a new menu</h1>
        <CreatMenuInput
          onSubmit={onSubmit} 
          rows={rows}
          setRows={setRows}
          closeCreatMenu={closeCreatMenu}
        />
      </div>
    </div>
  );
}

export default CreatNewMenu;
