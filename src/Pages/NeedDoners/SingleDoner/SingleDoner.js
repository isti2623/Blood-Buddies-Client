import React from 'react';
import avator from '../../../images/buddies_avator.png'
import './SingleDoner.css'

const SingleDoner = (props) => {
    const { patientName, age, bloodGroup, numBlood, details, contact, date } = props.doner;
    return (
        <div className='doner my-5'>
            <div className="container  card my-3 ms-5">
                <div className='d-flex'>
                    <div className="col-lg-2">
                        <img className='mt-3' src={avator} alt="" />

                    </div>

                    <div className="col-md-6">
                        <h2 className='mt-3'><span className='text-danger fw-bold'>Name:</span> {patientName}</h2>
                        <h4 className='mt-3'><span className='text-danger fw-bold'>Age:</span> {age}</h4>
                        <h6 className='mt-3'><span className='text-danger fw-bold'>Details:</span> {details}</h6>

                    </div>
                    <div className="col-md-4 mb-5 date-card">
                        <p className='date'>{date}</p>
                        <h6 className=' fw-bold'><span className='text-danger fw-bold'>Blood Group:</span> {bloodGroup}</h6>
                        <h6 className='mt-2 fw-bold'><span className='text-danger fw-bold'>Number Of Blood:</span> {numBlood}</h6>
                        <h6 className='mt-2'><span className='text-danger fw-bold'>Contact:</span> {contact}</h6>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleDoner;