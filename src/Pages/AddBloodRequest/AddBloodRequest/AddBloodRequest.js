import React from 'react';
import { Form, Button, NavDropdown } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';
import TopHeader from '../../Shared/TopHeader/TopHeader';

const AddBloodRequest = () => {
    const { user } = useAuth();
    return (
        <div>
            <TopHeader></TopHeader>
            <Navigation></Navigation>
            <Form className='w-50 my-5 ms-5'>
                <Form.Group className="mb-3">
                    <Form.Label>Patient Name</Form.Label>
                    <Form.Control type="text" placeholder={user.displayName} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Patient Age</Form.Label>
                    <Form.Control type="number" placeholder='Patient Age' />
                </Form.Group>



                <Form.Label>Blood Group</Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>Select</option>
                    <option value="1">A+</option>
                    <option value="2">A-</option>
                    <option value="3">B+</option>
                    <option value="4">B-</option>
                    <option value="5">O+</option>
                    <option value="6">O-</option>
                    <option value="7">AB+</option>
                    <option value="8">AB-</option>
                </Form.Select>

                <Form.Label className='my-3'>Number of Bags</Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>1</option>
                    <option value="1">2</option>
                    <option value="2">3</option>
                    <option value="3">4</option>
                    <option value="3">5</option>
                    <option value="3">6</option>
                </Form.Select>

                <Form.Group className="mb-3   mt-3">
                    <Form.Label>Why is blood needed?</Form.Label>
                    <Form.Control placeholder='Why is blood needed?' as="textarea" rows={3} />
                </Form.Group>

                <Form.Group className="mb-3   mt-3">
                    <Form.Label>Extra Contact Number?</Form.Label>
                    <Form.Control placeholder='Extra Contact Number' as="textarea" rows={2} />
                </Form.Group>

                <Button className='mt-3' variant="danger" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default AddBloodRequest;