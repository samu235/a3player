import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import FromSite from '../formSite/FormSite';
import Button from '../button/Button';


export default function ModalCreateItem(props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const textView = (props?.item?._id) ? "Editar" : "Nuevo"

    return (
        <>
            <Button className={props?.stylesBtn}  onClick={handleShow}>
                {textView}
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{textView} </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FromSite item={props?.item} returnOK={handleClose}/>
                </Modal.Body>
            </Modal>
        </>
    );
}