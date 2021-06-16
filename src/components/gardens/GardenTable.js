import React from 'react';
import { Table, Button } from 'reactstrap';


const GardenTable = (props) => {


    const deleteGarden = () => {
        fetch(`https://wd85-plant-it2.herokuapp.com/garden/${props.plantToView.plantName}`, {
            method: 'Delete',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
                .then(res => console.log(res))
                .then(() => props.fetchGarden())
        }




    const gardenMapper = () => {
        return props.plants.map((plant, index) => {
        return (
            <tr key={index}>
                <td>{plant.plantName}</td>
                <td>{plant.typeOfPlant}</td>
                <td>{plant.lightingNeeds}</td>
                <td>{plant.waterNeeds}</td>
                <td>{plant.fertilizerNeeds}</td>
                <td>
                    <button onClick={() => {props.viewOn(); props.viewPlant(plant)}}>View</button>
                    <Button onClick={deleteGarden}>Delete</Button>
                </td>
            </tr>
        )
        })
    }
    return (
        <>
            <h2>MyGarden Index</h2>

            <Table striped>
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
                    {gardenMapper()}
                </tbody>
            </ Table>

        </>
    )
}
export default GardenTable;