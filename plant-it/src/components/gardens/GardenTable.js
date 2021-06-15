import React from 'react';
import { Table, Button } from 'reactstrap';
// import './Plant.css'

const GardenTable = (props) => {


    // const deleteGarden = () => {
    //     fetch(`http://wd85-plant-it.herokuapp.com/garden/${plantName}`, {
    //         method: 'Delete',
    //         headers: new Headers({
    //             'Content-Type': 'application/json',
    //             'Authorization': props.token
    //         })
    //     })
    //             .then(() => props.fetchGarden())
    //     }
    



    const gardenMapper = () => {
        // return props.plants.map((plant, index) => {
            return (
                 <tr>
                    {/* <td>{plant.plantName}</td> */}
                    {/* <td>{plant.typeOfPlant}</td> */}
                    <td>plantName</td>
                    <td>type</td>
                    <td>
                        <button>View</button>
                        <Button>Delete</Button>
                    </td>
                </tr>
            )
        // })
    }
            return (
                <>
                    <h2>Garden Index</h2>
                    <Table striped>
                        <tbody>
                            {gardenMapper()}
                        </tbody>
                    </ Table>
                </>
            )
    }
    export default GardenTable;