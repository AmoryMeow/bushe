import './TableCell.css';

function TableCell({text, name, handleSearch}) {

  function handleClick() {
    if (name === 'number') {
      handleSearch(name, text);
    }
  }

  return (
    <td className={`table__cell ${name === 'number' && 'table__cell_type_number'}`} onClick={handleClick}>{text}</td>
  )
}

export default TableCell;