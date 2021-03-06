import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import api from '../../utils/api';
import React from 'react';
import { testData } from '../../utils/testData';
import Popup from '../Popup/Popup';

function App() {

  const [data, setData] = React.useState([]);
  const [filterData, setFilterData] = React.useState([]);
  const [search, setSeach] = React.useState({});
  const [sort, setSort] = React.useState({field: "", direction: ""});
  const [callsCount, setCallsCount] = React.useState(0);
  const [authIsOpen, setAuthIsOpen] = React.useState(false);

  const columns = [
    {name: "number", text: "Номер телефона", ind: 0},
    {name: "calltime", text: "Время звонка", ind: 1},
    {name: "s_in_wait", text: "Время ожидания", ind: 2},
    {name: "s_in_talk", text: "Время разговора", ind: 3},
    {name: "agent", text: "Оператор", ind: 4},
  ]

  function formateDate(unixDate) {
    const date = new Date(unixDate * 1000);
    
    var dd = date.getDate();
    if (dd < 10) dd = '0' + dd;

    var mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    var yy = date.getFullYear() ;

    var h = date.getHours();
    if (h < 10) h = '0' + h;

    var m = date.getMinutes();
    if (m < 10) m = '0' + m;

    return `${dd}.${mm}.${yy} ${h}:${m}`
  }

  React.useEffect(() => {
    //подстановка тестовых данных для примера
    setData(testData);
    setFilterData(testData);
    api.getData()
    .then((res) => {

      const arr = res.data.map((item) => {
        item[1] = formateDate(item[1]);
        return item;
      });
      setData(arr);
      setFilterData(arr);
    })
    .catch((err) => {
      console.log(err);
    })
  },[]);

  function handleSearch(name, value) {
    setSeach({...search, [name]: value});
  }

  function handleClear(name) {
    setSeach({...search, [name]: ""})
  }

  function handleSort(name) {
    if (sort.field === name) {
      if (sort.direction === "up") {
        setSort({...sort, direction: "down"});
      } else {
        setSort({...sort, direction: "up"});
      }
    } else {
      setSort({...sort, field: name, direction: "down"});
    }
  }

  function filter(data, search) {
    const newData = data.filter((item) => {
      return columns.every((el) => {
        if (search[el.name]) {
          const regex = new RegExp(search[el.name],'gi');
          return regex.test(item[el.ind]);
        } else {
          return true;
        }
      })
    });
    setFilterData(newData);
  }

  React.useEffect(() => {
    filter(data,search);
    sortData();
  },[search, data]);

  React.useEffect(() => {
    setCallsCount(filterData.length);
  }, [filterData]);

  function sortData() {
    if (sort.field !== "" && sort.direction !== "") {
      const col = columns.find((item) => {
        return item.name === sort.field;
      });
      const index = col.ind;
      const arr = filterData.sort((a,b) => {
        if (sort.direction === "up") {
          return a[index] - b[index];
        } else {
          return b[index] - a[index] ;
        }
      })
      setFilterData(arr);
    }
  }

  React.useEffect(() => {
    sortData();
  }, [sort]);

  function openAuth() {
    setAuthIsOpen(true);
  }

  function closeAuth() {
    setAuthIsOpen(false);
  }

  return (
    <>
      <div className="page">
        <Header
          callsCount={callsCount}
          openAuth={openAuth}
        />
        <Main 
          data={filterData} 
          columns={columns} 
          sort={sort}
          search={search}
          handleSearch={handleSearch}
          handleClear={handleClear}
          handleSort={handleSort}
        />
      </div>
      <Popup 
        authIsOpen={authIsOpen}
        closeAuth={closeAuth}
      />
    </>
  );
}

export default App;
