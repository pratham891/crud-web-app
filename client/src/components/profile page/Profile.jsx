import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Redux
import { useDispatch } from 'react-redux';
import { progressVal } from '../../redux/progress/progressSlice';

const Profile = () => {
    const dispatch = useDispatch(); //redux

    const navigate = useNavigate();

    const [getData, setGetData] = useState([]);

    const getGetData = async (e) => {
        const email = localStorage.getItem("email");
        const token = localStorage.getItem("token");

        // setProgress(10);
        dispatch(progressVal(20));

        const res = await fetch(`https://crud-web-app-server.vercel.app/profile/`, {
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
            alert(`no such user found`);
        }
        else if (res.status === 200) {
            setGetData(data.thisUser);
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
                        <h2 className="card-title">{getData.username}</h2>
                        <h6 className="card-title">{getData.email}</h6>
                    </div>

                    <a href="/" className="btn btn-primary">Back to Home</a>
                </div>
            </div>
        </div>
    );
}

export default Profile;