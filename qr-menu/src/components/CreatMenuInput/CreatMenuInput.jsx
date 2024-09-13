import './CreatMenuInput.scss';
import ImgUploader from '../ImgUploader/ImgUploader.jsx';
import InputPrice from '../InputPrice/InputPrice.jsx';
import InputWeight from '../InputWeight/InputWeight.jsx';
import InputCategor from '../InputCategory/InputCategor.jsx';
import InputMenu from '../InputMenu/InputMenu.jsx';
import BtnCreatMenu from '../../components/BtnCreatMenu/BtnCreatMenu.jsx';
import { useState, useEffect } from 'react';
import TextAddIngred from '../../components/TextAddIngred/TextAddIngred';
import BtnAddIngred from '../BtnAddIngred/BtnAddIngred.jsx';
import axios from 'axios';
import { CATEGORY_GET } from '../../Fetch/settings.js';
import { DISH_ADD } from '../../Fetch/settings.js';

// eslint-disable-next-line react/prop-types
function CreatMenuInput({
  onSubmit,
  rows,
  setRows,
  closeCreatMenu,
  editRowData,
}) {
  const [form, setForm] = useState(
    editRowData || {
      menuName: '',
      category_id: '', 
      img: '',
      price: '',
      currency: '',
      ingred: '',
      weight: '',
      comment: '', 
    }
  );
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState('');


  const fetchCategories = async () => {
    try {
      const response = await axios.get(CATEGORY_GET, {
        withCredentials: true,
      });
      setCategories(response.data.categories || []);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);


  const validForm = () => {
    let errorField = [];
    if (!form.menuName || !form.category_id) {
      errorField.push('Please include all required fields!');
    }
    const existingDish = rows.find(
      row =>
        row.menuName === form.menuName && row.category_id === form.category_id
    );
    if (existingDish) {
      errorField.push('This dish already exists!');
    }
    if (errorField.length > 0) {
      setError(errorField.join(', '));
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!validForm()) {
      return;
    }

    const newDish = {
      name: form.menuName,
      category_id: form.category_id,
      img: form.img,
      price: form.price,
      currency: form.currency,
      ingred: form.ingred,
      weight: form.weight,
      comment: form.comment,
    };

    try {
      await axios.post(DISH_ADD, newDish, {
        withCredentials: true,
      });
      setRows(rows => [...rows, newDish]);
      setForm({
        menuName: '',
        category_id: '',
        img: '',
        price: '',
        currency: '',
        ingred: '',
        weight: '',
        comment: '', 
      });
      closeCreatMenu();
      onSubmit(newDish);
    } catch (error) {
      console.error('Error adding dish:', error);
    }
  };

  // Handlers for form fields
  const handlePriceChange = priceData => {
    setForm({ ...form, price: priceData.price, currency: priceData.currency });
  };
  const handleImageChange = newImage => {
    const cleanedImage = newImage.replace(/^data:image\/[a-z]+;base64,/, '');
    setForm({ ...form, img: cleanedImage });
  };
  const addIngred = newIngredient => {
    if (newIngredient) {
      setForm({ ...form, ingred: newIngredient });
    }
    setForm({ ...form, ingred: '' });
  };

  const handleCategoryChange = e => {
    setForm({ ...form, category_id: e.target.value });
  };

  const handleCommentChange = e => {
    setForm({ ...form, comment: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-menugroup">
        <label htmlFor="menu" className="input-subtitle">
          Name of the menu
        </label>
        <InputMenu
          id={`menuName-${form.id}`}
          type="text"
          value={form.menuName}
          onChange={e => setForm({ ...form, menuName: e.target.value })}
        />
      </div>
      <div className="input-categorygroup">
        <label htmlFor="category" className="input-subtitle">
          Category
        </label>
        {categories?.length > 0 && (
          <InputCategor
            id={`categories-${form.id}`}
            type="text"
            value={form.category_id} 
            onChange={handleCategoryChange}
            options={categories.map(row => ({
              value: row.id, 
              label: row.category, 

            }))}
          />
        )}
      </div>
      <div className="input-imagegroup">
        <label htmlFor="imgload" className="input-subtitle">
          Image of the dish
        </label>
        <div className="input-uploader">
          <ImgUploader
            id={`img-${form.id}`}
            type="url"
            value={form.img}
            onChange={handleImageChange}
          />
        </div>
      </div>
      <div className="input-pricegroup">
        <label htmlFor="price" className="input-subtitle">
          Price
        </label>
        <InputPrice
          className="input-ingred style-input"
          id={`price-${form.id}`}
          type="text"
          value={{ price: form.price, currency: form.currency }}
          onChange={handlePriceChange}
        />
      </div>
      <div className="input-ingredgroup">
        <label htmlFor="ingredients" className="input-subtitle">
          Ingredients
        </label>
        <TextAddIngred
          className="input-ingred style-input"
          type="text"
          id={`ingred-${form.id}`}
          value={form.ingred}
          onChange={e => setForm({ ...form, ingred: e.target.value })}
        />
        <BtnAddIngred
          addIngred={addIngred}
          ingredForm={form.ingred}
          type="button"
        />
      </div>
      <div className="input-weightgroup">
        <h3 className="input-subtitle">Weight</h3>
        <InputWeight
          id={`weight-${form.id}`}
          type="text"
          value={form.weight}
          onChange={e => setForm({ ...form, weight: e.target.value })}
        />
      </div>
      <div className="input-commentgroup">
        <label htmlFor="comment" className="input-subtitle">
          Leave a comment
        </label>
        <textarea
          className="style-input style-comments"
          name="comment"
          rows="2"
          cols="2"
          placeholder="ex “no ketchup”, “extra salt”"
          value={form.comment} 
          onChange={handleCommentChange} 
        />
      </div>

      {error && (
        <div className="error">
          <u>{error}</u>
        </div>
      )}
      <div className="btn-creatmenu-contein">
        <BtnCreatMenu type="submit" />
      </div>
    </form>
  );
}

export default CreatMenuInput;
