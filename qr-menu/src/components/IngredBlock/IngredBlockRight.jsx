import React from 'react';
import './IngredBlockRight.scss';
import IconClose from '../../SVG/IconClose.jsx';
import IconSelectIngred from '../../SVG/IconSelectIngred';

// eslint-disable-next-line react/prop-types
export default function IngredBlockRight({closeModal}) {
  return (
    <div>
      <div className="selectright-block">
        <div className="titleselect-block">
          <h1 className="title-style">Selected</h1>
          <button  className="btn-clear">Clear</button>
        </div>
        <hr className="line-style"></hr>
        <div className="selected-li">
          <ul>
            <li className="li-selectgroup">
              <div className="block-labelselect">
                <IconSelectIngred />
                <label htmlFor="ingred" id="label-select">
                  Item 1
                </label>
              </div>
              <div  onClick={closeModal}>
                <IconClose />
              </div>
            </li>
            <li className="li-selectgroup">
              <div className="block-labelselect">
                <IconSelectIngred />
                <label htmlFor="ingred" id="label-select">
                  Item 1
                </label>
              </div>
              <div  onClick={closeModal}>
                <IconClose />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
