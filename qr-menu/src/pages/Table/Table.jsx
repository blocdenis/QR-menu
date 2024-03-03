// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import TableQr from '../../layouts/TableQr/TableQr.jsx';
import Button from '../../components/Button/Button.jsx';
import styles from './Table.module.scss';
import { AppLayout } from '../../layouts/AppLayout/AppLayout.jsx';
import TableComponent from '../../components/TableComponent/TableComponent.jsx';
import TableModal from './TableModal.jsx';
function Table() {
  // const [tableState, setTableState] = useState({
  //   id: null,
  //   quantity: 0,
  //   links: '',
  //   qrcodes: [],
  // });
  const [tablesValue, setTablesValue] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleCreateData = () => {
    console.log('Столы созданы!');
    closeModal();
  };

  return (
    <AppLayout>
      <div className={styles.container_wrap}>
        <div className={styles.container_page}>
          <h1 className={styles.page_title}>Tables</h1>
          <div>
            <Button leftIcon={true} size="medium" onClick={openModal}>
              Add a new table{''}
            </Button>
          </div>

          <span>All tables {tablesValue} </span>
        </div>
        <TableComponent quantity={setTablesValue} />
        <TableModal
          isOpen={isModalOpen}
          closeModal={closeModal}
          createData={handleCreateData}
        />
      </div>
    </AppLayout>
  );
}

export default Table;
