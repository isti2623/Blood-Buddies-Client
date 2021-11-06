import React from 'react';
import './HelpfullInfo.css'

const HelpfullInfo = () => {
    return (
        <div className='banner-help'>
            <div className="row container mb-5">
                <div className="col-lg-6"></div>
                <div className="col-lg-6 my-5 bg-light p-3 text-card shadow">
                    <div>
                        <p className='mt-5 ms-3 fs-1'>Good To Know
                        </p>
                        <span className='divider div-head ms-3'></span>
                        <h1 className='fw-bold ms-3 fs-1 mt-3'>Helpful Information
                        </h1>

                        <ul>
                            <li>Maintain a healthy iron level by eating iron rich foods.</li>
                            <li>Drink an extra 16 oz. of water prior to your donation.</li>
                            <li>Avoid alcohol consumption before your blood donation.
                            </li>
                            <li>Remember to bring the donor card or national ID/Passport.
                            </li>
                            <li>Finally, Try to get a good night sound sleep after donation.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HelpfullInfo;