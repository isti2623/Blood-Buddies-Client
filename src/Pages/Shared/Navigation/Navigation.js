import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo.png'
import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg='white' variant="light">
                <Container>
                    <Link to='/home'><Navbar.Brand><img src={logo} alt="" /></Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink
                                className='ms-4 text-decoration-none text-dark'
                                to="/home"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "black"
                                }}
                            >
                                HOME
                            </NavLink>
                            <NavLink
                                className='ms-4 text-decoration-none text-dark'
                                to="/about"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "black"
                                }}
                            >
                                ABOUT US
                            </NavLink>
                            <NavLink
                                className='ms-4 text-decoration-none text-dark'
                                to="/campaign"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "black"
                                }}
                            >
                                CAMPAIGN
                            </NavLink>
                            <NavLink
                                className='ms-4 text-decoration-none text-dark'
                                to="/needDoners"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "black"
                                }}
                            >
                                NEED DONERS
                            </NavLink>
                            <NavLink
                                className='ms-4 text-decoration-none text-dark'
                                to="/addBloodRequest"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "black"
                                }}
                            >
                                ADD BLOOD REQUEST
                            </NavLink>
                            <NavLink
                                className='ms-4 text-decoration-none text-dark'
                                to="/blog"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "black"
                                }}
                            >
                                BLOG
                            </NavLink>
                            <NavLink
                                className='ms-4 text-decoration-none text-dark'
                                to="/contact"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "black"
                                }}
                            >
                                CONTACT
                            </NavLink>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;