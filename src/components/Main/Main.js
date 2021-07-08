import './Main.css';
import Table from '../Table/Table';

function Main({data, columns, sort, search, handleSearch, handleClear, handleSort}) {
  return (
    <Table 
      data={data} 
      columns={columns} 
      sort={sort}
      search={search}
      handleSearch={handleSearch} 
      handleClear={handleClear}
      handleSort={handleSort}
    />
  )
}

export default Main;