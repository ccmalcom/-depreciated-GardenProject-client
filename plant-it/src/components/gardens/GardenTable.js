// import React from 'react';
// import { Table, Button } from 'reactstrap';
// // import './Plant.css'

// const GardenTable = (props) => {


//     const deleteGarden = () => {
//         fetch(`http://wd85-plant-it.herokuapp.com/garden/all`, {
//             method: 'Delete',
//             headers: new Headers({
//                 'Content-Type': 'application/json',
//                 'Authorization': props.token
//             })
//         })
//                 .then(() => props.fetchGarden())
//         }
    



//     const gardenMapper = () => {
//         return props.garden.map((garden, index) => {
//             return (
//                 <tr key={index}>
//                     <th scope='row'>{garden.plantName}</th>
//                     <td>{garden.typeOfPlant}</td>
//                     <td>
//                         <button>View</button>
//                         <Button onClick={() => { deleteGarden(garden) }}>Delete</Button>
//                     </td>
//                 </tr>
//             )
//         })
//     }
//             return (
//                 <>
//                     <h2>Garden Index</h2>
//                     <Table striped>
//                         <tbody>
//                             {gardenMapper()}
//                         </tbody>
//                     </ Table>
//                 </>
//             )
//     }
//     export default GardenTable;