// ! When you click 'view plant' this will toggle


import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'

function PlantView(props) {
    
    return (
    <Modal isOpen={true}
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    >
        <ModalHeader>
        <button onClick={props.viewOff}><FontAwesomeIcon icon={faArrowAltCircleLeft} size="3x"/></button>
            <h3>Details</h3>
        </ModalHeader>
        <ModalBody>
            <dl>
                <h4>{props.plantToView.plantName}</h4>
                <br />
                <dt>Type of Plant:</dt>
                    <dd>{props.plantToView.typeOfPlant}</dd>
                <dt>Lighting Needs:</dt>
                    <dd>{props.plantToView.lightingNeeds}</dd>
                <dt>Water Needs:</dt>
                    <dd>{props.plantToView.waterNeeds}</dd>
                <dt>Fertilizer Needs:</dt>
                    <dd>{props.plantToView.fertilizerNeeds}</dd>
                <dt>Notes:</dt>
                    <dd>{props.plantToView.notes}</dd>
            </dl>
        </ModalBody>
        <ModalFooter>
            {/* {props.token.user.id === props.plantToView.creator ? console.log('yes!') : console.log('No!')} */}
        <button onClick={()=>{props.editModalOn(); props.editPlant(props.plantToView); props.viewOff()}}>Edit Details</button>
        <button onClick={()=>{props.gardenModalOn(); props.addToGarden(props.plantToView); props.viewOff()}}>MyGarden <b>+</b></button>
        <button onClick={()=>{props.deleteModalOn(); props.deleteThisPlant(props.plantToView); props.viewOff()}}>Delete</button>
        </ModalFooter>
    </Modal>
    );
}

export default PlantView;