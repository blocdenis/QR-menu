import React from 'react';
import IconClose from '../../SVG/IconClose.jsx';
import './ModalDelCategor.scss';
import { CATEGORY_DELETE } from '../../Fetch/settings.js';
import axios from 'axios';

function ModalDelCategor({ closeModalCategor, id, handleDelete, categor }) {
  const handleCancel = () => {
    closeModalCategor();
  };

  const handleConfirmDelete = async () => {
    try {
      await axios.delete(CATEGORY_DELETE('category', id), {
        withCredentials: true, 
      });
      handleDelete(id);
      closeModalCategor();
    } catch (error) {
      console.error('Ошибка при удалении категории:', error);
    }
  };

  return (
    <div id="modal-show">
      <div className="modal-div">
        <div className="title-style">
          <h3 className="modal-title">Name Category</h3>
          <div onClick={closeModalCategor}>
            <IconClose />
          </div>
        </div>
        <div className="modal-content">
          <p>Are you sure that you want to delete category “{categor}”?</p>
        </div>
        <div className='style-btn'>
          <button className="modal-btn btn-cancel" onClick={handleCancel}>Cancel</button>
          <button className="modal-btn btn-delete" onClick={handleConfirmDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default ModalDelCategor;