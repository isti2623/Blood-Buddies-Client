import avator from '../../../images/buddies_avator.png'


const SinPost = (props) => {
    const { patientName, age, bloodGroup, numBlood, details, contact, date, _id } = props.post;
    const { del, setDel } = props;
    /* const [postDel, setPostDel] = useState(); */
    const handleDeleteBlood = id => {
        const url = `https://nameless-thicket-31086.herokuapp.com/bloodPostReq/${id}`
        fetch(url, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    setDel(del + 1);
                    alert('deleted successfully');
                }
            })
    }

    return (
        <div className='doner my-5'>
            <div className="container  card my-3">
                <div className='d-flex'>
                    <div className="col-lg-2">
                        <img className='mt-3' src={avator} alt="" />

                    </div>

                    <div className="col-md-6">
                        <h2 className='mt-3'><span className='text-danger fw-bold'>Name:</span> {patientName}</h2>
                        <h4 className='mt-3'><span className='text-danger fw-bold'>Age:</span> {age}</h4>
                        <h6 className='mt-3'><span className='text-danger fw-bold'>Details:</span> {details}</h6>
                        <div className="btn btn-danger mb-2" onClick={() => handleDeleteBlood(_id)} >DELETE</div>

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

export default SinPost;