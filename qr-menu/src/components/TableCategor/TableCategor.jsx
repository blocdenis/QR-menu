import React from 'react';
import BtnCreatMenu from '../../components/BtnCreatMenu/BtnCreatMenu.jsx';
import './TableCategor.scss';
import IconCheck from '../../SVG/IconCheck.jsx';
function TableCategor() {
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
          />
        </div>
        <div className="block-categcolor">
          <div className="nameCategor">
            <h1 className="titlename-categor ">Choose a highlight color</h1>
          </div>
          <div className="block-choosecolor">
          <div className="square-block-categ">
            
            <div className="style-square size-square-color1">
              <span className="iconcheck-style">
                <IconCheck />
              </span>
            </div>

            <div className="style-square size-square-color2">
              <span className="iconcheck-style">
                <IconCheck />
              </span>
            </div>

            <div className="style-square size-square-color3">
              <span className="iconcheck-style">
                <IconCheck />
              </span>
            </div>

            <div className="style-square size-square-color4">
              <span className="iconcheck-style">
                <IconCheck />
              </span>
            </div>
          </div>
          <div className="div-color-btn">
            <span className='h2-namebtn'><p>Burger</p></span>
          </div>
          </div>
        </div>
      </div>
      <div className="btn-creatmenu-contein">
        <BtnCreatMenu type="submit" />
      </div>
    </>
  );
}

export default TableCategor;
