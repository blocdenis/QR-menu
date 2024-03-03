import React from 'react';
import './TableComponent.scss';

const TableComponent = () => {
  const data = [
    {
      tableNumber: 1,
      menuLink: '/menu/1',
      qrCode: '123456',
      startDate: '2024-03-01',
      action: 'Edit',
    },
    {
      tableNumber: 2,
      menuLink: '/menu/2',
      qrCode: '789012',
      startDate: '2024-03-02',
      action: 'Edit',
    },
    {
      tableNumber: 3,
      menuLink: '/menu/3',
      qrCode: '345678',
      startDate: '2024-03-03',
      action: 'Edit',
    },
  ];

  return (
    <div className="table_container">
      <table>
        <thead className="table_header">
          <tr>
            <th>Table #</th>
            <th>Menu Link</th>
            <th>QR Code</th>
            <th>Start Date</th>
            <th>Action</th>
          </tr>
        </thead>
        {data.length > 0 ? (
          <tbody>
            {data.map(item => (
              <tr key={item.tableNumber}>
                <td>{item.tableNumber}</td>
                <td>{item.menuLink}</td>
                <td>{item.qrCode}</td>
                <td>{item.startDate}</td>
                <td>{item.action}</td>
              </tr>
            ))}
          </tbody>
        ) : (
          <p>No results found</p>
        )}
      </table>
    </div>
  );
};

export default TableComponent;
