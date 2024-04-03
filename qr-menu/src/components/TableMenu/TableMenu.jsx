import './TableMenu.scss';
import IconEdit from '../../SVG/IconEdit';
import IconDelete from '../../SVG/IconDelete';
import { useState, useEffect } from 'react';
import ModalDelMenu from '../ModalDelMenu/ModalDelMenu.jsx';
// eslint-disable-next-line react/prop-types
const TableMenu = ({ rows, setRows }) => {
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [modalOpenRows, setModalOpenRows] = useState(false);

  // const [edit, setEdit] = useState(null);
  // const handleEdit = id => {
  //   const findData = rows.find(data => data.id === id);
  //   setEdit(findData);
  // };
  const handleDel = id => {
    setModalOpenRows(prevState => ({
      ...prevState,
      [id]: true,
    }));
  };

  const closeModal = id => {
    setModalOpenRows(prevState => ({
      ...prevState,
      [id]: false,
    }));
  };

  const handleDelete = id => {
    let delRow = rows.filter(item => item.id !== id);
    setRows(delRow);
    console.log(delRow);
    closeModal(id);
  };
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
          {rows &&
            rows.map(item => {
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
                      <IconEdit />
                    </div>
                    <div id={item.id} onClick={() => handleDel(item.id)}>
                      <IconDelete />
                    </div>
                    <br />
                    {modalOpenRows[item.id] && (
                      <ModalDelMenu
                        key={item.id}
                        closeModal={() => closeModal(item.id)}
                        id={item.id}
                        handleDelete={() => handleDelete(item.id)}
                        menu={item.menuName}
                      />
                    )}
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
