import React, {useState, useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const AddToGarden = (props) =>{
    const plantName = props.plantToGarden.plantName
    const typeOfPlant = props.plantToGarden.typeOfPlant
    const lightingNeeds = props.plantToGarden.lightingNeeds
    const waterNeeds = props.plantToGarden.waterNeeds
    const fertilizerNeeds = props.plantToGarden.fertilizerNeeds
    const notes = props.plantToGarden.notes

    const sendToGarden = () =>{
        fetch(`http://wd85-plant-it2.herokuapp.com/garden/create`, {
            method: 'POST',
            body: JSON.stringify({plantName: plantName, typeOfPlant: typeOfPlant, lightingNeeds: lightingNeeds, waterNeeds: waterNeeds, fertilizerNeeds: fertilizerNeeds, notes: notes}),
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization' : props.token
            })
        })
        .then(res => console.log(res))
    }

    useEffect(() => {
        sendToGarden();
    }, [])

    return(
        <Modal isOpen={true}
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
            <ModalHeader>
            <button onClick={props.gardenModalOff}><FontAwesomeIcon icon={faArrowAltCircleLeft} size="3x"/></button>
                <h3>Plant added to MyGarden!</h3>
            </ModalHeader>
            <ModalBody>
                <FontAwesomeIcon icon={faCheckCircle} size='6x'/>
                <p>You can now keep track this plant in the MyGarden section of the site. Click the button below to go there now, or the back arrow to return to the plant index!</p>
            </ModalBody>
            <ModalFooter>
            <button>Go to MyGarden</button>
            </ModalFooter>
        </Modal>
    )
}

export default AddToGarden;