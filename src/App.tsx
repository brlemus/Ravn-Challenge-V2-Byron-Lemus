import React, { useState } from 'react';
import Content from './component/content/Content';
import Header from './component/hearder/Hearder';
import SideBar from './component/sideBar/SideBar';
import './App.css';

function App() {
  const [idPerson, setIdPerson] = useState("");
  return (
    <>
      <Header/>
      <div className="main">
          <SideBar setIdPerson = {setIdPerson}/>
          <Content idPerson = {idPerson} />
      </div>
      
    </>
  );
}

export default App;
