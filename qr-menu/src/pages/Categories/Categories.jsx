import styles from './Categories.module.scss';
import { useState, useEffect } from 'react';
import ModalDelCategor from '../../components/ModalDelCategor/ModalDelCategor.jsx';
import { AppLayout } from '../../layouts/AppLayout/AppLayout.jsx';
import Button from '../../components/Button/Button.jsx';
import TableCategor from '../../components/TableCategor/TableCategor.jsx';
import CreatMenuInput from '../../components/CreatMenuInput/CreatMenuInput.jsx';
import { CATEGORY_GET } from '../../Fetch/settings.js';
import axios from 'axios';

function Categories() {
  const [modalOpenDelCategor, setModalOpenDelCategor] = useState({});
  const [rowsCategor, setRowsCategor] = useState([]);
  const [modalOpenCategor, setModalOpenCategor] = useState(false);
  const [isAnyModalOpen, setIsAnyModalOpen] = useState(false);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(CATEGORY_GET, {
        withCredentials: true, 
      });
      setRowsCategor(response.data.categories || []);
    } catch (error) {
      console.error('Ошибка при получении категорий:', error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const openCreatCategor = () => {
    setModalOpenCategor(true);
  };

  const handleNewCategorySubmit = newCategory => {
    setRowsCategor([...rowsCategor, newCategory]);
    console.log('Get NewCategor');
  };

  const openModalDelCateg = id => {
    setModalOpenDelCategor(prevState => ({
      ...prevState,
      [id]: true,
    }));
  };

  const closeModalCategor = id => {
    setModalOpenDelCategor(prevState => ({
      ...prevState,
      [id]: false,
    }));
  };

  const handleDelateCategor = id => {
    let delRow = rowsCategor.filter(item => item.id !== id);
    setRowsCategor(delRow);
    console.log(delRow);
    closeModalCategor(id);
  };

  useEffect(() => {
    const anyModalOpen = Object.values(modalOpenDelCategor).some(
      isOpen => isOpen
    );
    setIsAnyModalOpen(anyModalOpen);
  }, [modalOpenDelCategor]);
  
  const colorMap = {

    '229-245-236': 'color1', 
    '255-0-0': 'color2',     
    '255-234-179': 'color3',   
    '228-242-255': 'color4'   
  };

  return (
    <AppLayout>
      <div className={styles.container_wrap}>
        <div className={styles.container_page}>
          <h1 className={styles.page_title}>Categories</h1>
          <div>
            <Button leftIcon={true} size="medium" onClick={openCreatCategor}>
              Create a new category
            </Button>
          </div>

          <span>All categories({rowsCategor.length}) </span>
        </div>

        <div className={styles.list_categ}>
          {rowsCategor.map(item => {
            const categorText = item.category
              ? item.category.charAt(0).toUpperCase() + item.category.slice(1)
              : '';
            const colorKey = item.color.join('-');
            const colorClass = colorMap[colorKey] || 'default-color';

            return (
              <div key={item.id}>
                <div
                  onClick={() => openModalDelCateg(item.id)}
                  className={`${styles.field_category} ${styles[`div-color-btn-${colorClass}`]}`}
                >
                  <span>{categorText}</span>
                </div>
                {modalOpenDelCategor[item.id] && (
                  <ModalDelCategor
                    key={item.id}
                    closeModalCategor={() => closeModalCategor(item.id)}
                    id={item.id}
                    handleDelete={() => handleDelateCategor(item.id)}
                    categor={item.category}
                  />
                )}
              </div>
            );
          })}
        </div>
        <div className={isAnyModalOpen ? styles.move_down : ''}>
          {modalOpenCategor && (
            <TableCategor
              rowsCategor={rowsCategor}
              setRowsCategor={setRowsCategor}
              setModalOpenCategor={setModalOpenCategor}
              onNewCategorySubmit={handleNewCategorySubmit}
              newCategory={fetchCategories}
            />
          )}
        </div>
        <div style={{ display: 'none' }}>
          <CreatMenuInput
            rowsCategor={rowsCategor}
          />
        </div>
      </div>
    </AppLayout>
  );
}

export default Categories;