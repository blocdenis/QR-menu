import './CreatMenuInput.scss';
import ImgUploader from '../ImgUploader/ImgUploader';
import InputPrice from '../InputPrice/InputPrice';
import Button from '../../components/Button/Button.jsx';
import InputSearch from '../InputSearch/InputSearch.jsx';
import IngredBlockRight from '../IngredBlock/IngredBlockRight.jsx';
import IngredBlockLeft from '../IngredBlock/IngredBlockLeft.jsx';
import InputWeight from '../InputWeight/InputWeight.jsx';
import { useState } from 'react';
function CreatMenuInput() {
  const openCreatMenu = () => {};
  const [nameMenu, setNameMenu] = useState('');
  console.log(nameMenu);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [customCategory, setCustomCategory] = useState('');
  const [categories, setCategories] = useState(['Category 1', 'Category 2', 'Category 3']);

  const handleSelectChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleCustomCategoryChange = (event) => {
    setCustomCategory(event.target.value);
  };

  const handleAddCustomCategory = () => {
    if (customCategory.trim() !== '' && !categories.includes(customCategory)) {
      setCategories([...categories, customCategory]);
      setSelectedCategory(customCategory);
      setCustomCategory('');
    }
  };

  return (
    <>
      <div className="input-menugroup">
        <label id="menu" className="input-subtitle">
          Name of the menu
        </label>
        <input
          id="namemenu"
          className="input-menu style-input"
          type="text"
          value={nameMenu}
          onChange={e => setNameMenu(e.target.value)}
          placeholder="ex “Fresh pasta with seefood”"
        />
      </div>
      <div className="input-categorygroup">
        <label htmlFor="category" className="input-subtitle">
          Category
        </label>
        {/* <select id="category" className="select-categ style-input"> */}
        <select className="select-categ style-input" value={selectedCategory} onChange={handleSelectChange}>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      {/* </select> */}
      <input
        type="text"
        value={customCategory}
        onChange={handleCustomCategoryChange}
        placeholder="Enter custom category"
      />
        </select>
      </div>
      <div className="input-imagegroup">
        <label htmlFor="imgload" className="input-subtitle">
          Image of the dish
        </label>
        <ImgUploader />
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
        <div className="input-ingred style-input" type="text"></div>
        <div>
          <Button leftIcon={true} size="medium" onClick={openCreatMenu}>
            Add ingredient{''}
          </Button>
        </div>
        <div className="allingred-group style-input">
          <InputSearch />
          <div className="ingred-block">
            <IngredBlockLeft />
            <IngredBlockRight />
          </div>
        </div>
      </div>
      <div className="input-weightgroup">
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
    </>
  );
}

export default CreatMenuInput;
