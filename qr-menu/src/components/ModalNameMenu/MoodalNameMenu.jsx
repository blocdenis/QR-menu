import './ModalNameMenu.scss';
import IconClose from '../../SVG/IconClose.jsx';

function MoodalNameMenu({
  closeModalName,
  id,
  name,
  categories,
  weight,
  ingred,
  price,
  img,
  currency,
}) {
  console.log(price, currency)
  return (
    <div id="modal-show">
      <div className="modal-namemenu">
        <div className="style-closeicon">
          <div onClick={closeModalName}>
            <IconClose />
          </div>
        </div>
        <div className="modal-content">

          <div className="modal-left">
            <img  src={`data:image/jpeg;base64,${img}`} alt="dish-foto" />
          </div>

          <div className='modal-right'>
            <div className="modal-title">
              <h1 className="modal-titlemenu">{name}</h1>
            </div>
            <div className='modal-categor'>
              <span className={`label-${categories}`}> {categories} </span>
            </div>
            <div className='modal-text'>
            <div>
              <span className="modal-style modal-weight">
                Weight: {weight} gr.
              </span>
            </div>
            <div>
              <span className="modal-style modal-ingred">
                Ingredient: {ingred}
              </span>
            </div>
            </div>
            <div>
              <span className="modal-price">
                Price: {price}  {currency}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoodalNameMenu;
