import React from 'react';
import './Volunteers.css'
const Volunteers = () => {
    return (
        <div className='banner-vol'>
            <div className="row container mb-5">
                <div className="col-lg-5"></div>
                <div className="col-lg-7 text-center my-5 p-3 text-card shadow">
                    <div>
                        <p className='mt-5 ms-3 fs-1 text-white'>OUR VOLUNTEERS
                        </p>
                        <span className='divider div-head ms-5'></span>
                        <h1 className='fw-bold ms-3 fs-1 mt-3 text-white'>The volunteers who give their time and talents help to fulfill our mission.
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Volunteers;