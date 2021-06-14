import React from 'react';
import './Logout.css';
import exitSign from '../../assets/exit.png';




const Logout = (props) => {
    return (
        <div>
            <img id="logout" 
            src={exitSign} 
            alt="exitSign" 
            onClick={props.clearSession}/>
        </div>
    )
}

export default Logout;