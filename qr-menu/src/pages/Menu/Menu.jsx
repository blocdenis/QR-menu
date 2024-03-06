import Button from '../../components/Button/Button.jsx';
import styles from './Menu.module.scss';
import { AppLayout } from '../../layouts/AppLayout/AppLayout.jsx';
import { useNavigate } from 'react-router-dom';
import TableMenu from '../../components/TableMenu/TableMenu.jsx';
import { useState } from 'react';
const Menu = () => {
  const [tablesMenuValue, setTablesMenuValue] = useState(null);

  const navigate = useNavigate();
  const openCreatMenu = () => {
    navigate('/creatmenu');
  };
  return (
    <AppLayout>
      <div className={styles.container_wrap}>
        <div className={styles.container_page}>
          <h1 className={styles.page_title}>Menu</h1>
          <div>
            <Button leftIcon={true} size="medium" onClick={openCreatMenu}>
              Creat a new menu{''}
            </Button>
          </div>

          <span>All categories({tablesMenuValue}) </span>
        </div>
        <TableMenu quantity={setTablesMenuValue} />
      </div>
    </AppLayout>
  );
};

export default Menu;
