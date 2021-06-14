// // ! When you click 'view plant' this will toggle
// const ViewPlant = (plant) =>{
//     fetch(`http://wd85-plant-it.herokuapp.com/plant/${plant.plantName}`,{
//         method: 'GET',
//         headers: new Headers ({
//             'Content-Type': 'application/json'
//         })
//     })
//     .then(res => res.json())
//         .then((plantData) =>{
//             setPlants(plantData)
//             console.log(plants, plantData);
//         }) 
// }