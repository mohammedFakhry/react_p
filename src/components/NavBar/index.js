import React, { Fragment } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import './NavBar.css'

const NavBar = () => {
    return (
    <Fragment>
        <Navbar className='Navbar' bg="primary" variant="dark" expand="lg" text="white">
        <Container fluid>
            <Navbar.Brand href="#">LOGO</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="text-center fw-bold text-white">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/#About">About</Nav.Link>
                <Nav.Link href="/#Work">Work</Nav.Link>
                <Nav.Link href="/#Service">Service</Nav.Link>
                <Nav.Link href="/#Profile">Profile</Nav.Link>
                <Nav.Link href="/#SoshialMedia">Soshial Media</Nav.Link>
                <Nav.Link href="/#Protfolio">Protfolio</Nav.Link>
                <Nav.Link href="/Contact">Contact</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </Fragment>
    )
}

export default NavBar