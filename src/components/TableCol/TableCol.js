import './TableCol.css';
import Sort from '../Sort/Sort';

function TableCol({title, name, sort, handleSearch, handleSort}) {

  function handleChange(evt) {
    handleSearch(name, evt.target.value);
  }

  let direction = "";
  if (sort.field === name) {
    direction = sort.direction;
  }

  return (
    <th className="table__col">
      <div className="table__heading">
        <p className="table__title">{title}</p>
          <Sort direction={direction} name={name} handleSort={handleSort}/>
      </div>
      <input className="table__search" placeholder="Поиск" onChange={handleChange}/>
    </th>
  )
}

export default TableCol;