import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import MainBody from './components/MainBody';
import Sidebar from './components/Sidebar';




const App: React.FC = () => {
  

  return (
    <div className='App'>
      <Sidebar />
      <Header />
      <MainBody />
    </div>
  );
};





export default App;
