import React from 'react';
import './ModalDelMenu.scss';
import IconClose from '../../SVG/IconClose.jsx';

function ModalDelMenu({ closeModal, id, handleDelete, menu}) {
  const handleCancel = () => {
    closeModal();
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
            <button className="modal-btn btn-delete" onClick={() => handleDelete(id)}>Delete</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalDelMenu;
