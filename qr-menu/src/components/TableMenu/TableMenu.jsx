import './TableMenu.scss';
import IconEdit from '../../SVG/IconEdit';
import IconDelete from '../../SVG/IconDelete';
import { useState, useEffect, createContext } from 'react';
import ModalDelMenu from '../ModalDelMenu/ModalDelMenu.jsx';
import CreatMenuInput from '../CreatMenuInput/CreatMenuInput.jsx';
const MenuContext = createContext(null);
// eslint-disable-next-line react/prop-types
const TableMenu = ({ rows, setRows }) => {
  
  const [modalOpenRows, setModalOpenRows] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [editRowId, setEditRowId] = useState(null);
  const [editRowData, setEditRowData] = useState(null)
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

  // const handleEdit = id => {
  //   const findData = rows.find(data => data.id === id);
  //   setEdit(findData);
  //   setRows([...rows, setEdit]); 
  //   console.log(findData);
  // };
  const handleSaveEdit = (id) => {
    const findData = rows.find(data => data.id === id);
    setEditRowId(id);
    setEditRowData(findData);    
    console.log(findData)
  };

  // useEffect(() => {
  //   if (edit) {
  //     setInput(edit.menuNames);
  //   } else {
  //     setInput('');
  //   }
  // }, [setInput, edit]);
  const handleOpenEdit = id => {
    setOpenEditModal(prevState => ({
      ...prevState,
      [id]: true,
    }));
  };
  const closeModalEdit = id => {
    setOpenEditModal(prevState => ({
      ...prevState,
      [id]: false,
    }));
  };
  return (
    <MenuContext.Provider value={{ rows,  modalOpenRows, handleOpenEdit, closeModalEdit, editRowId,
      handleSaveEdit, }}>
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
                  <div id={item.id} onClick={() => handleOpenEdit(item.id)}>
                    <IconEdit />
                  </div>
                  {openEditModal && openEditModal[item.id] && (
                    <div className="edit-container">
                      <h1 className="title-edit">Edit</h1>
                      <CreatMenuInput
                        key={item.id}
                        closeModalEdit={() => closeModalEdit(item.id)}
                        id={item.id}
                        menuName={editRowData?.menuName}
                        categories= {editRowData?.categories}
                        // handleEdit={() => handleEdit(item.id)}
                        handleSaveEdit={handleSaveEdit}
                        editRowData={editRowData}

                      />
                    </div>
                  )}
                  <div id={item.id} onClick={() => handleDel(item.id)}>
                    <IconDelete />
                  </div>
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
    </MenuContext.Provider>
  );
};

export default TableMenu;
