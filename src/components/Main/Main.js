import './Main.css';
import Table from '../Table/Table';

function Main({data, columns, handleSearch}) {
  return (
    <Table data={data} columns={columns} handleSearch={handleSearch}/>
  )
}

export default Main;