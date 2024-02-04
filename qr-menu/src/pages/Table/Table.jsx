// eslint-disable-next-line no-unused-vars
import React, { useState, useRef, useMemo, useEffect } from 'react';
import NavbarSystem from '../../components/NavBar/NavbarSystem.jsx';
import HeaderSystem from '../../components/Header/HeaderSystem.jsx';
import TableQr from '../../layouts/TableQr/TableQr.jsx';
import ButtonSystem from '../../components/Button/ButtonSystem.jsx';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { Toast } from 'primereact/toast';
import { InputText } from 'primereact/inputtext';
import { Tag } from 'primereact/tag';
import { InputTextarea } from 'primereact/inputtextarea';
import { QRCodeSVG } from 'qrcode.react';
import CounterTable from '../../layouts/CounterTable/CounterTable.jsx';
import styles from './Table.module.scss';
function Table() {
  const [tables, setTables] = useState(null); //add tables to the browser table
  const [deleteTablesDialog, setDeleteTablesDialog] = useState(false);
  const [tableDialog, setTableDialog] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [quantityState, setQuantityState] = useState(0);
  const [urlState, setUrlState] = useState('');
  const [qrCode, setQrCode] = useState('');
  const [openQrModalDialog, setOpenQrModalDialog] = useState(false);
  const toast = useRef(null);
  const qrRef = useRef();
  const [qrCodeId, setQrCodeId] = useState([]);
  const [tableState, setTableState] = useState({
    id: null,
    quantity: 0,
    links: '',
    qrcodes: [],
  });
  console.log(tableState);
  //TOAST- FUNCTION
  const showSuccess = () => {
    toast.current.show({
      severity: 'success',
      summary: 'Success',
      detail: 'Generation was successful!',
      life: 3000,
    });
  };
  const showInfo = () => {
    toast.current.show({
      severity: 'info',
      summary: 'Info',
      detail: 'Message Content',
      life: 3000,
    });
  };
  const showWarn = () => {
    toast.current.show({
      severity: 'warn',
      summary: 'Warning',
      detail: 'warn - Warn Message!!',
      life: 3000,
    });
  };
  const showError = () => {
    toast.current.show({
      severity: 'error',
      summary: 'Error',
      detail: 'Message Content',
      life: 3000,
    });
  };
  //OPEN FORM-MODAL-DIALOG
  const generQr = e => {
    e.preventDefault();
    setTableState({
      id: null,
      quantity: 0,
      links: '',
      qrcodes: [],
    });
    setQuantityState(0);
    setUrlState('');
    setSubmitted(false);
    setTableDialog(false);
  };
  //GENERAT.QR
  const qrcode = (
    <QRCodeSVG
      id="qrCodeId"
      size={500}
      style={{
        height: 'auto',
        maxWidth: '100%',
        width: '100%',
        paddingTop: '20px',
        paddingLeft: '0',
      }}
      value={urlState}
      viewBox={`0 0 256 256`}
      level="Q"
      width={500}
      height={500}
    />
  );
  //BTN GENERAT.QR
  const clickGenerateQrCode = e => {
    e.preventDefault();
    setOpenQrModalDialog(true);
    setQrCode(qrCode);
  };
  //BTN SAVE
  const handleSave = () => {
    setSubmitted(true);
    const qrTotal = Array.from(
      { length: quantityState },
      (_, index) => index * urlState
    );
    setTables(prevState => ({
      ...prevState,
      id: qrCodeId.id + 1,
      quantity: quantityState + 1,
      links: urlState,
      qrcodes: qrTotal,
    }));

    showWarn();
    console.log("Error, Don't save");
    setTableDialog(false);
    setSubmitted(false);
  };
  //FIND ID
  const findIndexById = id => {
    let index = -1;
    for (let i = 0; i < tables.length; i++) {
      if (tables[i].id === id) {
        index = i;
        break;
      }
    }
    return index;
  };
  const createId = () => {
    let id = '';
    let chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  };
  //BTN ADD TABLE
  const addTable = e => {
    e.preventDefault();
    setTableDialog(!tableDialog);
    setSubmitted(false);
    setTableState({
      quantity: 0,
      links: '',
      qrcodes: [],
    });
  };
  //FN NO
  const hideDialogNo = () => {
    setSubmitted(false);
    setUrlState('');
    setQuantityState(0);
    setTableDialog(false);
    setOpenQrModalDialog(false);
  };
  //FN YES
  const hideDialogYes = () => {
    setOpenQrModalDialog(false);
  };
  //INPUT ONCHANGE
  // const handleChange = (e) => {
  //   const updatedText = e.target.value;
  //   urlState(updatedText)
  // };
  const onInputChange = (e, link) => {
    const val = (e.target && e.target.value) || '';
    let _tableState = { ...tableState };
    tableState[`${urlState}`] = val;
    setTableState(tableState);
  };
  //INPUT QUNYITY CHANGE
  const handleQuantityChange = value => {
    setTableState(prevState => ({
      ...prevState,
      quantity: value,
    }));
    setQuantityState(value);
  };
  //BTN CANSEL/BACK
  const tableDialogFooter = (
    <React.Fragment>
      <Button label="Back" icon="pi pi-times" outlined onClick={hideDialogNo} />
      <Button label="Save" icon="pi pi-check" onClick={handleSave} />
    </React.Fragment>
  );
  //BTN YES/NO
  const footerContent = (
    <div>
      <Button
        label="No"
        icon="pi pi-times"
        onClick={hideDialogNo}
        className="p-button-text"
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        onClick={hideDialogYes}
        autoFocus
      />
    </div>
  );

  return (
    <div className={styles.container_wrap}>
      <HeaderSystem />
      <Toast ref={toast} />

      <div className={styles.container_page}>
        <div className={styles.page_left}>
          <NavbarSystem />
        </div>
        <div className={styles.page_right}>
          <div className={styles.block_title}>
            <h1 className={styles.page_title}>Tables</h1>
            <div className={styles.block_btn}>
              <button onClick={addTable} className={styles.btn_addtable}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M8.66665 1.33331H7.33331V7.33331H1.33331V8.66665H7.33331V14.6666H8.66665V8.66665H14.6666V7.33331H8.66665V1.33331Z"
                    fill="white"
                  />
                </svg>
                <h3>Add a new table</h3>
              </button>
            </div>
            {/* CATEGORY-TABLE <div className='block-categ-table'> */}
            {/* <div className='categ-table1'>All tables <span className='quantity-table'>(3)</span> </div> */}
            {/* <div className='categ-table2'>Processing <span className='quantity-table'>(0)</span> </div> */}
            {/* <div className='categ-table3'>Completed <span className='quantity-table'>(2)</span> </div> */}
            {/* <div className='categ-table4'>Completed <span className='quantity-table'>(2)</span> </div> */}
            {/* </div>   */}
            <TableQr value={tableState} onChange={handleQuantityChange} />

            <form onSubmit={generQr}>
              <Dialog
                visible={tableDialog}
                style={{ width: '32rem' }}
                breakpoints={{ '960px': '75vw', '641px': '90vw' }}
                header="Add Tables"
                modal
                className="p-fluid"
                footer={tableDialogFooter}
                onHide={hideDialogNo}
              >
                <div className="field">
                  <div className="tables-quant">
                    <label htmlFor="name" className="font-bold">
                      Tables Quantities
                    </label>
                    <CounterTable
                      id="table"
                      value={quantityState}
                      onChange={e => handleQuantityChange(e, 'table')}
                    />
                    <span>enter the quantity of tables</span>
                    <br />
                  </div>

                  <div>
                    <label htmlFor="menu link" className="font-bold">
                      Menu Link
                    </label>
                    <InputText
                      id="menulink"
                      value={tableState.urlState}
                      type="text"
                      onChange={e => onInputChange(e, 'urlState')}
                      placeholder="https://example.com"
                      className={classNames({
                        'p-invalid': submitted && !tableState.urlState,
                      })}
                    />
                    {submitted && !tableState.urlState && (
                      <small className="p-error">Name is required.</small>
                    )}
                  </div>
                  <div className="btn-addtable">
                    <Button
                      onClick={clickGenerateQrCode}
                      className="btn-addtable"
                      style={{ width: '50%' }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M8.66665 1.33331H7.33331V7.33331H1.33331V8.66665H7.33331V14.6666H8.66665V8.66665H14.6666V7.33331H8.66665V1.33331Z"
                          fill="white"
                        />
                      </svg>
                      <h3>Generate QR-Code</h3>
                    </Button>
                  </div>
                </div>
                <div id="qr-code">{qrcode}</div>
              </Dialog>
            </form>

            <div className="card flex justify-content-center">
              <Dialog
                header="Generate QR code"
                visible={openQrModalDialog}
                style={{ width: '50vw' }}
                onHide={() => setOpenQrModalDialog(false)}
                footer={footerContent}
              >
                <p className="m-0">
                  Are you sure that you want to generate ” `${quantityState}` ”
                  QR codes för “ `${quantityState}` ” tabkles?
                </p>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
