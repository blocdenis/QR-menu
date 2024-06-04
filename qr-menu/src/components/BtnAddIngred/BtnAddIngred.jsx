import Button from '../Button/Button.jsx';
import InputSearch from '../InputSearch/InputSearch.jsx';
import IngredBlockRight from '../IngredBlock/IngredBlockRight.jsx';
import IngredBlockLeft from '../IngredBlock/IngredBlockLeft.jsx';
import { useState, useEffect } from 'react';
import './BtnAddIngred.scss';
import BtnAllIngred from '../BtnAllIngred/BtnAllIngred.jsx';
function BtnAddIngred({ ingredForm, onClick, addIngred }) {
  const [openModalIngred, setOpenModalIngred] = useState(false);
  const handleApply = () => {
    addIngred(ingredForm);
    setOpenModalIngred(false);
  };

  const handleCancel = () => {
    setOpenModalIngred(false);
  };

  console.log(ingredForm);
  return (
    <div>
      <div className="btn-conteiner">
        <Button
          onClick={() => {
            setOpenModalIngred(true);
            // onChange={onChange}
          }}
          leftIcon={true}
          size="medium"
          type='button'
        >
          Add ingredient{''}
        </Button>
      </div>
      {openModalIngred && (
        <div className="allingred-group ">
          <InputSearch
            closeModal={() => {
              setOpenModalIngred(false);
            }}
          />
          <div className="ingred-block">
            <IngredBlockLeft ingredients={ingredForm} />

            <IngredBlockRight />
          </div>
          <BtnAllIngred
            handleApply={handleApply}
            handleCancel={handleCancel}
            type="button"
          />
        </div>
      )}
    </div>
  );
}

export default BtnAddIngred;
