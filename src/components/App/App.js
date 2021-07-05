import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import api from '../../utils/api';
import React from 'react';

function App() {

  const [data, setData] = React.useState([]);
  const [filterData, setFilterData] = React.useState([]);
  const [search, setSeach] = React.useState({});

  React.useEffect(() => {
    api.getData()
    .then((res) => {
      setData(res.data);
      setFilterData(res.data);
    })
  },[]);

  function handleSearch(name, value) {
    
  }

  const columns = [
    {name: "number", text: "Номер телефона", sort: ""},
    {name: "calltime", text: "Время звонка", sort: "up"},
    {name: "s_in_wait", text: "Время ожидания", sort: ""},
    {name: "s_in_talk", text: "Время разговора", sort: ""},
    {name: "agent", text: "Оператор", sort: ""},
  ]

  return (
    <div className="page">
      <Header/>
      <Main data={filterData} columns={columns} handleSearch={handleSearch}/>
    </div>
  );
}

export default App;
