import React from 'react';
import '../css/scss/table.scss';
import NavbarSystem from '../components/NavbarSystem';
import HeaderSystem from '../components/HeaderSystem';
import TableCrud from '../components/TableCrud';
import ButtonSystem from '../components/ButtonSystem';
function Table() {
  return (
    <>
    <div className='table-wrap'>
      <HeaderSystem/>
      <div className='tables-page'>
        <div className='page-left'>
          <NavbarSystem/>
        </div>
          <div className='page-right'>
            <div className='block-title'>
              <h1 className='page-title'>Tables</h1>
                    <div className='block-btn'>
                      <button className='btn-addtable'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8.66665 1.33331H7.33331V7.33331H1.33331V8.66665H7.33331V14.6666H8.66665V8.66665H14.6666V7.33331H8.66665V1.33331Z" fill="white"/>
                          </svg>
                          <h3>Add a new table</h3>
                      </button>
                    </div>
                  <div className='block-categ-table'>
                      <div className='categ-table1'>All tables <span className='quantity-table'>(3)</span> </div>
                      <div className='categ-table2'>Processing <span className='quantity-table'>(0)</span> </div>
                      <div className='categ-table3'>Completed <span className='quantity-table'>(2)</span> </div>
                      <div className='categ-table4'>Completed <span className='quantity-table'>(2)</span> </div>
                  </div>  

                  <div>
                  <TableCrud />
                  </div>
                  <div>
                 <ButtonSystem/> 
                  </div>
            </div>
          </div>
      </div>
    </div>
    
    </>
  )
}

export default Table
