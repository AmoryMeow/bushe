import './TableCol.css';
import Sort from '../Sort/Sort';
import React from 'react';

function TableCol({title, name, sort, search, handleSearch, handleClear, handleSort}) {

  const [useSearch, setUseSearch] = React.useState(false);

  function handleChange(evt) {
    handleSearch(name, evt.target.value);
  }

  let direction = "";
  if (sort.field === name) {
    direction = sort.direction;
  }

  React.useEffect(() => {
    if (search[name]) {
      setUseSearch(search[name] !== "");
    } else {
      setUseSearch(false);
    }
  }, [search])

  function handleClick(evt) {
    evt.preventDefault();
    setUseSearch(false);
    handleClear(name); 
  }

  return (
    <th className="table__col">
      <div className="table__heading">
        <p className="table__title">{title}</p>
          <Sort direction={direction} name={name} handleSort={handleSort}/>
      </div>
      <form className="table__form">
        <input className="table__search" placeholder="Поиск" onChange={handleChange} value={search[name]}/>
        <button className={`table__clear ${!useSearch && 'table__clear_hidden'}`} onClick={handleClick}></button>
      </form>
    </th>
  )
}

export default TableCol;