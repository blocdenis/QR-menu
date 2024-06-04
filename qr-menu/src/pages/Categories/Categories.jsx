import styles from './Categories.module.scss';
import { useState, useEffect } from 'react';
import ModalDelCategor from '../../components/ModalDelCategor/ModalDelCategor.jsx';
import { AppLayout } from '../../layouts/AppLayout/AppLayout.jsx';
import Button from '../../components/Button/Button.jsx';
import TableCategor from '../../components/TableCategor/TableCategor.jsx';
import CreatMenuInput from '../../components/CreatMenuInput/CreatMenuInput.jsx';

function Categories() {
  const [modalOpenDelCategor, setModalOpenDelCategor] = useState(false);
  const [rowsCategor, setRowsCategor] = useState([]);
  const [modalOpenCategor, setModalOpenCategor] = useState(false);
  const [isAnyModalOpen, setIsAnyModalOpen] = useState(false);

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
  return (
    <AppLayout>
      <div className={styles.container_wrap}>
        <div className={styles.container_page}>
          <h1 className={styles.page_title}>Categories</h1>
          <div>
            <Button leftIcon={true} size="medium" onClick={openCreatCategor}>
              Creat a new category{''}
            </Button>
          </div>

          <span>All categories({rowsCategor.length}) </span>
        </div>

        <div className={styles.list_categ}>
          {rowsCategor.map(item => {
            const categorText = item.categor
              ? item.categor.charAt(0).toUpperCase() + item.categor.slice(1)
              : '';

            return (
              <div key={item.id}>
                <div
                  onClick={() => openModalDelCateg(item.id)}
                  className={`${styles.field_category} ${
                    styles[`div-color-btn-${item.color}`]
                  }`}
                >
                  <span>{categorText}</span>
                </div>
                {modalOpenDelCategor[item.id] && (
                  <ModalDelCategor
                    key={item.id}
                    closeModalCategor={() => closeModalCategor(item.id)}
                    id={item.id}
                    handleDelete={() => handleDelateCategor(item.id)}
                    categor={item.categor}
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
            />
          )}
        </div>
        <div style={{display:'none'}}>
        <CreatMenuInput
          rowsCategor={rowsCategor}
          
        />
        </div>
        
      </div>
    </AppLayout>
  );
}

export default Categories;
