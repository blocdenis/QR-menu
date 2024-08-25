import styles from './Table.module.scss';
import Button from '../../components/Button/Button';
import { useState } from 'react';
import { TABLES_CREATE, COOKIE_KEY } from '../../Fetch/settings';
import Cookies from 'js-cookie';
const TableModal = ({ isOpen, closeModal }) => {
  const [tablesQty, setTablesQty] = useState(0);
  const increment = () => {
    setTablesQty(tablesQty + 1);
  };

  const decrement = () => {
    setTablesQty(tablesQty - 1);
  };

  const createTables = async () => {
    try {
      const token = Cookies.get(COOKIE_KEY);

      const response = await fetch(TABLES_CREATE, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        credentials: 'include',
        body: JSON.stringify({ table_number: tablesQty }),
      });

      if (response.ok) {
        console.log('Столы созданы');
        setTablesQty(0);
        
      } else {
        console.error('Не удалось отправить значение столов.');
        //renove cookie
      }
    } catch (error) {
      console.error('Произошла ошибка при отправке на бекенд:', error);
    }
  };

  return (
    <div>
      {isOpen && (
        <div className={styles.modal}>
          <div className={styles.modal_content}>
            <span className={styles.close} onClick={closeModal}>
              &times;
            </span>
            <div className={styles.container}>
              <h2>Add a new table</h2>
              <p>Table quantities</p>
              <div>
                <button onClick={decrement}>-</button>
                <span>{tablesQty}</span>
                <button onClick={increment}>+</button>
                <p>Enter the quantity of tables</p>
              </div>
              <Button>Generate Qr Code</Button>
              <div className={styles.button_container}>
                <Button onClick={createTables}>Save</Button>
                <Button variant="custom">Back</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TableModal;
