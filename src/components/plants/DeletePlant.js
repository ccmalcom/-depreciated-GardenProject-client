import React, {useState, useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const DeletePlant = (props) =>{
    // ! getting 503 error on response :(
    const deleteFetch = () =>{
        fetch(`https://wd85-plant-it2.herokuapp.com/plant/${props.plantToDelete.plantName}`, {
            method: 'DELETE',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization' : props.token
            })
        })
        .then(res => console.log(res))
        .then(() =>{props.fetchPlants()})
    }


    const [buttonClicked, setButtonClick] = useState(false);

    return(
        <Modal isOpen={true}
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
            {!buttonClicked ? <div>
                <button onClick={()=>{setButtonClick(true); deleteFetch()}}>Are you sure?</button>
                <button onClick={props.deleteModalOff}>Cancel</button> 
                </div>
                :
            <>
            <ModalHeader>
                <h3>Plant deleted!</h3>
            </ModalHeader>
            <ModalBody>
                <FontAwesomeIcon icon={faCheckCircle} size='6x'/>
                <p>If you were the user that created this plant, the plant has been delted from our table, forever (how sad). If not, it will remain in the table. You cannot delete another user's plant from the table. You may, however, edit the plant.</p>
                <br/>
                <p>Hint: if you need to edit a detail of a plant, use edit instead.</p>
            </ModalBody>
            <ModalFooter>
            <button onClick={props.deleteModalOff}>Back to Plant Index</button>
            </ModalFooter>
            </>
            }
        </Modal>
    )
}

export default DeletePlant;