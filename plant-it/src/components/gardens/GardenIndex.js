import React, { useState, useEffect } from 'react';
//import DisplayPlants from './plantTable/PlantTable';
//import CreatePlant from './createPlant/CreatePlant';
//import PlantView from './PlantView';
import { Container, Row } from 'reactstrap';
import GardenTable from './GardenTable'

const GardenIndex = (props) => {

    const [plants, setPlants] = useState([]);
    const [viewActive, setViewActive] = useState(false);
    const [plantToView, setPlantToView] = useState([]);
    
    let baseURL = 'https://wd85-plant-it2.herokuapp.com/garden/all';

    const fetchGarden = () => {
        fetch(baseURL, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
            .then((res) => res.json())
            .then((plantData) => {
                setPlants(plantData)
                console.log(plants, plantData);
            })
    }



    //view functions
    const viewPlant = (plant) => {
        setPlantToView(plant);
    }
    const viewOn = () => {
    setViewActive(true)
}
const viewOff = () => {
    setViewActive(false)
}



useEffect(() => {
    fetchGarden();
}, [])

return (
    <Container>
        <Row>
            <GardenTable plants={plants} viewPlant={viewPlant} viewOn={viewOn} fetchGarden={fetchGarden} token={props.token} />

            {/* {viewActive ? <GardenView plantToView={plantToView} viewOff={viewOff} token={props.token} fetchGarden={fetchGarden} /> : <></>} */}
        </Row>
    </Container>
)
}




export default GardenIndex;