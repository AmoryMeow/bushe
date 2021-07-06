import './Sort.css';

function Sort({direction, name, handleSort}) {

  function handleClick() {
    handleSort(name) 
  }
  
  return (
    <div className="sort" onClick={handleClick}>
      <div className={`sort__item sort__item_type_up ${direction === "up" && 'sort__item_select'}`}></div>
      <div className={`sort__item sort__item_type_down ${direction === "down" && 'sort__item_select'}`}></div>
    </div>
  )
}

export default Sort;