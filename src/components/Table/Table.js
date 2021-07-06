import './Table.css';
import TableCol from '../TableCol/TableCol';
import TableRow from '../TableRow/TableRow';

function Table({data, columns, sort, handleSearch, handleSort}) {
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
              sort={sort}
              handleSearch={handleSearch}
              handleSort={handleSort}
            />
          ))
        }

        </tr>
      </thead>

      {
        data.map((el,i) => (
          <TableRow 
            key={i}
            data={el}
            columns={columns}
          />
        ))
      }
    
    </table>
  )
}

export default Table;