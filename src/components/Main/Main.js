import './Main.css';
import Table from '../Table/Table';

function Main({data, columns, sort, handleSearch, handleSort}) {
  return (
    <Table 
      data={data} 
      columns={columns} 
      sort={sort}
      handleSearch={handleSearch} 
      handleSort={handleSort}
    />
  )
}

export default Main;