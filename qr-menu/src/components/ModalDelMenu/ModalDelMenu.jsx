import React from 'react';
import './ModalDelMenu.scss';
import IconClose from '../../SVG/IconClose.jsx';
import { DISH_DELETE } from '../../Fetch/settings.js';
import axios from 'axios';

function ModalDelMenu({ closeModal, id, handleDelete, menu, categories, category_id}) {
  const handleCancel = () => {
    closeModal();
  };

  const handleDishDelete = async () => {
    try {
      await axios.delete(DISH_DELETE( id, category_id ), {
        withCredentials: true, 
      });
      handleDelete(id);
      handleCancel();
    } catch (error) {
      console.error('Ошибка при удалении Блюда:', error);
    }
  };
  return (
    <>
      <div id="modal-show">
        <div className="modal-div">
          <div className="title-style">
            <h3 className="modal-title">Name</h3>
            <div onClick={closeModal}>
              <IconClose />
            </div>
          </div>
          <div className="modal-content">
            <p>Are you sure that you want to delete menu “{menu}” ?</p>
          </div>
          <div className='style-btn'>
            <button className="modal-btn btn-cancel" onClick={handleCancel}>Cancel</button>
            <button className="modal-btn btn-delete" onClick={() => handleDishDelete(id)}>Delete</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalDelMenu;
