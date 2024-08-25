import './BtnCreatMenu.scss';
import Button from '../../components/Button/Button.jsx';

// eslint-disable-next-line react/prop-types
function BtnCreatMenu({ onSubmit, onSubmitCategor}) {

  const openMenu = () => {
    window.location.reload();
  };
  const handleSave = () => {
    if (onSubmit) {
      onSubmit();
    }
    if (onSubmitCategor) {
      onSubmitCategor();
    }
    console.log('Submit')
  };
  return (
    <div className="block-btn">
      <Button className="btn-backmenu" onClick={openMenu} variant="custom">
        Back to Menu
      </Button>
      <Button className="btn-savemenu" onClick={handleSave}>
        Save
      </Button>
    </div>
  );
}

export default BtnCreatMenu;
