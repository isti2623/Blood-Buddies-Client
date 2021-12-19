import React, { useEffect, useState } from 'react';
import SingleRev from '../SingleRev/SingleRev';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://nameless-thicket-31086.herokuapp.com/addReviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='container'>
            <h2 className='text-center my-3 fw-bold fs-1 text-danger'>Review</h2>
            <div className="row">
                {
                    reviews.map(review => <SingleRev
                        key={review._id}
                        review={review}
                    >
                    </SingleRev>)
                }
            </div>
        </div>
    );
};

export default Review;