import './TableMenu.scss';
import IconEdit from '../../SVG/IconEdit';
import IconDelete from '../../SVG/IconDelete';
import { useState, useEffect } from 'react';
import ModalDelMenu from '../ModalDelMenu/ModalDelMenu.jsx';

// eslint-disable-next-line react/prop-types
const TableMenu = ({ rows, setRows,handleEdit}) => {
  const [modalOpenDel, setModalOpenDel] = useState(false);

  const openModalDel = id => {
    setModalOpenDel(prevState => ({
      ...prevState,
      [id]: true,
    }));
  };
  const closeModal = id => {
    setModalOpenDel(prevState => ({
      ...prevState,
      [id]: false,
    }));
  };

  const handleDeleteRow = id => {
    let delRow = rows.filter(item => item.id !== id);
    setRows(delRow);
    console.log(delRow);
    closeModal(id);
  };
  useEffect(() => {
    console.log('newrows in tablemenu:', rows);
  }, [rows]);
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
            {rows.map((item, id) => {
              const categorText = item.categories
                ? item.categories.charAt(0).toUpperCase() +
                  item.categories?.slice(1)
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
                    <div id={item.id} onClick={() => handleEdit(item.id)}>
                      <IconEdit />
                    </div>
                    <div id={item.id} onClick={() => openModalDel(item.id)}>
                      <IconDelete />
                    </div>
                    {modalOpenDel[item.id] && (
                      <ModalDelMenu
                        key={item.id}
                        closeModal={() => closeModal(item.id)}
                        id={item.id}
                        handleDelete={() => handleDeleteRow(item.id)}
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
