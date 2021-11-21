import { Form, Button, Alert } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';
import TopHeader from '../../Shared/TopHeader/TopHeader';
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import './AddBloodRequest.css'

import "react-datepicker/dist/react-datepicker.css";

const AddBloodRequest = () => {
    const { user } = useAuth();
    const [bloodSuccess, setBloodSuccess] = useState(false);

    const initialInfo = { patientName: user.displayName, email: user.email, age: '', bloodGroup: '', numBlood: '', details: '', contact: '' }
    const [bloodReq, setBloodReq] = useState(initialInfo);
    const [startDate, setStartDate] = useState(new Date());





    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...bloodReq };
        newLoginData[field] = value;
        setBloodReq(newLoginData);
    }

    const handleBloodReqSubmit = e => {
        e.preventDefault();
        const bloodPost = { ...bloodReq }
        setBloodReq(bloodPost);
        //send to server
        fetch("http://localhost:5000/bloodPostReq", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bloodPost)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setBloodSuccess(true);
                }
            })


    }



    return (
        <div>
            <TopHeader></TopHeader>
            <Navigation></Navigation>
            <div className="col-md-8 add-blood">
                <Form onSubmit={handleBloodReqSubmit} className='w-50 my-5 ms-5'>
                    <Form.Group className="mb-3">
                        <Form.Label className="text-danger fw-bold">Name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="patientName"
                            onBlur={handleOnBlur}
                            defaultValue={user.displayName}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className="text-danger fw-bold">Email</Form.Label>
                        <Form.Control
                            required
                            disabled
                            type="text"
                            name="email"
                            onBlur={handleOnBlur}
                            defaultValue={user.email}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className="text-danger fw-bold">Patient Age</Form.Label>

                        <Form.Control
                            required
                            type="number"
                            name='age'
                            onBlur={handleOnBlur}
                            placeholder='Patient Age' />
                    </Form.Group>



                    <Form.Label className="text-danger fw-bold">Blood Group</Form.Label>
                    <Form.Select
                        onBlur={handleOnBlur}
                        name='bloodGroup'
                        required
                        aria-label="Default select example">
                        <option>Select</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                    </Form.Select>

                    <Form.Label className='my-3 text-danger fw-bold'>Number of Bags</Form.Label>
                    <Form.Select
                        onBlur={handleOnBlur}
                        name='numBlood'
                        required
                        aria-label="Default select example">
                        <option name='numone'>1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </Form.Select>

                    <Form.Group className="mb-3 text-danger  fw-bold mt-3">
                        <Form.Label>Why is blood needed?</Form.Label>
                        <Form.Control
                            placeholder='Why is blood needed?'
                            onBlur={handleOnBlur}
                            required
                            name='details'
                            as="textarea"
                            rows={3} />
                    </Form.Group>

                    <Form.Group className="mb-3 text-danger  fw-bold mt-3">
                        <Form.Label>Contact Number and Address?</Form.Label>
                        <Form.Control placeholder='01322308092 , Mirpur-1,Dhaka-1216'
                            as="textarea"
                            onBlur={handleOnBlur}
                            required
                            name='contact'
                            rows={2} />
                    </Form.Group>
                    <Form.Label className="text-danger fw-bold">When Needed?</Form.Label>
                    <DatePicker
                        value={bloodReq.date}
                        selected={startDate}
                        name="date"
                        onChange={(date) => setBloodReq({ ...bloodReq, date: date.toDateString() })} />

                    <Button className='mt-3' variant="danger" type="submit">
                        Share Post
                    </Button>
                    {
                        bloodSuccess && <Alert className='mt-3' variant='success'>
                            Congratulations , Blood Request Posted
                        </Alert>
                    }
                </Form>
            </div>
        </div>
    );
};

export default AddBloodRequest;