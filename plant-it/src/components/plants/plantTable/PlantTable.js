import React, {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import './Plant.css'

const DisplayPlants = (props) => {
    const [plantName, setPlantName] = useState();
    const [typeOfPlant, setTypeOfPlant] = useState();
    const [lightingNeeds, setLightingNeeds] = useState();
    const [waterNeeds, setWaterNeeds] = useState();
    const [fertilizerNeeds, setFertilizerNeeds] = useState();
    const [notes, setNotes] = useState();

    const AddToGarden = (plant) =>{
        fetch(`http://wd85-plant-it.herokuapp.com/garden/create`, {
            method: 'CREATE',
            body: JSON.stringify({plantName: plantName, typeOfPlant: typeOfPlant, lightingNeeds: lightingNeeds, waterNeeds: lightingNeeds, waterNeeds: waterNeeds, fertilizerNeeds: fertilizerNeeds, notes: notes}),
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization' : props.token
            })
        })
        .then((res) => res.json())
        .then((gardenPlantData =>{
            setPlantName(plant.plantName);
            setTypeOfPlant(plant.typeOfPlant);
            setLightingNeeds(plant.lightingNeeds);
            setWaterNeeds(plant.waterNeeds);
            setFertilizerNeeds(plant.fertilizerNeeds);
            setNotes(plant.notes);
            console.log(`Plant: ${plantName}, type: ${typeOfPlant}, lighting: ${lightingNeeds}, water: ${waterNeeds}, fertilizer: ${fertilizerNeeds}, notes: ${notes}`);
        }))
    }
    console.log(`Props: ${props.plants}`);



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
                    <button onClick={()=>{AddToGarden(plant)}}>MyGarden <b>+</b></button>
                    <button>View</button>
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