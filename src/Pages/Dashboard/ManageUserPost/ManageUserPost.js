import React, { useEffect, useState } from 'react';
import AdminDoner from '../AdminDoner/AdminDoner';

const ManageUserPost = () => {
    const [doners, setDoners] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/bloodPostReq")
            .then(res => res.json())
            .then(data => setDoners(data))
    }, [])
    return (
        <div>

            {
                doners.map(doner => <AdminDoner
                    key={doner._id}
                    doner={doner}
                >
                </AdminDoner>)
            }
        </div>
    );
};

export default ManageUserPost;