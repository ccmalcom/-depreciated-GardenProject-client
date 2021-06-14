// import React, {useState} from 'react';
// import {Table, Button} from 'reactstrap';
// // import './Plant.css'

// const DisplayGarden = (props) => {
//     const [plantName, setPlantName] = useState();
//     const [typeOfPlant, setTypeOfPlant] = useState();
//     const [lightingNeeds, setLightingNeeds] = useState();
//     const [waterNeeds, setWaterNeeds] = useState();
//     const [fertilizerNeeds, setFertilizerNeeds] = useState();
//     const [notes, setNotes] = useState();

//     const AddToGarden = (plant) =>{
//         fetch(`http://wd85-plant-it.herokuapp.com/garden/create`, {
//             method: 'CREATE',
//             body: JSON.stringify({plantName: plantName, typeOfPlant: typeOfPlant, lightingNeeds: lightingNeeds, waterNeeds: lightingNeeds, waterNeeds: waterNeeds, fertilizerNeeds: fertilizerNeeds, notes: notes}),
//             headers: new Headers ({
//                 'Content-Type': 'application/json',
//                 'Authorization' : props.token
//             })
//         })
//         .then((res) => res.json())
//         .then((gardenPlantData =>{
//             console.log(gardenPlantData);
//             setPlantName('');
//             setTypeOfPlant('');
//             setLightingNeeds('');
//             setWaterNeeds('');
//             setFertilizerNeeds('');
//             setNotes('');
//         }))
//     }
//     console.log(`Props: ${props.plants}`);

//     const gardenMapper = () =>{
//         return props.garden.map((garden, index) =>{
//             return(
//             <tr key={index}>
//                 <th scope='row'>{plant.plantName}</th>
//                 <td>{plant.typeOfPlant}</td>
//                 <td>{plant.lightingNeeds}</td>
//                 <td>{plant.waterNeeds}</td>
//                 <td>{plant.fertilizerNeeds}</td>
//                 <td>
//                     <button>View</button>
//                     <button>Delete</button>
//                 </td>
//             </tr>
//             )
//         })
//     }
//     return (
//         <>
//             <h2>Garden Index</h2>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Plant</th>
//                         <th>Type</th>
//                         <th>Lighting Needs</th>
//                         <th>Water Needs</th>
//                         <th>Fertilizer Needs</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {gardenMapper()}
//                 </tbody>
//             </table>
//         </>
//     )
// };

// export default DisplayGarden;