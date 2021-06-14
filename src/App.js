import React, { useState, useEffect } from 'react';
import PlantsIndex from './components/plants/PlantsIndex';
// import SearchPlants from './components/plants/SearchPlants';

function App() {
  const [sessionToken, setSessionToken] = useState(''); //1

  useEffect (() =>{ //2
    if(localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const updateToken = (newToken) =>{ //3
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  }

  const clearToken =()=>{
    localStorage.clear();
    setSessionToken('');
  }
  
  const protectedViews = () =>{
    return(sessionToken === localStorage.getItem('token') ? <WorkoutIndex token={sessionToken}/> : <Auth updateToken={updateToken}/>)
  }
  return (
    <div className="App">
      <p>App Test</p>
      <PlantsIndex />
    </div>
  );
}

export default App;
