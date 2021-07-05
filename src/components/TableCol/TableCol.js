import './TableCol.css';
import Sort from '../Sort/Sort';

function TableCol({title, name, sort, handleSearch}) {

  function handleChange(evt) {
    handleSearch(name, evt.target.value);
  }

  return (
    <th className="table__col">
      <div className="table__heading">
        <p className="table__title">{title}</p>
          <Sort direction={sort}/>
      </div>
      <input className="table__search" placeholder="Поиск" onChange={handleChange}/>
    </th>
  )
}

export default TableCol;