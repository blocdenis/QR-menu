import React, { useState, useEffect, useRef } from 'react';
import Button from '../../components/Button/Button.jsx';
import styles from './Menu.module.scss';
import { AppLayout } from '../../layouts/AppLayout/AppLayout.jsx';
import TableMenu from '../../components/TableMenu/TableMenu.jsx';
import CreatNewMenu from '../../components/CreatNewMenu/CreatNewMenu.jsx';
import EditComponent from '../../components/EditComponent/EditComponent.jsx';
import saveSuccess from '../../components/ShowSaveSucces/saveSuccess';
import { CATEGORY_GET, DISH_GET } from '../../Fetch/settings.js';
import axios from 'axios';

const Menu = () => {
  const [newMenu, setNewMenu] = useState(false);
  const [showTable, setShowTable] = useState(true);
  const [rows, setRows] = useState([]);
  const [rowsCategor, setRowsCategor] = useState([]);
  const [editRowData, setEditRowData] = useState(null);
  const [editRowModal, setEditRowModal] = useState(false);
  const toast = useRef(null);

  const fetchCategoriesAndDishes = async () => {
    try {
      const response = await axios.get(CATEGORY_GET, { withCredentials: true });
      const categories = response.data.categories || [];
      setRowsCategor(categories);

      let allDishes = [];
      for (const category of categories) {
        const dishesResponse = await axios.get(DISH_GET(category.id), {
          withCredentials: true,
        });
        allDishes = [...allDishes, ...dishesResponse.data.map(dish => ({
          ...dish,
          categoryName: category.category 
        }))];
      }
      setRows(allDishes);
    } catch (error) {
      console.error('Ошибка при получении категорий или блюд:', error);
    }
  };

  useEffect(() => {
    fetchCategoriesAndDishes();
  }, []);

  const openCreatMenu = () => {
    setNewMenu(true);
    setShowTable(false);
  };

  const closeCreatMenu = () => {
    setNewMenu(false);
    setShowTable(true);
    if (editRowData) {
      closeEditModal();
    }
  };

  const handleSubmitRow = newRow => {
    if (editRowData === null) {
      setRows([...rows, newRow]);
    } else {
      setRows(
        rows.map(currRow => (currRow.id === editRowData.id ? newRow : currRow))
      );
      setEditRowData(null);
    }
    saveSuccess(toast);
  };

  const upDate = id => {
    const editRow = rows.find(row => row.id === id);
    setEditRowModal(true);
    setShowTable(false);
    setEditRowData(editRow);
  };

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
                  Create a new menu
                </Button>
              </div>
              <span>All categories({rows.length}) </span>
            </div>
            <TableMenu rows={rows} setRows={setRows} handleEdit={upDate} />
          </div>
        )}
        {newMenu && !showTable && (
          <CreatNewMenu
            onSubmit={handleSubmitRow}
            rows={rows}
            setRows={setRows}
            closeCreatMenu={closeCreatMenu}
            rowsCategor={rowsCategor}
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