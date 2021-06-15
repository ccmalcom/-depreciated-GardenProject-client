import React, {useState} from 'react';
// import './Plant.css'

const DisplayPlants = (props) => {

    const plantMapper = () =>{
        return props.plants.map((plant, index) =>{
            return(
            <tr key={index}>
                <th scope='row'>{plant.plantName}</th>
                <td>{plant.typeOfPlant}</td>
                <td>{plant.lightingNeeds}</td>
                <td>{plant.waterNeeds}</td>
                <td>{plant.fertilizerNeeds}</td>
                <td>
                    <button onClick={()=>{props.gardenModalOn(); props.addToGarden(plant)}}>MyGarden <b>+</b></button>
                    <button onClick={() => {props.viewOn(); props.viewPlant(plant)}}>View</button>
                </td>
            </tr>
            )
        })
    }
    return (
        <>
            <h2>Plant Index</h2>
            <table>
                <thead>
                    <tr>
                        <th>Plant</th>
                        <th>Type</th>
                        <th>Lighting Needs</th>
                        <th>Water Needs</th>
                        <th>Fertilizer Needs</th>
                    </tr>
                </thead>
                <tbody>
                    {plantMapper()}
                </tbody>
            </table>
        </>
    )
};

export default DisplayPlants;