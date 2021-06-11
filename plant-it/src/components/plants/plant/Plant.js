import { Divider } from '@material-ui/core';
import React from 'react';
import './Plant.css'

const DisplayPlants = (props) => {
    console.log(`Props: ${props.pie}`);
    return (
        <>
        {
            props.pie.map((pie, key) => 
            return(
                <tr key={key}>
                    <td></td>
                </tr>
            ))
        }
        </>
    );
};

export default DisplayPlants;