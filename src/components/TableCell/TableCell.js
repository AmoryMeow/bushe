import './TableCell.css';

function TableCell({text, name}) {

  return (
    <td className="table__cell">{text}</td>
  )
}

export default TableCell;