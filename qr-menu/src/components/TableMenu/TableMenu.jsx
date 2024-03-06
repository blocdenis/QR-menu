import './TableMenu.scss';
import IconEdit from '../../SVG/IconEdit';
import IconDelete from '../../SVG/IconDelete';
const TableMenu = () => {
  const dataMenuItems = [
    {
      menuNames: '',
      categories: '',
      actionsedit: 'Edit',
      actiondelete: 'Delete',
    },
  ];
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
        {dataMenuItems.length > 0 ? (
        <tbody>
        {dataMenuItems.map(item => (
          <tr key={item.menuNames}>
            <td>{item.menuNames}</td>
            <td>{item.categories}</td>
            <td className='item-td'>
            <IconEdit/>
            <IconDelete/>
            </td>
            <td></td>
          </tr>
          ))}
        </tbody>
        ) : (
          <p>The menu is empty</p>
        )}
      </table>
    </div>
  );
}

export default TableMenu;
