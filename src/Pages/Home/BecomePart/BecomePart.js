import React from 'react';
import { Link } from 'react-router-dom';
import './BecomePart.css'

const BecomePart = () => {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div>
                        <div className="container my-5">
                            <div className="row my-5">
                                <div className="col-lg-11 shadow">
                                    <div className='text-center p-3'>
                                        <h1 className=' mt-5'>Become A Part Of Great Work Today</h1>
                                        <p className=' mt-3'>You can give blood at any of our blood donation venues all over the world.
                                            We have total sixty thousands donor centers and visit thousands of other venues on various occasions.</p>
                                        <Link to='/'> <div className="btn btn-danger p-3 custom-button-pad fw-bold button-area">JOIN WITH US</div></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BecomePart;