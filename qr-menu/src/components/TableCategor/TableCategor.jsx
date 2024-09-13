import React, { useState } from 'react';
import BtnCreatMenu from '../../components/BtnCreatMenu/BtnCreatMenu.jsx';
import './TableCategor.scss';
import axios from 'axios';
import { CATEGORY_ADD } from '../../Fetch/settings.js';
import IconCheck from '../../SVG/IconCheck.jsx';

function TableCategor({
  onNewCategorySubmit,
  rowsCategor,
  setRowsCategor,
  setModalOpenCategor,
}) {
  const [newCategoryName, setNewCategoryName] = useState('');
  const [highlightColor, setHighlightColor] = useState('');

  const handleNewCategoryNameChange = e => {
    setNewCategoryName(e.target.value);
  };

  const handleHighlightColorChange = color => {
    setHighlightColor(color);
  };

  const handleSubmit = async () => {
    if (newCategoryName && highlightColor) {
      const newCategory = {
        category: newCategoryName,
        color: colorMap[highlightColor] || [229, 245, 236], 
      };
  
      try {
        const response = await axios.post(CATEGORY_ADD, newCategory, {
          withCredentials: true, 
        });
        const addedCategory = response.data;
        setRowsCategor([...rowsCategor, addedCategory]);
        onNewCategorySubmit(addedCategory);
        setModalOpenCategor(false);
      } catch (error) {
        if (error.response && error.response.status === 500) {
          window.location.reload();
        } else {
          console.error('Ошибка при добавлении категории:', error);
        }
      }
    } else {
      alert('Please enter category name and select a highlight color.');
    }
  };

  // Map color class to RGB values
  const colorMap = {
    'color1': [229, 245, 236],
    'color2': [255, 0, 0],
    'color3': [255, 234, 179],
    'color4': [228, 242, 255],
  };

  return (
    <>
      <div className="block-categor">
        <div className="block-name">
          <h3 className="titlename-categor">Name of a new category</h3>
        </div>
        <div className="subtitlename-categor">
          <input
            type="text"
            className="inputcateg"
            placeholder="salad, burger, pasta etc."
            value={newCategoryName}
            onChange={handleNewCategoryNameChange}
          />
        </div>
        <div className="block-categcolor">
          <div className="divname-categor">
            <h1 className="titlename-categor">Choose a highlight color</h1>
          </div>
          <div className="block-choosecolor">
            <div className="square-block-categ">
              {['color1', 'color2', 'color3', 'color4'].map(color => (
                <div
                  key={color}
                  className={`style-square size-square-${color}`}
                  onClick={() => handleHighlightColorChange(color)}
                >
                  {highlightColor === color && (
                    <span className="iconcheck-style">
                      <IconCheck />
                    </span>
                  )}
                </div>
              ))}
            </div>
            <div className={`div-color-btn div-color-btn-${highlightColor}`}>
              <span className="h2-namebtn">{newCategoryName}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="btn-creatmenu-contein">
        <BtnCreatMenu type="button" onSubmitCategor={handleSubmit} />
      </div>
    </>
  );
}

export default TableCategor;