import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import SinPost from '../SinPost/SinPost';


const MyPost = () => {
    const { user } = useAuth();
    const [posts, setPosts] = useState([]);
    const [del, setDel] = useState(0);
    useEffect(() => {
        const url = `http://localhost:5000/bloodPostReqDashboard?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [del])
    return (
        <div>
            <h2 className='text-center fw-bold'>{user.displayName} Posted : {posts.length}</h2>

            {
                posts.map(post => <SinPost
                    key={post._id}
                    post={post}
                    del={del}
                    setDel={setDel}
                >
                </SinPost>)
            }

        </div>
    );
};

export default MyPost;