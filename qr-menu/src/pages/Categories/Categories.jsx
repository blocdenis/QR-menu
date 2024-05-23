import styles from './Categories.module.scss';
import { useState } from 'react';
import InputCategor from '../../components/InputCategory/InputCategor';
import { AppLayout } from '../../layouts/AppLayout/AppLayout.jsx';
import Button from '../../components/Button/Button.jsx';
import TableCategor from '../../components/TableCategor/TableCategor.jsx';
function Categories() {
  const [selectedCategory, setSelectedCategory] = useState('meat');
  const [categories, setCategories] = useState([
    { value: 'meat', label: 'Meat' },
    { value: 'fish', label: 'Fish' },
    { value: 'salad', label: 'Salad' },
  ]);

  const [newCategor, setNewCategor] = useState(false);
  const [showCategor, setShowCategor] = useState(true);
  const [rowsCategor, setRowsCategor] = useState([]);

  const openCreatCategor = () => {
    setNewCategor(true);
    setShowCategor(false);
  };

  const closeCreatCategor = () => {
    setNewCategor(false);
    setShowCategor(true);
  };
  const handleChange = e => {
    const selectedValue = e.target.value;
    setSelectedCategory(selectedValue);
  };

  const handleAddCategory = newCategory => {
    setCategories([...categories, newCategory]);
  };
  return (
    <AppLayout>
      <div className={styles.container_wrap}>
        <div className={styles.container_page}>
          <h1 className={styles.page_title}>Categor</h1>
          <div>
            <Button leftIcon={true} size="medium" onClick={openCreatCategor}>
              Creat a new category{''}
            </Button>
          </div>

          <span>All categories({rowsCategor.length}) </span>
        </div>
        <div className={styles.list_categ}>
          <span className={styles.block_categ}>
            <p>Burger</p>
          </span>
          <span className={styles.block_categ}>
            <p>Cola</p>
          </span>
        </div>

        <TableCategor/>

        {/* <InputCategor
          type="text"
          onChange={handleChange}
          value={selectedCategory}
          categories={categories}
        />
        <input type="text" value={selectedCategory} onChange={handleChange} />
        <button onClick={handleAddCategory}>Add Category</button> */}
      </div>
    </AppLayout>
  );
}

export default Categories;
