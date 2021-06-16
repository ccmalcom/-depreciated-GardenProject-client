import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import styled from 'styled-components';
import Login from './Login';
import Register from './Register';
import '../auth/Modal.css';




const ModalExample = (props) => {
    const {
        className
    } = props;

    const [modal, setModal] = useState(false);
    const [nestedModal, setNestedModal] = useState(false);
    const [closeAll, setCloseAll] = useState(false);

    const toggle = () => setModal(!modal);
    const toggleNested = () => {
    setNestedModal(!nestedModal);
    setCloseAll(false);
    }
    const toggleAll = () => {
    setNestedModal(!nestedModal);
    setCloseAll(true);
    }

    return (
    <div className='Box'>
        
        <Button id='start' onClick={toggle}>Start Planting!</Button>
        
        <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalBody>
        <Login updateToken={props.updateToken} />
        <br />
        <Button onClick={toggleNested}>Register Now!</Button>
        <Modal isOpen={nestedModal} toggle={toggleNested} onClosed={closeAll ? toggle : undefined}>
            <ModalHeader>Register now to start your garden!</ModalHeader>
            <ModalBody>
            <Register updateToken={props.updateToken} />
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={toggleNested}>Already have an account? Back to Login</Button>
            </ModalFooter>
            </Modal>
        </ModalBody>
        </Modal>
    </div>
    );
}

export default ModalExample;