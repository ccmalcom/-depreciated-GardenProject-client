import React from 'react';
import './App.css';
import Header from './site/Header';
import Sitebar from './site/Sitebar';
import Login from '../src/components/auth/Login';
//import Auth from './components/auth/Auth';
import Footer from './site/Footer';


function App() {
  return (
    <div className="App">
      <Sitebar />
      <br></br>
      <Login />
      <Header />
      <br></br>
      <Footer />
    </div>
  );
}

export default App;
