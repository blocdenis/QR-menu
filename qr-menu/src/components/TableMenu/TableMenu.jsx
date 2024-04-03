import './TableMenu.scss';
import IconEdit from '../../SVG/IconEdit';
import IconDelete from '../../SVG/IconDelete';
import { useState, useEffect } from 'react';

// eslint-disable-next-line react/prop-types
const TableMenu = ({rows, setRows}) => {
  // const [edit, setEdit] = useState(null);
  // const handleEdit = id => {
  //   const findData = rows.find(data => data.id === id);
  //   setEdit(findData);
  // };
  const handleDel = (id) => {
    let delRow = rows.filter(item => item.id !== id);
    setRows(delRow);
    console.log(delRow);
  };
  // consformState [input, setInput] = useState('');
  // useEffect(() => {
  //   if (edit) {
  //     setInput(edit.menuNames);
  //   } else {
  //     setInput('');
  //   }
  // }, [setInput, edit]);
  return (
    <div className="tablemenu-container">
      <table>
        <thead className="tablemenu-header">
          <tr>
            <th>Menu name</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rows && rows.map((item) => {
            const categorText = item.categories
              ? item.categories.charAt(0).toUpperCase() +
                item.categories.slice(1)
              : '';
            return (
              <tr key={item.id} className="tr-style">
                <td className="style-td-name">{item.menuName}</td>
                <td className="style-td">
                  <span className={`label-${item.categories}`}>
                    {categorText}
                  </span>
                </td>
                <td className="item-td">
                  <div>
                    <IconEdit  />
                  </div>
                  <div onClick={() => handleDel(item.id)}>
                    <IconDelete />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableMenu;
