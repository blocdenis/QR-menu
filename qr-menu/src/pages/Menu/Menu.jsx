import Button from '../../components/Button/Button.jsx';
import styles from './Menu.module.scss';
import { AppLayout } from '../../layouts/AppLayout/AppLayout.jsx';
import TableMenu from '../../components/TableMenu/TableMenu.jsx';
import CreatNewMenu from '../../components/CreatNewMenu/CreatNewMenu.jsx';
import { useState} from 'react';
import EditComponent from '../../components/EditComponent/EditComponent.jsx';

const Menu = () => {
  const [newMenu, setNewMenu] = useState(false);
  const [showTable, setShowTable] = useState(true);
  const [rows, setRows] = useState([]);
  const [editRowData, setEditRowData] = useState(null);
  const [editRowModal, setEditRowModal] = useState(false);

  const openCreatMenu = () => {
    setNewMenu(true);
    setShowTable(false);
  };

  const closeCreatMenu = () => {
    setNewMenu(false);
    setShowTable(true);
    if(editRowData){
      closeEditModal();
    }
  };

  const handleSubmitRow = newRow => {
    editRowData === null
      ? setRows([...rows, newRow])
      : setRows(
          rows.map((currRow, id) => {
            if (id !== editRowData) return currRow;
            return newRow;
          })
        );
    console.log(newRow);
    // localStorage.setItem('rows', JSON.stringify(newRow));
  };

  const upDate = id => {
    const editRow = rows.find(row => row.id === id);
    setRows(
      rows.map((currRow) => (currRow.id === id ? editRow : currRow))
    );
    setEditRowModal(true);
    setShowTable(false);
    setEditRowData(editRow);
  };
  console.log(rows,'rows');
  const closeEditModal = () => {
    setEditRowModal(false);
    setEditRowData(null);
    setShowTable(true);
  };
  return (
    <AppLayout>
      <div className={styles.container_wrap}>
        {showTable && (
          <div>
            <div className={styles.container_page}>
              <h1 className={styles.page_title}>Menu</h1>
              <div>
                <Button leftIcon={true} size="medium" onClick={openCreatMenu}>
                  Creat a new menu{''}
                </Button>
              </div>

              <span>All categories({rows.length}) </span>
            </div>
            <TableMenu 
              rows={rows} 
              setRows={setRows} 
              handleEdit={upDate} 
            />
          </div>
        )}
        {newMenu && !showTable && (
          <CreatNewMenu
            onSubmit={handleSubmitRow}
            rows={rows}
            setRows={setRows}
            closeCreatMenu={closeCreatMenu}
          />
        )}
        {editRowModal && !showTable && (
          <EditComponent
            onSubmit={handleSubmitRow}
            rows={rows}
            setRows={setRows}
            closeCreatMenu={closeCreatMenu}
            editRowData={editRowData}
          />
        )}
      </div>
    </AppLayout>
  );
};

export default Menu;
