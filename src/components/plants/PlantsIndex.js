import React, {useState, useEffect} from 'react';
import DisplayPlants from './plant/Plant';
import CreatePlant from './createPlant/CreatePlant';

const PlantsIndex = (props) => {
    
    const [plants, setPlants] = useState([]);
    const [editActive, setEditActive] = useState(false);
    // const [createPlant, setCreatePlant] = useState(false);
    const [plantToEdit, setPlantToEdit] = useState([]);
    console.log(plants);

    const fetchPlants = () =>{
        fetch ('http://localhost:3010/plant/all', {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json'
            }),
        })
            .then(res => res.json())
            .then((plantData) =>{
                setPlants(plantData)
                console.log(plants, plantData);
            }) 
    }

    const editPlant = (plant) =>{
        setPlantToEdit(plant);
        console.log(plant);
    }

    const editOn = () =>{
        setEditActive(true)
    }
    const editOff = () =>{
        setEditActive(false)
    }

    useEffect(() => {
        fetchPlants();
        console.log(`plants: ${plants}, editPlant: ${editPlant}, editOn: ${editOn}, fetchPlants: ${fetchPlants}`);
    }, [])

    return(
        <Container>
            <Row>
                <Col md='3'>
                    <CreatePlant fetchPlants={fetchPlants}
                </Col>
            </Row>
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