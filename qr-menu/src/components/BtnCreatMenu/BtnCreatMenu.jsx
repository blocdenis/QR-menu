import './BtnCreatMenu.scss';
import Button from '../../components/Button/Button.jsx';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function BtnCreatMenu({ onSubmit }) {
  const navigate = useNavigate();

  const openMenu = () => {
    navigate('/menu');
  };
  return (
    <div className="block-btn">
      <Button className="btn-backmenu" onClick={openMenu} variant="custom">
        Back to Menu
      </Button>
      <Button className="btn-savemenu" onClick={onSubmit}>
        Save
      </Button>
    </div>
  );
}

export default BtnCreatMenu;
