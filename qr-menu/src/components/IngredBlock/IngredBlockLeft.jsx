import React from 'react';
import './IngredBlockLeft.scss';
import IconClose from '../../SVG/IconClose.jsx';
import IconSelectIngred from '../../SVG/IconSelectIngred';

function IngredBlockLeft({ ingredients }) {
  console.log(ingredients);
  return (
    <div>
      <div className="allingred-left-block">
        <div className="titleingred-block">
          <h1 className="title-style">All ingredients</h1>
        </div>
        <hr className="line-style"></hr>
        <div className="ingred-li">
          <ul>
            <li className="li-ingredgroup">
              <input type="checkbox" id="check-ingred" />
              <label htmlFor="ingredient-1">{ingredients}</label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default IngredBlockLeft;
