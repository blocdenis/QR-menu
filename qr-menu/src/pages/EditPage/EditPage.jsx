import './EditPage.scss';
import CreatMenuInput from '../../components/CreatMenuInput/CreatMenuInput.jsx';
import { AppLayout } from '../../layouts/AppLayout/AppLayout.jsx';

function EditPage({  
  editRowData,
  closeModalEdit,
}) {
  return (
    <AppLayout>
      <div>
        <h1 className="title-edit">Edit</h1>
        <CreatMenuInput
          editRowData={editRowData}
          closeModalEdit={closeModalEdit}
        />
      </div>
    </AppLayout>
  );
}
export default EditPage;
