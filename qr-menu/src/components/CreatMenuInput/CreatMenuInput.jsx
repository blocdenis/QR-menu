import './CreatMenuInput.scss';
import ImgUploader from '../ImgUploader/ImgUploader';
import InputPrice from '../InputPrice/InputPrice';
import Button from '../../components/Button/Button.jsx';
import InputSearch from '../InputSearch/InputSearch.jsx';
function CreatMenuInput() {
  const openCreatMenu = () => {};
  return (
    <>
      <div className="input-menugroup">
        <label id="menu" className="input-subtitle">
          Name of the menu
        </label>
        <input
          id="menu"
          className="input-menu style-input"
          type="text"
          placeholder="ex “Fresh pasta with seefood”"
        />
      </div>
      <div className="input-categorygroup">
        <label htmlFor="category" className="input-subtitle">
          Category
        </label>
        <select id="category" className="select-categ style-input">
          <option value="">Fish</option>
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
        <input className="input-ingred style-input" type="text" />
      </div>
      <div>
        <Button leftIcon={true} size="medium" onClick={openCreatMenu}>
          Add ingredient{''}
        </Button>
      </div>
      <InputSearch/>
      <div className="input-weightgroup">
        <h3 className="input-subtitle">Weight</h3>
        <input className="style-input" type="text" />
      </div>
      <div className="input-commentgroup">
        <h3 className="input-subtitle">Leave a comment</h3>
        <input className="style-input" type="text" />
      </div>
    </>
  );
}

export default CreatMenuInput;
