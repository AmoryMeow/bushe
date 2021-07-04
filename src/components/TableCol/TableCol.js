import './TableCol.css';
import Sort from '../Sort/Sort';

function TableCol({title, name, sort}) {
  return (
    <th className="table__col">
      <div className="table__heading">
        <p className="table__title">{title}</p>
          <Sort direction={sort}/>
      </div>
      <input className="table__search" placeholder="Поиск"/>
    </th>
  )
}

export default TableCol;