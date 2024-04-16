import './EditComponent.scss';
import CreatMenuInput from '../CreatMenuInput/CreatMenuInput.jsx';
// import { AppLayout } from '../../layouts/AppLayout/AppLayout.jsx';
import {useEffect} from 'react';
function EditComponent({
  onSubmit,
  rows,
  setRows,
  editRowData,
  closeCreatMenu,
}) {
  useEffect(() => {
    console.log('editRowData in EditComponent:', editRowData);
  }, [editRowData]);
  return (
    <div>
      <h1 className="title-edit">Edit</h1>
     
      <CreatMenuInput
        onSubmit={onSubmit}
        rows={rows}
        setRows={setRows}
        closeCreatMenu={closeCreatMenu}
        editRowData={editRowData}
      />
      
    </div>
  );
}
export default EditComponent;
