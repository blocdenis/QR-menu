import React, { useState, useEffect }from 'react';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import '../css/scss/QrTable.scss';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';

function TableCrud({tables}) {

  const actionBodyTemplate = (rowData) => {
    return (
        <React.Fragment>
            {/* <Button icon="pi pi-pencil" rounded outlined className="mr-2" onClick={() => editProduct(rowData)} /> */}
            <Button icon="pi pi-trash" rounded outlined severity="danger" onClick={() => confirmDeleteProduct(rowData)} />
        </React.Fragment>
    );
};
  return (
    <div >
    <DataTable className='dataTable' value={tables} stripedRows style={{width: '100%', padding: 'auto'}}>
      <Column className='title' field="table" header="Table"></Column>
      <Column className='title' field="menulink" header="Menu Link"></Column>
      <Column className='title' field="qr-code" header="Qr-code"></Column>
      <Column className='title' field="start date" header="Start Date"></Column>
      <Column className='title' field="action" header="Action"></Column>
      <Column body={actionBodyTemplate} exportable={false} ></Column>
    </DataTable>

    </div>
  )
}

export default TableCrud

