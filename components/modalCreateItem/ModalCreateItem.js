import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import 'bootstrap/dist/css/bootstrap.min.css';
import FromSite from '../formSite/FormSite';


export default function ModalCreateItem(props) {

    const [show, setShow] = useState(false);
    const [item, setItem] = useState({});

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        if (props?.item) {
            setItem(props?.item)
        }

    }, [props?.item])

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Nuevo
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Nuevo </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <FromSite item={item}></FromSite>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}