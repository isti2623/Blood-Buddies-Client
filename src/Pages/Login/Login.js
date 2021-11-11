import React from 'react';
import { Form, Button } from 'react-bootstrap';
import Navigation from '../Shared/Navigation/Navigation';
import login from '../../images/login.jpg'

const Login = () => {
    return (
        <div>
            <Navigation></Navigation>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <Form className='w-50 my-5 ms-5'>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button variant="danger" type="submit">
                                Login
                            </Button>
                        </Form>
                    </div>
                    <div className="col-lg-6">
                        <img src={login} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;