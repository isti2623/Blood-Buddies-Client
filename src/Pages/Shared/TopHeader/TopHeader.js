import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import React from 'react';

const TopHeader = () => {
    return (
        <div className='bg-danger'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 p-3 text-white">
                        <FontAwesomeIcon className='fs-5 ' icon={faAddressBook} />
                        <small className='ms-3 fs-5 fw-bold'>Contact :</small> <small className='fs-6'> Mirpur , Dhaka , 1216</small>

                        <FontAwesomeIcon className='fs-5 ms-3' icon={faPhoneAlt} />
                        <small className='ms-3 fs-5 fw-bold'>Call Us :</small> <small className='fs-6'> +880-1322-308092</small>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TopHeader;