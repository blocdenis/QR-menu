import './TableMenu.scss';
import IconEdit from '../../SVG/IconEdit';
import IconDelete from '../../SVG/IconDelete';
import { useState, useEffect } from 'react';
import ModalDelMenu from '../ModalDelMenu/ModalDelMenu.jsx';
import MoodalNameMenu from '../ModalNameMenu/MoodalNameMenu.jsx';

// eslint-disable-next-line react/prop-types
const TableMenu = ({ rows, setRows, handleEdit }) => {
  const [modalOpenDel, setModalOpenDel] = useState({});
  const [modalName, setModalName] = useState({});

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
    const delRow = rows.filter(item => item.id !== id);
    setRows(delRow);
    closeModal(id);
  };

  const openNameModal = id => {
    setModalName(prevState => ({
      ...prevState,
      [id]: true,
    }));
  };

  const closeModalName = id => {
    setModalName(prevState => ({
      ...prevState,
      [id]: false,
    }));
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
          {rows.map(item => {
            const categorText = item.categoryName
              ? item.categoryName.charAt(0).toUpperCase() + item.categoryName.slice(1)
              : '';

            return (
              <tr key={item.id} className="tr-style">
                <td
                  className="style-td-name"
                  onClick={() => openNameModal(item.id)}
                >
                  {item.name}
                </td>
                <td className="style-td">
                  <span className={`label-${item.categoryName}`}>
                    {categorText}
                  </span>
                </td>
                <td className="item-td">
                  <div id={`edit-${item.id}`} onClick={() => handleEdit(item.id)}>
                    <IconEdit />
                  </div>
                  <div id={`delete-${item.id}`} onClick={() => openModalDel(item.id)}>
                    <IconDelete />
                  </div>
                  {modalOpenDel[item.id] && (
                    <ModalDelMenu
                      key={`modal-del-${item.id}`}
                      closeModal={() => closeModal(item.id)}
                      id={item.id}
                      category_id={item.category_id}
                      handleDelete={() => handleDeleteRow(item.id)}
                      menu={item.name}
                    />
                  )}
                  {modalName[item.id] && (
                    <MoodalNameMenu
                      key={`modal-name-${item.id}`}
                      closeModalName={() => closeModalName(item.id)}
                      id={item.id}
                      name={item.name}
                      categories={item.categoryName}
                      weight={item.weight}
                      ingred={item.ingred}
                      price={item.price}
                      currency={item.currency}
                      img={item.img}
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