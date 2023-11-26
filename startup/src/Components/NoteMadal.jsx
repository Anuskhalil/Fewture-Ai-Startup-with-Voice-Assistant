import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Example() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant='' className='mt-5' style={{backgroundColor:'#0A162E', color:'white', fontFamily: "cursive"}} onClick={handleShow}>
                Check Notes
            </Button>

            <Modal className='bg-dark'  show={show} onHide={handleClose} backdrop="static" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Notes:</Modal.Title>
                </Modal.Header>
                <Modal.Body className='bg-dark text-white' style={{fontFamily: "cursive"}}>
                    <li>All plans come with a 15-day free trial.
                    </li>
                    <li>Prices are subject to change based on usage and business requirements.</li>
                    <li>Custom plans are available for businesses with unique needs.</li>
                    <li>Additional services can be added to any plan as needed.</li>
                    <li>Feel Free to reach me out for any help and querry.
                        <h6 className='ms-4 mt-2'>Gmail: anuskhalil77@gmail.com</h6>
                    </li>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="" style={{backgroundColor:'#0A162E', color:'white'}} onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Example;