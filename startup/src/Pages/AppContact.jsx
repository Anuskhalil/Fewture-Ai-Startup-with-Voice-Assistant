import { useState, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import '../App.css'


function BasicExample() {

  // const [email, setEmail] = useState('')
  // const [url, setUrl] = useState('')
  // const [text, setText] = useState('')

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
    <div id='contact' style={{ backgroundColor: '#0F294E' }}>
      <div className="container py-5 p-5">
        <div className="row">
          <div className="col mt-5 py-5">
            <form ref={form} onSubmit={sendEmail} style={{fontFamily: "cursive"}}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='fs-5 fw-bold text-warning' >Email address</Form.Label>
                <Form.Control name='user_email' type="email" placeholder="Enter email" required />
                <Form.Text className="text-light">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicUrl">
                <Form.Label className='fs-5 fw-bold text-warning'>Website Url</Form.Label>
                <Form.Control name='user_web' type="url" placeholder="Website Url " required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label className='fs-5 fw-bold text-warning'>About Web</Form.Label>
                <Form.Control name='user_feed' as="textarea" rows={4} placeholder='Say Something' required />
              </Form.Group>
              <button type="submit" className="btn mt-3 my-3 p-2 px-5" style={{backgroundColor:'#0A162E', color:'white'}}>
                Order Now
              </button>
              <Toaster />
            </form>
          </div>
        </div>
      </div>

    </div>
  );
}

export default BasicExample;
