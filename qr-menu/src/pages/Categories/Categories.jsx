import './Categories.module.scss';
import { useState } from 'react';
import InputCategor from '../../components/InputCategory/InputCategor';

function Categories() {
  const [selectedCategory, setSelectedCategory] = useState('meat');

  const [categories, setCategories] = useState([
    { value: 'meat', label: 'Meat' },
    { value: 'fish', label: 'Fish' },
    { value: 'salad', label: 'Salad' },
  ]);

  const handleChange = e => {
    const selectedValue = e.target.value;
    setSelectedCategory(selectedValue);
    setSelectedCategory(selectedCategory);
  };

  const handleAddCategory = newCategory => {
    setCategories([...categories, newCategory]);
  };
  return (
    <div>
      <h1>Categor</h1>
      <InputCategor
        type="text"
        onChange={handleChange}
        value={selectedCategory}
        categories={categories}
      />
      <input type="text" value={selectedCategory} onChange={handleChange} />
      <button onClick={handleAddCategory}>Add Category</button>
    </div>
  );
}

export default Categories;
