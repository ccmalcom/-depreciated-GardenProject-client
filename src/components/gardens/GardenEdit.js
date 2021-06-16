import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'

const GardenEdit = (props) => {

    const [editNotes, setEditNotes] = useState(props.plantToView.notes)


    const gardenUpdate = (e) => {
        props.setEditModalActive(false);
        e.preventDefault();
        fetch(`https://wd85-plant-it2.herokuapp.com/garden/${props.plantToView.plantName}/notes`, {
            method: 'PUT',
            body: JSON.stringify({ notes: editNotes }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
            .then(res => console.log(res))
            .then(() => {props.fetchGarden()})
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
                    <button onClick={props.editModalOff}><FontAwesomeIcon icon={faArrowAltCircleLeft} size="3x" /></button>
                    <h3>Edit Plant</h3>
                </ModalHeader>
                <ModalBody>
                    <Form onSubmit={gardenUpdate}>
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

export default GardenEdit;