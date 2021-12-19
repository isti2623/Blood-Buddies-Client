import React, { useEffect, useState } from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import TopHeader from '../../Shared/TopHeader/TopHeader';
import SingleDoner from '../SingleDoner/SingleDoner';

const NeedDoners = () => {
    const [doners, setDoners] = useState([]);
    useEffect(() => {
        fetch("https://nameless-thicket-31086.herokuapp.com/bloodPostReq")
            .then(res => res.json())
            .then(data => setDoners(data))
    }, [])
    return (
        <div>
            <TopHeader></TopHeader>
            <Navigation></Navigation>

            {
                doners.map(doner => <SingleDoner
                    key={doner._id}
                    doner={doner}
                >
                </SingleDoner>)
            }

        </div>
    );
};

export default NeedDoners;