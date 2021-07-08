import './TableRow.css';
import TableCell from '../TableCell/TableCell';
import React from 'react';

function TableRow({data, columns, handleSearch}) {
  
  return (
    <tr className="table__rows">
        {
          columns.map((el,i) => (
            <TableCell 
              key={i}
              text={data[el.ind]}
              name={el.name}
              handleSearch={handleSearch}
            />
          ))
        }
      
    </tr>
  )
}

export default TableRow;