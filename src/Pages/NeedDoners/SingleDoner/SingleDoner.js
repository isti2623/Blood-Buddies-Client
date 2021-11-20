import React from 'react';
import './SingleDoner.css'

const SingleDoner = (props) => {
    const { patientName, age, bloodGroup, numBlood, details, contact, date } = props.doner;
    return (
        <div>
            <div className="container">
                <div className="col-md-12 card my-3 p-3">
                    <h4>Patient Name : {patientName}</h4>
                    <h4>Age : {age}</h4>
                    <small>{bloodGroup}</small>
                    <p>{numBlood}</p>
                </div>
                <div className="col-lg-4"></div>
            </div>
        </div>
    );
};

export default SingleDoner;