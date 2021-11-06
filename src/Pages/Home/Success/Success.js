import { faAward, faBookMedical, faCoffee, faHeart, faLayerGroup, faPumpMedical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Success = () => {
    return (
        <div className='container my-5'>
            <div className="row">
                <div className="col-lg-3 card ">
                    <div class="card-body text-center">
                        <FontAwesomeIcon className='fs-1 text-danger' icon={faHeart} />
                        <h5 class="card-title mt-2 text-danger">2578
                        </h5>
                        <h3 class="card-text">Success Smile
                        </h3>
                    </div>
                </div>
                <div className="col-lg-3 card">
                    <div class="card-body text-center">
                        <FontAwesomeIcon className='fs-1 text-danger' icon={faPumpMedical} />
                        <h5 class="card-title mt-2 text-danger">3235</h5>
                        <h3 class="card-text">Happy Donors</h3>
                    </div>
                </div>
                <div className="col-lg-3 card">
                    <div class="card-body text-center">
                        <FontAwesomeIcon className='fs-1 text-danger' icon={faLayerGroup} />
                        <h5 class="card-title mt-2 text-danger">3568</h5>
                        <h3 class="card-text">Happy Recipient
                        </h3>
                    </div>
                </div>
                <div className="col-lg-3 card">
                    <div class="card-body text-center">
                        <FontAwesomeIcon className='fs-1 text-danger' icon={faAward} />
                        <h5 class="card-title mt-2 text-danger">1314</h5>
                        <h3 class="card-text">Total Awards</h3>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Success;