import React, {useState} from 'react';

const PlantEdit = (props) => {
    const [editPlantName, setEditPlantName] = useState(props.plantToUpdate.plantName)
    const [editTypeOfPlant, setEditTypeOfPlant] = useState(props.plantToUpdate.typeOfPlant)
    const [editLightingNeeds, setEditLightingNeeds] = useState(props.plantToUpdate.lightingNeeds)
    const [editWaterNeeds, setEditWaterNeeds] = useState(props.plantToUpdate.waterNeeds)
    const [editFertilizerNeeds, setEditFertilizerNeeds] = useState(props.plantToUpdate.fertilizerNeeds)
    const [editNotes, setEditNotes] = useState(props.plantToUpdate.notes)


    const plantUpdate = (event, plant) => {
        event.preventDefault();
        //!! Need to update url/endpoint
        fetch(`http://localhost:XYZ/endpoint/${props.plantToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({log: {plantName:editPlantName, typeOfPlant:editTypeOfPlant, lightingNeeds:editLightingNeeds, waterNeeds:editWaterNeeds, fertilizerNeeds:editFertilizerNeeds, notes:editNotes}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then((res) => {
            props.fetchPlants();
            props.updateOff();
        });
    };

    return (

        //! between divs below is where form will go for editing--workout log uses reactstrap form groups.
        <div>
            <p>PlantEdit Test</p>
        </div>
    )
}

export default PlantEdit;