import styles from './Categories.module.scss';
import { useState } from 'react';
import InputCategor from '../../components/InputCategory/InputCategor';
import { AppLayout } from '../../layouts/AppLayout/AppLayout.jsx';
import Button from '../../components/Button/Button.jsx';
import TableCategor from '../../components/TableCategor/TableCategor.jsx';
function Categories() {
  // const [categor, setCategor] = useState([
  //   { value: 'meat', label: 'Meat' },
  //   { value: 'fish', label: 'Fish' },
  //   { value: 'salad', label: 'Salad' },
  // ]);

  const [rowsCategor, setRowsCategor] = useState([]);
  const [modalOpenCategor, setModalOpenCategor] = useState(false);

  const openCreatCategor = () => {
    setModalOpenCategor(true);
    };
    
  const handleNewCategorySubmit = newCategory => {
    setRowsCategor([...rowsCategor, newCategory]);
    console.log('Get NewCategor');
  }; // const closeCreatCategor = () => {
  //   setNewCategor(false);
  //   setShowCategor(true);
  // };
  // const handleChange = e => {
  //   const selectedValue = e.target.value;
  //   setSelectedCategory(selectedValue);
  // };

  // const handleAddCategory = newCategory => {
  //   setCategories([...categories, newCategory]);
  // };
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
              <div key={item.id} className={`${styles.block_categ} ${styles[`div-color-btn-${item.color}`]}`}>
                <span >
                  {categorText}
                </span>
              </div>
            );
          })}
        </div>
        {modalOpenCategor && (
          <TableCategor
            rowsCategor={rowsCategor}
            setRowsCategor={setRowsCategor}
            setModalOpenCategor={setModalOpenCategor}
            onNewCategorySubmit={handleNewCategorySubmit}
          />
        )}
      </div>
    </AppLayout>
  );
}

export default Categories;
