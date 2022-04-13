import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function ModalPopup(props) {
    const [show, setShow] = useState(false);
    const { name, heading, content, onSave } = props;

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSave = () => {
        onSave();
        handleClose();
    }


    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                {name}
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{heading}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{content}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalPopup;