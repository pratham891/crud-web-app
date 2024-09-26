import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteButton from './DeleteButton';
// Redux
import { useDispatch } from 'react-redux'
import { progressVal } from '../redux/progress/progressSlice'; 

const View = () => {
    const dispatch = useDispatch(); //redux

    const navigate = useNavigate();

    const [getData, setGetData] = useState([]);
    const { id } = useParams();

    const getGetData = async (e) => {
        const email = localStorage.getItem("email");
        const token = localStorage.getItem("token");

        // setProgress(10);
        dispatch(progressVal(20));

        const res = await fetch(`https://crud-web-app-server.vercel.app/view/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "email": email,
                "authorization": token
            }
        });

        // setProgress(50);
        dispatch(progressVal(50));

        const data = await res.json();

        // setProgress(100);
        dispatch(progressVal(100));

        if (res.status === 401) {
            alert(`pls login to continue`);
            navigate("/login");
        }

        if (res.status === 500 || !data) alert(`internal server error`);
        else if (res.status === 404) {
            alert(`such post or user not found`);
        }
        else if (res.status === 200) {
            setGetData(data);
        }
    }

    useEffect(() => {
        getGetData();
    }, []);

    return (
        <div className='container mt-5'>
            <div className="card">
                <div className="card-body">
                    <div className='mb-2 d-flex justify-content-between'>
                        <h5 className="card-title">{getData.title}</h5>

                        <div className="add_btn" style={{ textAlign: "right" }} >
                            <Link to={`/edit/${getData._id}`}>
                                <button className="btn btn-primary mx-2"><EditIcon /></button>
                            </Link>
                            <DeleteButton id={id} />
                        </div>

                    </div>
                    <p className="card-text">{getData.description}</p>
                    <a href="/" className="btn btn-primary">Back to Home</a>
                </div>
            </div>
        </div>
    )
}

export default View