import React from 'react';
import './WhoWeAre.css'
import whoWeAre from '../../../images/whoweare.jpg'

const WhoWeAre = () => {
    return (
        <div className='my-5'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 my-5 bg-light p-3 text-card shadow">
                        <div>
                            <h1 className='fw-bold mt-5 ms-3 fs-1'>Who We Are?
                            </h1>
                            <span className='divider div-head ms-3'></span>
                            <p className='mt-3 ms-3'>Blood Buddies is for public donation center with blood donation members in the changing health care system.</p>
                            <ul>
                                <li>Specialist blood donors and clinical supervision.</li>
                                <li>Increasing communication with our members.</li>
                                <li>High quality assessment, diagnosis and treatment.
                                </li>
                                <li>Examine critically to ensure alignment.
                                </li>
                                <li>The extra care of a multi-disciplinary team.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 my-5">
                        <img className='img-fluid' src={whoWeAre} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhoWeAre;