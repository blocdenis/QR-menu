import Button from '../Button/Button.jsx';
import InputSearch from '../InputSearch/InputSearch.jsx';
import IngredBlockRight from '../IngredBlock/IngredBlockRight.jsx';
import IngredBlockLeft from '../IngredBlock/IngredBlockLeft.jsx';
import { useState } from 'react';
import './BtnAddIngred.scss';
import BtnAllIngred from '../BtnAllIngred/BtnAllIngred.jsx';
function BtnAddIngred() {
  const [openModal, setOpenModal] = useState(false);

  const closeIngredModal = () => {
    setOpenModal(false);
  }
  return (
    <div>
      <div className="btn-conteiner">
        <Button
          onClick={() => setOpenModal(true)}
          leftIcon={true}
          size="medium"
        >
          Add ingredient{''}
        </Button>
      </div>
      {openModal && (
        <div className="allingred-group ">
          <InputSearch
            closeModal={() => {
              setOpenModal(false);
            }}
          />
          <div className="ingred-block">
            <IngredBlockLeft />
            <IngredBlockRight />
          </div>
          <BtnAllIngred closeIngredModal={closeIngredModal} />
        </div>
      )}
    </div>
  );
}

export default BtnAddIngred;
