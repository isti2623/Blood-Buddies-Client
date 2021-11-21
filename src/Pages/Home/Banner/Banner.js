import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Banner.css';

const Banner = () => {
    const { user } = useAuth();
    return (

        <div className=' banner mt-2'>
            <div className="container">
                <div className="row">

                    <div className="col-lg-6">
                        <div className='text-part'>
                            <h4 className='text-danger fs-2 ms-1'><span>{user.email && <span>Hello</span>}<span className="text-white fw-bold"></span><span> {user.displayName}</span></span> <br />
                                Donate blood , save life!</h4>
                            <h1 className='text-white ms-1 custom-h1'>Donate Blood And Inspires Others.</h1>
                            <Link to='needDoners'><Button className='mt-2 ms-2 rounded p-3' variant="danger fw-bold">DONATE NOW</Button></Link>
                        </div>
                    </div>
                    <div className="col-lg-6">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;