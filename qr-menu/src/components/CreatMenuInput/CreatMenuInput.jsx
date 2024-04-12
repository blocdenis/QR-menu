import './CreatMenuInput.scss';
import ImgUploader from '../ImgUploader/ImgUploader.jsx';
import InputPrice from '../InputPrice/InputPrice.jsx';
import InputWeight from '../InputWeight/InputWeight.jsx';
import BtnAddIngred from '../BtnAddIngred/BtnAddIngred.jsx';
import InputCategor from '../InputCategory/InputCategor.jsx';
import InputMenu from '../InputMenu/InputMenu.jsx';
import BtnCreatMenu from '../../components/BtnCreatMenu/BtnCreatMenu.jsx';
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
function CreatMenuInput({
  categories,
  editRowData,
  onSubmit,
  rows,
  setRows,
  closeCreatMenu,
  closeModalEdit,
}) {
  const [id, setId] = useState(0);
  const [form, setForm] = useState(
    editRowData || {
      id: '',
      menuName: '',
      categories: 'categor',
    }
  );
  const [categor, setCategor] = useState('');
  const [error, setError] = useState('');
  
  const validForm = () => {
    let errorField = [];
    if (!form.menuName.trim()) {
      errorField.push('Menu Name cannot be empty');
    }
    if (!form.categories.trim()) {
      errorField.push('Category cannot be empty');
    }
    const existingDish = rows.find(
      row =>
        row.menuName === form.menuName &&
        row.categories === form.categories &&
        row.id !== '' &&
        row.id !== form.id
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

  const handleSubmit = () => {
    if (!validForm()) {
      return;
    }
    const newRow = {
      id: Math.random(),
      menuName: form.menuName,
      categories: categor,
    };

    setRows(rows => [...rows, newRow]);
    //   if (editRowData === null) {
    //   setRows([...rows, newRow])

    // }else {
    // setRows(rows.map((currRow, id) => (id !== editRowData ? currRow : newRow)));
    //}
    setId(Math.random(id));
    setForm('');
    setCategor('');
    closeCreatMenu();
    console.log(newRow);
    onSubmit(newRow);
    // const updatedData = {
    //   ...editRowData,
    //   menuName: form,
    //   categories: categor,
    // };
    // handleSaveEdit(updatedData);
  };

  return (
    <>
      <div>
        <div className="input-menugroup">
          <label htmlFor="menu" className="input-subtitle">
            Name of the menu
          </label>
          <InputMenu
            id={`menu-${id}`}
            type="text"
            value={form.menuName}
            onChange={e => setForm({ ...form, menuName: e.target.value })}
            // value={menuName}
          />
        </div>
        <div className="input-categorygroup">
          <label htmlFor="category" className="input-subtitle">
            Category
          </label>
          <InputCategor
            id={`categor-${id}`}
            type="text"
            value={categor}
            onChange={e => setCategor(e.target.value)}
            // handleSaveEdit={handleSaveEdit}
          />
        </div>
        <div className="input-imagegroup">
          <label htmlFor="imgload" className="input-subtitle">
            Image of the dish
          </label>
          <div className="input-uploader">
            <ImgUploader
              id={`img-${id}`}
              type="url"
              value={form}
              onChange={e => setImg(e.target.value)}
            />
          </div>
        </div>
        <div className="input-pricegroup">
          <label htmlFor="price" className="input-subtitle">
            Price
          </label>
          <InputPrice />
        </div>
        <div className="input-ingredgroup">
          <label htmlFor="ingredients" className="input-subtitle">
            Ingredients
          </label>
          <textarea className="input-ingred style-input" type="text"></textarea>
          <BtnAddIngred />
        </div>
        <div className="input-weightgroup">
          <h3 className="input-subtitle">Weight</h3>
          <InputWeight />
        </div>
        <div className="input-commentgroup">
          <label htmlFor="comment" className="input-subtitle">
            Leave a comment
          </label>
          <textarea
            className="style-input style-comments"
            name="message"
            rows="2"
            cols="2"
            placeholder="ex “no ketchup”, “extra salt”"
          />
        </div>
      </div>
      <div className="btn-creatmenu-contein">
        {error && <div className="error">{error}</div>}
        <BtnCreatMenu onSubmit={handleSubmit} />
      </div>
    </>
  );
}

export default CreatMenuInput;
