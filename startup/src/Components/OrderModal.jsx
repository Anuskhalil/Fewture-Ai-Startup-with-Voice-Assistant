import { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';


function Example() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const [OrderEmail, setOrderEmail] = useState('')
    // const [OrderText, setOrderText] = useState('')
    // const [OrderFeed, setOrderFeed] = useState('')

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            'service_z4tnntj',
            'template_s4e362u',
            form.current,
            'CjyflMHMvXhiUMqA3')

            .then((result) => {
                console.log(result.text);
                console.log('Message sent')
                toast.success('Data Sent Successfully! Thank You..')
                form.current.reset();
            }, (error) => {
                console.log(error.text);
            });


    }

    return (
        <>
            <Button variant="outline-light ms-auto" style={{ fontFamily: "cursive" }} onClick={handleShow}>
                Order Now
            </Button>


            <Modal show={show} onHide={handleClose} centered backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Order Here</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form ref={form} onSubmit={sendEmail} style={{fontFamily: "cursive"}}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control required name='user_email' type="email" placeholder="Add your Email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlText1">
                            <Form.Label>Website Url</Form.Label>
                            <Form.Control required name='user_web' type="text" placeholder="Add your Website here" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>About Web</Form.Label>
                            <Form.Control required name='user_feed' as="textarea" placeholder='Say Something' rows={3} />
                        </Form.Group>
                        <button className="btn btn-outline-dark mt-3 my-3 m-2" onClick={handleClose}>
                            Close
                        </button>
                        <button type="submit" className="btn btn-outline-dark mt-3 my-3" >
                            Submit
                        </button>
                        <Toaster />
                    </form>

                </Modal.Body>

            </Modal>
        </>
    );
}

export default Example;