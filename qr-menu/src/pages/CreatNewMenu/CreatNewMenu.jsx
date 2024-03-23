import { AppLayout } from '../../layouts/AppLayout/AppLayout.jsx';
import CreatMenuInput from '../../components/CreatMenuInput/CreatMenuInput.jsx';
import BtnCreatMenu from '../../components/BtnCreatMenu/BtnCreatMenu.jsx';
import './CreatNewMenu.scss';

function CreatNewMenu() {
  return (
    <AppLayout>
      <div className="container-wrap">
        <div className="container-page">
          <h1 className="page-titleMenu">Create a new menu</h1>
          <CreatMenuInput />
        </div>
        <BtnCreatMenu/>
      </div>
    </AppLayout>
  );
}

export default CreatNewMenu;
