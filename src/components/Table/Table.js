import './Table.css';
import TableCol from '../TableCol/TableCol';
import TableRow from '../TableRow/TableRow';

function Table({data, columns, sort, search, handleSearch, handleClear, handleSort}) {
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
              search={search}
              handleSearch={handleSearch}
              handleClear={handleClear}
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
            handleSearch={handleSearch}
          />
        ))
      }
    
    </table>
  )
}

export default Table;