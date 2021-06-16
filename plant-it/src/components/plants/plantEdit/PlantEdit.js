import React, {useState} from 'react';
import { Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'

const PlantEdit = (props) => {
    const [editPlantName, setEditPlantName] = useState(props.plantToUpdate.plantName)
    const [editTypeOfPlant, setEditTypeOfPlant] = useState(props.plantToUpdate.typeOfPlant)
    const [editLightingNeeds, setEditLightingNeeds] = useState(props.plantToUpdate.lightingNeeds)
    const [editWaterNeeds, setEditWaterNeeds] = useState(props.plantToUpdate.waterNeeds)
    const [editFertilizerNeeds, setEditFertilizerNeeds] = useState(props.plantToUpdate.fertilizerNeeds)
    const [editNotes, setEditNotes] = useState(props.plantToUpdate.notes)


    const plantUpdate = (e) => {
        props.editModalOff(); 
        e.preventDefault();
        fetch(`http://wd85-plant-it2.herokuapp.com/plant/${props.plantToUpdate.plantName}`, {
            method: 'PUT',
            body: JSON.stringify({plantName:editPlantName, typeOfPlant:editTypeOfPlant, lightingNeeds:editLightingNeeds, waterNeeds:editWaterNeeds, fertilizerNeeds:editFertilizerNeeds, notes:editNotes}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(res => console.log(res))
        .then(()=>{props.fetchPlants()})
    };

    return (

        //! between divs below is where form will go for editing--workout log uses reactstrap form groups.
        <div>
            <Modal isOpen={true}
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
                <ModalHeader>
                <button onClick={props.editModalOff}><FontAwesomeIcon icon={faArrowAltCircleLeft} size="3x"/></button>
                <h3>Edit Plant</h3>
                </ModalHeader>
            <ModalBody>
            <Form onSubmit={plantUpdate}>
                <FormGroup>
                    <Label>Plant Name</Label>
                    <Input type='text' value={editPlantName} onChange={(e) => setEditPlantName(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label>Type of Plant</Label>
                    <Input type='text' value={editTypeOfPlant} onChange={(e) => setEditTypeOfPlant(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label>Lighting Needs</Label>
                    <Input type='text' value={editLightingNeeds} onChange={(e) => setEditLightingNeeds(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label>Water Needs</Label>
                    <Input type='text' value={editWaterNeeds} onChange={(e) => setEditWaterNeeds(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label>Fertilizer Needs</Label>
                    <Input type='text' value={editFertilizerNeeds} onChange={(e) => setEditFertilizerNeeds(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label>Notes</Label>
                    <Input type='text' value={editNotes} onChange={(e) => setEditNotes(e.target.value)} />
                </FormGroup>
                <Button type='submit'>Submit</Button>
            </Form>
            </ModalBody>
            </Modal>
        </div>
    )
}

export default PlantEdit;