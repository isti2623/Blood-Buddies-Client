import React, { useEffect, useState } from 'react';
import AdminDoner from '../AdminDoner/AdminDoner';

const ManageUserPost = () => {
    const [del, setDel] = useState(0);
    const [doners, setDoners] = useState([]);
    useEffect(() => {
        fetch("https://nameless-thicket-31086.herokuapp.com/bloodPostReq")
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