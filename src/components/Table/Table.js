import './Table.css';
import TableCol from '../TableCol/TableCol';
import TableRow from '../TableRow/TableRow';

function Table({columns}) {
  return (

    <table className="table">
      <thead className="table__head">
        <tr className="table__cols">

        {
          columns.map((el,i) => (
            <TableCol 
              key={i}
              title={el.text}
              name={el.name}
              sort={el.sort}
            />
          ))
        }

        </tr>
      </thead>
      <TableRow/>
      <TableRow/>
      <TableRow/>
      <TableRow/>
    </table>
  )
}

export default Table;