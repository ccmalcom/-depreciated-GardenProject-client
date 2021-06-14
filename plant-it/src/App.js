import React, { useState, useEffect } from 'react';
import './App.css';
//import Header from './site/Header';
import Sitebar from './site/Sitebar';
import Login from '../src/components/auth/Login';
import Auth from './components/auth/Auth';
import Footer from './site/Footer';

import SearchBar from './components/searchBar/SearchBar';
import SearchPlants from './components/searchBar/Search';

import Home from './site/Home';


import Auth from './components/auth/Auth'
master

import PlantsIndex from './components/plants/PlantsIndex';
// import GardenIndex from './components/gardens/GardenIndex'


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
    console.log(sessionToken);
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

      <Sitebar />
      <Home />
      {/* <Footer /> */}
      
      {/* <Login /> */}

      {/* <Sitebar />
      <br></br>
      <Login />
      <Header />
      <br></br>

      <SearchPlants />
      <br></br>
      <Footer />
  

      <Footer /> */}
      <Auth updateToken={updateToken}/>
      <PlantsIndex />

      {/* <GardenIndex /> */}

    </div>
  );
}

export default App;
