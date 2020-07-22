import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Mainbody from './components/Mainbody';
import Mainbody2 from './components/Mainbody2';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
     <Header />
     <Mainbody />
     <Mainbody2 />
     <Footer/>
    </div>
  );
}

export default App;
