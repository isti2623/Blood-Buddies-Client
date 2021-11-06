import React from 'react';
import { Link } from 'react-router-dom';
import homeCampaign from '../../../images/homeCampaign.jpg'
const HomeCampaign = () => {
    return (
        <div className='my-5'>
            <div className="container">
                <div className="row">

                    <div className="col-lg-6 my-5 bg-light p-3 text-card shadow">
                        <div>
                            <h1 className='fw-bold mt-5 ms-3 fs-1'>OUR CAMPAIGNS

                            </h1>
                            <span className='divider div-head ms-3'></span>
                            <p className='mt-3 ms-3'>All over the world we have arranged total sixty thousands donation campaign and visit thousands of other venues on various occasions.
                            </p>
                            <Link to='/campaign'> <div className="btn btn-danger p-3 ms-2 my-3 fw-bold">LOAD ALL CAMPAIGNS</div></Link>
                        </div>
                    </div>
                    <div className="col-lg-6 my-5">
                        <img className='img-fluid' src={homeCampaign} alt="" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HomeCampaign;