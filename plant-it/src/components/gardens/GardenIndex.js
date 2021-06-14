// import React, {useState, useEffect} from 'react';
// //import DisplayPlants from './plantTable/PlantTable';
// //import CreatePlant from './createPlant/CreatePlant';
// //import PlantView from './PlantView';
// import {Container, Row, Col} from 'reactstrap';

// const GardenIndex = (props) => {
    
//     const [garden, setGarden] = useState([]);
//     const [viewActive, setViewActive] = useState(false);
//      const [createGarden, setCreateGarden] = useState(false);
//     const [gardenToView, setGardenToView] = useState([]);
//      const [gardenActive, setGardenActive] = useState(false);
//      const [plantToGarden, setPlantToGarden] = useState([]);
//     console.log(garden);

//     const fetchGarden = () =>{
//         fetch ('http://wd85-plant-it.herokuapp.com/garden/all', {
//             method: 'GET',
//             headers: new Headers ({
//                 'Content-Type': 'application/json'
//             }),
//         })
//             .then(res => res.json())
//             .then((gardenData) =>{
//                 setGarden(gardenData)
//                 console.log(garden, gardenData);
//             }) 
//     }
//     // view functions
//     const viewGarden = (garden) =>{
//         setGardenToView(garden);
//         console.log(garden);
//     }
//     const viewOn = () =>{
//         setViewActive(true)
//     }
//     const viewOff = () =>{
//         setViewActive(false)
//     }

//     // add to garden functions (ignore this for now)
//     // const addToGarden = (plant) =>{
//     //     setPlantToGarden(plant);
//     // }
//     // const

//     useEffect(() => {
//         fetchGarden();
//         console.log(`garden: ${garden}, viewGarden: ${viewGarden}, viewOn: ${viewOn}, fetchGarden: ${fetchGarden}`);
//     }, [])

//     return(
//         <Container>
//             <Row>
//                 <Col md='3'>
//                     <CreateGarden fetchGarden={fetchGarden} token={props.token}/>
//                 </Col>
//                 <Col md='9'>
//                     <DisplayGarden garden={garden} viewGarden={viewGarden} gardenToView={gardenToView} viewOn={viewOn} fetchGarden={fetchGarden} token={props.token}/>
//                 </Col>
//                 {viewActive ? <GardenView GardenToView={gardenToView} viewOff={viewOff} token={props.token} fetchGarden={fetchGarden} /> : <></>}
//             </Row>
//         </Container>
//     )
//     // const buttonHandler = () => setCreatePlant(true);


//     // <>
//     //     {createPlant ? <CreatePlant setCreatePlant={setCreatePlant} sessionToken={props.sessionToken}/> : null}
//     //     {!createPlant ? <Button onClick={buttonHandler}>Plant It!</Button> : null}
//     // </> 

//     //!!! Need to add table above to display plants. Style components or bootstrap table --SC
// }
// export default GardenIndex;