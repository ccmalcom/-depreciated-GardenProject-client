import React, { useState, useEffect } from 'react';
import './App.css';
//import Header from './site/Header';
import Sitebar from './site/Sitebar';
import Login from '../src/components/auth/Login';
import Auth from './components/auth/Auth';
import Footer from './site/Footer';
import ModalExample from './components/auth/Modal';

import Home from './site/Home';

import PlantsIndex from './components/plants/PlantsIndex';



function App() {
  const [sessionToken, setSessionToken] = useState('');

  useEffect (() =>{ 
    if(localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const updateToken = (newToken) =>{ 
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    
  }

  const clearToken =()=>{
    localStorage.clear();
    setSessionToken('');
  }
  
  // const protectedViews = () =>{
  //   return(sessionToken === localStorage.getItem('token') ? <WorkoutIndex token={sessionToken}/> : <Auth updateToken={updateToken}/>)
  // }
  return (
    <div className="App">
      {console.log(sessionToken)}
      <Sitebar />
      <Home />
      
      <Auth />
      <br></br>
      {/* <Footer /> */}
      {/* <Header /> */}
      {/* <Login /> */}
      <ModalExample />
      {/* <Sitebar />
      <br></br>
      <Login />
      <Header />
      <br></br>
      <Footer /> */}
      <PlantsIndex />
    </div>
  );
}

export default App;
