import './TableCol.css';
import Sort from '../Sort/Sort';
import React from 'react';

function TableCol({title, name, sort, handleSearch}) {

  const [searchValue, setSearchValue] = React.useState("")
  
  function handleChange(evt) {
    setSearchValue(evt.target.value);
  }

  React.useEffect(() => {
    handleSearch(name, searchValue)
  }, [searchValue]);

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