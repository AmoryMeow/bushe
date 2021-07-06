import './TableRow.css';
import TableCell from '../TableCell/TableCell';
import React from 'react';

function TableRow({data, columns}) {
  
  return (
    <tr className="table__rows">
        {
          columns.map((el,i) => (
            <TableCell 
              key={i}
              text={data[el.ind]}
              name={el.name}
            />
          ))
        }
      
    </tr>
  )
}

export default TableRow;