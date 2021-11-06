import React from 'react';
import './JoinWithUs.css'
import review from '../../../images/homereview.jpg'


const JoinWithUs = () => {
    return (

        < div className='review-banner' >
            {/*  <h3>Recipient Opinion</h3>
                                            <p>I wish I could tell you my donor how grateful I am for your selfless act.You gave me new life. We may be coworkers or schoolmates or just two in the same community.I'm very grateful to you. </p>
                                            <img className='w-100 img-fluid img-round' src={userOne} alt="" />
                                            <h6>Logan Munson</h6>
                                            <span>CTO, Fulcrum Design, USA</span> */}
            <div className="container ">
                <div className='text-field'>
                    <div>
                        <div>
                            <h6 className='text-white'>Awesome Words From Members</h6>
                            <span className='divider div-head ms-3'></span>
                            <h2 className='text-point'>JOIN WITH US AND SAVE LIFE</h2>
                        </div>
                    </div>
                </div>
                <div className='review-part'>
                    <div className="row">
                        <div className="col-lg-6">

                        </div>
                        <div className="col-lg-6">
                            <img className='img-fluid w-100 mb-5 shadow' src={review} alt="" />
                        </div>
                    </div>
                </div>



            </div>
        </div >
    );
};

export default JoinWithUs;