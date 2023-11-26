import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import OrderModal from './OrderModal'
import { Link } from 'react-router-dom'



function BasicExample() {

    return (
        <Navbar expand="lg" style={{backgroundColor:'#0A162E'}}>
            <Container>
                <img style={{ borderRadius: '10px' }}
                    alt=""
                    src="/src/images/logo.png"
                    width="50"
                    height="50"
                    className="d-inline-block align-top"
                />
                <Navbar.Brand href="#home">
                    <span className='ms-3 text-white fs-4' style={{ fontFamily: "cursive" }}>Fewture-Ai</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" style={{backgroundColor:'white'}} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='gap-3'>
                        <Link className='text-black text-decoration-none text-white' style={{ fontFamily: "cursive" }} to='/' >Home</Link>
                        <Link className='text-black text-decoration-none text-white' style={{ fontFamily: "cursive" }} to='/Pricing'>Pricing</Link>
                        <Link className='text-black text-decoration-none text-white' style={{ fontFamily: "cursive" }} to='/Contact'>Contact Us</Link>
                    </Nav>
                    <OrderModal />

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;
