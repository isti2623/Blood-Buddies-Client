import { faLocationArrow, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import footImg from '../../../images/logo-footer.png'

const Footer = () => {
    return (
        <div className='mt-5 bg-dark'>
            <div className='container mt-5 mb-5 p-5'>
                <div className="row ">
                    <div className="col-lg-4">
                        <img src={footImg} alt="" />
                    </div>
                    <div className="col-lg-8">
                        <p className='text-light'>We are world largest and trustful blood donation center. We have been working since 1973 with a prestigious vision to helping patient to provide blood. We are working all over the world, organizing blood donation campaign to grow awareness among the people to donate blood.</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4 text-light mt-5">
                        <h2>CONTACT US
                        </h2>
                        <p className='text-light'> <FontAwesomeIcon icon={faMailBulk} /> istiaqueahmed2019.bd@gmail.com
                        </p>
                        <p className='text-light'> <FontAwesomeIcon icon={faLocationArrow} /> Mirpur-1, Dhaka-1216
                        </p>
                        <p className='text-light'> <FontAwesomeIcon icon={faPhone} /> +88-01-322-3080-92
                        </p>
                    </div>
                    <div className="col-lg-4 text-light mt-5">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;