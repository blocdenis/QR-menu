import React, { useState, useEffect } from 'react';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import styles from './TableQr.module.scss';
import { Button } from 'primereact/button';

function TableCrud({ tables }) {
  const actionBodyTemplate = rowData => {
    return (
      <React.Fragment>
        <Button
          icon="pi pi-trash"
          rounded
          outlined
          severity="danger"
          onClick={() => confirmDeleteProduct(rowData)}
        />
      </React.Fragment>
    );
  };
  return (
    <div>
      <DataTable
        className={styles.DataTable}
        value={tables}
        stripedRows
        style={{ width: '100%', padding: 'auto' }}
      >
        <Column className={styles.title} field="table" header="Table"></Column>
        <Column
          className={styles.title}
          field="menulink"
          header="Menu Link"
        ></Column>
        <Column
          className={styles.title}
          field="qr-code"
          header="Qr-code"
        ></Column>
        <Column
          className={styles.title}
          field="start date"
          header="Start Date"
        ></Column>
        <Column
          className={styles.title}
          field="action"
          header="Action"
        ></Column>
        <Column body={actionBodyTemplate} exportable={false}></Column>
      </DataTable>
    </div>
  );
}

export default TableCrud;
