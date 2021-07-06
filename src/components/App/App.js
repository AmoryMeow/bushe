import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import api from '../../utils/api';
import React from 'react';

function App() {

  const [data, setData] = React.useState([]);
  const [filterData, setFilterData] = React.useState([]);
  const [search, setSeach] = React.useState({});

  const columns = [
    {name: "number", text: "Номер телефона", ind: 0, sort: ""},
    {name: "calltime", text: "Время звонка", ind: 1, sort: "up"},
    {name: "s_in_wait", text: "Время ожидания", ind: 2, sort: ""},
    {name: "s_in_talk", text: "Время разговора", ind: 3, sort: ""},
    {name: "agent", text: "Оператор", ind: 4, sort: ""},
  ]

  function formateDate(unixDate) {
    const date = new Date(unixDate * 1000);
    
    var dd = date.getDate();
    if (dd < 10) dd = '0' + dd;

    var mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    var yy = date.getFullYear() ;
    // if (yy < 10) yy = '0' + yy;

    var h = date.getHours();
    if (h < 10) h = '0' + h;

    var m = date.getMinutes();
    if (m < 10) m = '0' + m;

    return `${dd}.${mm}.${yy} ${h}:${m}`
  }

  React.useEffect(() => {
    api.getData()
    .then((res) => {

      const arr = res.data.map((item) => {
        item[1] = formateDate(item[1]);
        return item;
      });
      setData(arr);
      setFilterData(arr);
    })
  },[]);

  function handleSearch(name, value) {
    if (value) {
      const regex = new RegExp(value,'gi');
      setSeach({...search, [name]: regex});
    } else {
      setSeach({...search, [name]: value});
    }
  }

  React.useEffect(() => {
    
    filter(data,search);

  },[search])

  function filter(data, search) {
    const newData = data.filter((item) => {
      return columns.every((el) => {
        if (search[el.name]) {
          return search[el.name].test(item[el.ind]);
        }
        return true;
      })
    });
    setFilterData(newData);
  }

  return (
    <div className="page">
      <Header/>
      <Main data={filterData} columns={columns} handleSearch={handleSearch}/>
    </div>
  );
}

export default App;
