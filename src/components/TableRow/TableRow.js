import './TableRow.css';
import TableCell from '../TableCell/TableCell';
import React from 'react';

function TableRow({data}) {
  
  return (
    <tr className="table__rows">
      <TableCell text={data[0]}/>
      <TableCell text={data[1]}/>
      <TableCell text={data[2]}/>
      <TableCell text={data[3]}/>
      <TableCell text={data[4]}/>
      
    </tr>
  )
}

export default TableRow;