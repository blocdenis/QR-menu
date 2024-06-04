import React from 'react';
import BtnCreatMenu from '../../components/BtnCreatMenu/BtnCreatMenu.jsx';
import './TableCategor.scss';
import { useState } from 'react';

import IconCheck from '../../SVG/IconCheck.jsx';
function TableCategor({
  onNewCategorySubmit,
  rowsCategor,
  setRowsCategor,
  setModalOpenCategor,
  onChange
}) {
  const [newCategoryName, setNewCategoryName] = useState('');
  const [highlightColor, setHighlightColor] = useState('');

  const handleNewCategoryNameChange = e => {
    setNewCategoryName(e.target.value);
    console.log('setNewCategoryName', e.target.value);
  };

  const handleHighlightColorChange = color => {
    setHighlightColor(color);
    console.log('setHighlightColor', color);
  };

  const handleSubmit = () => {
    if (newCategoryName && highlightColor) {
      const newCategory = {
        id: rowsCategor.length + 1,
        categor: newCategoryName,
        color: highlightColor,
      };
      setRowsCategor([...rowsCategor, newCategory]);
      onNewCategorySubmit(newCategory);
      setModalOpenCategor(false);
      console.log('newCategor', newCategory);
    } else {
      alert('Please enter category name and select a highlight color.');
    }
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
