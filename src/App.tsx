import React from 'react';
import Content from './component/content/Content';
import Header from './component/hearder/Hearder';
import SideBar from './component/sideBar/SideBar';
import './App.css';



function App() {
  return (
    <>
      <Header/>
      <div className="main">
          <SideBar/>
          <Content/>
      </div>
      
    </>
  );
}

export default App;
