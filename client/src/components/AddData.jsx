import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Redux
import { useDispatch } from 'react-redux'
import { progressVal } from '../redux/progress/progressSlice';

const AddData = () => {
    const dispatch = useDispatch(); //redux

    const navigate = useNavigate();

    const [data, setData] = useState({
        title: "",
        description: ""
    });

    const updateData = (e) => {
        const { name, value } = e.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name]: value
            }
        });
    }

    const sendData = async (e) => {
        e.preventDefault();

        const email = localStorage.getItem("email");
        const token = localStorage.getItem("token");

        const { title, description } = data;

        dispatch(progressVal(20));

        const res = await fetch("https://crud-web-app-server.vercel.app/add-data", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "email": email,
                "authorization": token
            },
            body: JSON.stringify({
                title, description
            })
        });

        const dataData = await res.json();
        dispatch(progressVal(100));
        console.log(dataData);

        if (res.status === 401) {
            alert(`pls login to continue`);
            navigate("/login");
        }

        if (res.status === 500 || !data) {
            alert(`internal server error`);
        } else if (res.status === 404) {
            alert(`no such user found`);
        } else if (res.status === 200) {
            alert(`data addedd successfully`);
            console.log(`data addedd successfully`);
            navigate("/");
        }
    }

    return (
        <form className='container mt-5'>
            <div className="mb-3">
                <label for="addTitle" className="form-label">Title</label>
                <input type="text" className="form-control" id="addTitle" name='title'
                    value={data.title}
                    onChange={updateData}
                />
            </div>
            <div className="mb-3">
                <label for="addDescription" className="form-label">Description</label>
                <input type="text" className="form-control" id="addDescription" name='description'
                    value={data.description}
                    onChange={updateData}
                />
            </div>
            <button type="submit" className="btn btn-primary" onClick={sendData} >
                Submit
            </button>
        </form>
    )
}

export default AddData