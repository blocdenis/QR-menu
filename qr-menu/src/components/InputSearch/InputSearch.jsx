import './InputSearch.scss';
import IconClose from '../../SVG/IconClose.jsx';
import IconSearch from '../../SVG/IconSearch.jsx';

function InputSearch() {
  return (
    <div>
            <div className="allingred-group style-input">
        <div className="iconclose">
          <IconClose />
        </div>
        <div className="input-search style-input">
          <div className="input-group">
            <input
              type="text"
              id="search-input"
              className="form-control"
              placeholder="Search"
            />
            <span className='iconsearch'>
              <IconSearch/>
            </span>
            <ul className="suggestions-list" id="suggestions-list"></ul>
          </div>
        </div>
      </div>

    </div>
  )
}

export default InputSearch
