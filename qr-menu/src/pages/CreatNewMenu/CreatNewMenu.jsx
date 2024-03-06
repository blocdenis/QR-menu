import { AppLayout } from '../../layouts/AppLayout/AppLayout.jsx';
import Button from '../../components/Button/Button.jsx';
import  './CreatNewMenu.scss';
import CreatMenuInput from '../../components/CreatMenuInput/CreatMenuInput.jsx';
function CreatNewMenu() {
  return (
      <AppLayout>
        <div className='container-wrap'>
          <div className='container-page'>
            <h1 className='page-titleMenu'>Create a new menu</h1>
            <CreatMenuInput/>
          </div>
          <div>
          <Button variant="custom">Back</Button>
          <Button>Save</Button>
        </div>
        </div>
        
      </AppLayout>
    
  );
}

export default CreatNewMenu;
