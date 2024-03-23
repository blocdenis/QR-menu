import './BtnCreatMenu.scss';
import Button from '../../components/Button/Button.jsx';
import { useNavigate } from 'react-router-dom';

function BtnCreatMenu() {
  const navigate = useNavigate();
  const openMenu = () => {
    navigate('/menu');
  };
  const saveMenu = () => {
    navigate('/menu');
  };

  return (
    <div>
      <div className="block-btn">
        <Button className="btn-backmenu" onClick={openMenu} variant="custom">
          Back to Menu
        </Button>
        <Button className="btn-savemenu" onClick={saveMenu}>
          Save
        </Button>
      </div>
    </div>
  );
}

export default BtnCreatMenu;
