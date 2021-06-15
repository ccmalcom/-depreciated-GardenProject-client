import React, { useState, useEffect } from 'react';
import DisplayPlants from './plantTable/PlantTable';
import CreatePlant from './createPlant/CreatePlant';
import PlantView from './PlantView';
import AddToGarden from '../gardens/AddToGarden';
import { Container, Row, Col } from 'reactstrap';

const PlantsIndex = (props) => {

    const [plants, setPlants] = useState([]);
    const [viewActive, setViewActive] = useState(false);
    const [createActive, setCreateActive] = useState(false);
    const [plantToView, setPlantToView] = useState([]);
    const [gardenModalActive, setGardenModalActive] = useState(false);
    const [plantToGarden, setPlantToGarden] = useState([]);
    console.log(plants);
    console.log('view active:', viewActive)
    const fetchPlants = () => {
        fetch('http://wd85-plant-it.herokuapp.com/plant/all', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
        })
            .then(res => res.json())
            .then((plantData) => {
                setPlants(plantData)
                console.log(plants, plantData);
            })
    }
    // view functions
    const viewPlant = (plant) => {
        setPlantToView(plant);
        console.log(plant);
    }
    const viewOn = () => {
        setViewActive(true)
    }
    const viewOff = () => {
        setViewActive(false)
    }

    // add to garden functions (ignore this for now)
    const addToGarden = (plant) => {
        setPlantToGarden(plant);
    }
    const gardenModalOn = () => {
        setGardenModalActive(true)
    }
    const gardenModalOff = () => {
        setGardenModalActive(false)
    }

    // create functions (plantIt)
    const createActiveOn = () =>{
        setCreateActive(true);
    }
    const createActiveOff = () =>{
        setCreateActive(false)
    }

    useEffect(() => {
        fetchPlants();
    }, [])

    return (
        <Container>
            <div>
                <button onClick={createActiveOn}>PlantIt!</button>
                <DisplayPlants plants={plants} viewPlant={viewPlant} viewOn={viewOn} addToGarden={addToGarden} gardenModalOn={gardenModalOn} fetchPlants={fetchPlants} token={props.token} />
            </div>
            <div>
                {viewActive ? <PlantView plantToView={plantToView} viewOff={viewOff} addToGarden={addToGarden} gardenModalOn={gardenModalOn} /> : null}

                {gardenModalActive ? <AddToGarden plantToGarden={plantToGarden} gardenModalOff={gardenModalOff} token={props.token} /> : null}

                {createActive ? <CreatePlant fetchPlants={fetchPlants} token={props.token} createActiveOff={createActiveOff}/> : null }
            </div>
        </Container>
    )
    // const buttonHandler = () => setCreatePlant(true);


    // <>
    //     {createPlant ? <CreatePlant setCreatePlant={setCreatePlant} sessionToken={props.sessionToken}/> : null}
    //     {!createPlant ? <Button onClick={buttonHandler}>Plant It!</Button> : null}
    // </> 

    //!!! Need to add table above to display plants. Style components or bootstrap table --SC
}
export default PlantsIndex;