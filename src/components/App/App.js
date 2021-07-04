import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import api from '../../utils/api';
import React from 'react';

function App() {

  const [data, setData] = React.useState([]);

  const columns = [
    {name: "number", text: "Номер телефона", sort: "up"},
    {name: "calltime", text: "Время звонка", sort: ""},
    {name: "s_in_wait", text: "Время ожидания", sort: ""},
    {name: "s_in_talk", text: "Время разговора", sort: ""},
    {name: "agent", text: "Оператор", sort: ""},
  ]

  return (
    <div className="page">
      <Header/>
      <Main data={data} columns={columns}/>
    </div>
  );
}

export default App;
