import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '../button/Button';
import DeleteSiteService from '../../services/DeleteSiteService';
import { useDispatch } from 'react-redux'
import { deleteOneSite } from '../../reducers/sitesReducer';

export default function ModalDeleteItem(props) {
    const [show, setShow] = useState(false);
    const [msnError, setMsnError] = useState("");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch(state => state.sitesStore)

    function returnOk(){
        handleClose()
    }

    function deleteItem(){
        DeleteSiteService(props?.item?._id).then(data => {
            if(data.deletedCount){
                dispatch(deleteOneSite(props?.item?._id))
                returnOk()
            }else if(data.error){
                setMsnError(data.error)
            }
        })
    }
    
    return (
        <>
            <Button className={props?.stylesBtn}  onClick={handleShow}>
                Eliminar
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Eliminar</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    ¿Seguro que desea eliminar el Site: {props?.item?.name}?
                    <div>
                        <Button color='red' onClick={handleClose}>Cancelar</Button>
                        <Button color='green' onClick={deleteItem}>SI</Button>
                    </div>
                    <div>{msnError}</div>
                </Modal.Body>
            </Modal>
        </>
    );
}