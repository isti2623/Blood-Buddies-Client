import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import teamOne from '../../../images/team_1.jpg'
import teamTwo from '../../../images/team_2.jpg'
import teamThree from '../../../images/team_3.jpg'
import './Volunteers.css'
const Volunteers = () => {
    return (
        <div>
            <div className='banner-vol'>
                <div className="row container mb-5">
                    <div className="col-lg-5"></div>
                    <div className="col-lg-7 text-center my-5 p-3 text-card shadow">
                        <div>
                            <p className=' ms-3 fs-1 text-white'>OUR VOLUNTEERS
                            </p>
                            <span className='divider div-head ms-5'></span>
                            <h1 className='fw-bold ms-3 fs-1 text-white mb-2'>The volunteers who give their time and talents help to fulfill our mission.
                            </h1>
                        </div>
                    </div>
                </div>
                <div className='container custom-card-pad'>
                    <div className="row">
                        <div className="col-lg-4">
                            <Card className=' shadow m-2' >
                                <Card.Img variant="top" src={teamOne} />
                                <Card.Body>
                                    <Card.Title className='fw-bold'>ALEXANDER GARY
                                    </Card.Title>
                                    <Card.Text>
                                        CO-FOUNDER
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-lg-4">
                            <Card className=' shadow m-2'>
                                <Card.Img variant="top" src={teamTwo} />
                                <Card.Body>
                                    <Card.Title className='fw-bold'>MELISSA MUNOZ</Card.Title>
                                    <Card.Text>
                                        FOUNDER
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-lg-4">
                            <Card className=' shadow m-2'>
                                <Card.Img variant="top" src={teamThree} />
                                <Card.Body>
                                    <Card.Title className='fw-bold'>JOHN ABRAHAM</Card.Title>
                                    <Card.Text>
                                        MANAGER
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>

                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4"></div>
                            <div className="col-lg-8">
                                <Link to='/'> <div className="btn btn-danger p-3 custom-button-pad fw-bold">BECOME A VOLUNTEER</div></Link>
                            </div>
                        </div>
                    </div>

                </div>

            </div>


        </div>
    );
};

export default Volunteers;