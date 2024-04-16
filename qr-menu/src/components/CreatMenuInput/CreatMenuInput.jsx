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
  // eslint-disable-next-line react/prop-types
  onSubmit,
  rows,
  setRows,
  closeCreatMenu,
  editRowData,
}) {
  const [form, setForm] = useState(
    editRowData || {
      id: Date.now(),
      menuName: '',
      categories: '',
    }
  );
  const [id, setId] = useState(Date.now());
  const [error, setError] = useState('');

  const validForm = () => {
    let errorField = [];
    if (!form.menuName || !form.categories) {
      errorField.push('Please include fields!');
    }
    const existingDish = rows.find(
      row =>
        row.menuName === form.menuName && row.categories === form.categories
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

  const handleSubmit = e => {
    e.preventDefault();
    if (!validForm()) {
      return;
    }
    const newRow = {
      id: Date.now(),
      menuName: form.menuName,
      categories: form.categories,
    };
    setRows(rows => [...rows, newRow]);
    setId(Math.random(id));
    setForm('');
    closeCreatMenu();
    onSubmit(form);
    console.log(newRow, 'save');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
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
            <InputCategor
              id={`categories-${form.id}`}
              type="text"
              value={form.categories}
              onChange={e => setForm({ ...form, categories: e.target.value })}
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
            <textarea
              className="input-ingred style-input"
              type="text"
            ></textarea>
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

        {error && (
          <div className="error">
            <u>{error}</u>
          </div>
        )}
        <div className="btn-creatmenu-contein">
          <BtnCreatMenu type="submit" />
        </div>
      </form>
    </>
  );
}

export default CreatMenuInput;
