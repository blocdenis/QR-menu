import Button from '../../components/Button/Button.jsx';
import styles from './Menu.module.scss';
import { AppLayout } from '../../layouts/AppLayout/AppLayout.jsx';
import TableMenu from '../../components/TableMenu/TableMenu.jsx';
import CreatNewMenu from '../../components/CreatNewMenu/CreatNewMenu.jsx';
import { useState } from 'react';

const Menu = () => {
  const [newMenu, setNewMenu] = useState(false);
  const [showTable, setShowTable] = useState(true);
  const [rows, setRows] = useState([]);

  const openCreatMenu = () => {
    setNewMenu(true);
    setShowTable(false);
  };
  const closeCreatMenu = () => {
    setNewMenu(false);
    setShowTable(true);
  };
  console.log(rows);
  const handleSubmitRow = newRow => {
    setRows([...rows, newRow]);
    localStorage.setItem('rows', JSON.stringify(newRow));
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
              // onSubmit={handleSubmitRow}
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
      </div>
    </AppLayout>
  );
};

export default Menu;
