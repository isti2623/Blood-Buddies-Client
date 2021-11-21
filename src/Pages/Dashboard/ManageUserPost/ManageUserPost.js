import React, { useEffect, useState } from 'react';
import AdminDoner from '../AdminDoner/AdminDoner';

const ManageUserPost = () => {
    const [del, setDel] = useState(0);
    const [doners, setDoners] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/bloodPostReq")
            .then(res => res.json())
            .then(data => setDoners(data))
    }, [del])
    return (
        <div>

            {
                doners.map(doner => <AdminDoner
                    key={doner._id}
                    doner={doner}
                    del={del}
                    setDel={setDel}
                >
                </AdminDoner>)
            }
        </div>
    );
};

export default ManageUserPost;