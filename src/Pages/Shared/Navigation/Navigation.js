import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import logo from '../../../images/logo.png'
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar sticky="top" collapseOnSelect expand="lg" bg='light' variant="light">
                <Container>
                    <Link to='/home'><Navbar.Brand><img src={logo} alt="" /></Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink
                                className='ms-4 text-decoration-none text-dark mt-3'
                                to="/home"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "black"
                                }}
                            >
                                HOME
                            </NavLink>
                            <NavLink
                                className='ms-4 text-decoration-none text-dark mt-3'
                                to="/about"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "black"
                                }}
                            >
                                ABOUT US
                            </NavLink>
                            <NavLink
                                className='ms-4 text-decoration-none text-dark mt-3'
                                to="/campaign"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "black"
                                }}
                            >
                                CAMPAIGN
                            </NavLink>
                            <NavLink
                                className='ms-4 text-decoration-none text-dark mt-3'
                                to="/needDoners"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "black"
                                }}
                            >
                                NEED DONERS
                            </NavLink>
                            <NavLink
                                className='ms-4 text-decoration-none text-dark mt-3'
                                to="/addBloodRequest"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "black"
                                }}
                            >
                                ADD BLOOD REQUEST
                            </NavLink>
                            <NavLink
                                className='ms-4 text-decoration-none text-dark mt-3'
                                to="/blog"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "black"
                                }}
                            >
                                BLOG
                            </NavLink>
                            <NavLink
                                className='ms-4 text-decoration-none text-dark mt-3'
                                to="/contact"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "black"
                                }}
                            >
                                CONTACT
                            </NavLink>
                            <div>
                                {
                                    user?.email ?
                                        <Button onClick={logOut} className='ms-5 mb-3 mt-1' variant="danger">Logout</Button>
                                        :
                                        <Link to='/login'><Button className='ms-5 mb-3 mt-1' variant="danger">Login</Button></Link>
                                }
                            </div>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;