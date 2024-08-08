import React from 'react';
import './App.css';
import Sidebar from './component/sidebar';
import MainDashBoard from './component/mainDashBoard';
function App() {
  return (
    <div className="flex w-full">
      <Sidebar />
      <MainDashBoard />
    </div>
  );
}

export default App;
