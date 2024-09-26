import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
// Redux
import { useDispatch } from 'react-redux'
import { progressVal } from '../redux/progress/progressSlice'; 

const Edit = () => {
    const dispatch = useDispatch(); //redux

    const navigate = useNavigate();

    const [editData, setEditData] = useState({
        title: "",
        description: ""
    });

    const { id } = useParams();

    const updateData = (e) => {
        const { name, value } = e.target;
        setEditData((preVal) => {
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

        const { title, description } = editData;

        // setProgress(10);
        // setTimeout(setProgress(70), 500);
        dispatch(progressVal(50));

        const res = await fetch(`https://crud-web-app-server.vercel.app/edit/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "email": email,
                "authorization": token
            },
            body: JSON.stringify({
                title, description
            })
        });

        const data = await res.json();
        dispatch(progressVal(100));

        if (res.status === 401) {
            alert(`pls login first`);
        }

        if (res.status === 500 || !data) console.log(`internal server error`);
        else if (res.status === 404) {
            alert(`such post or user not found`);
        }
        else if (res.status === 200) {
            alert(`data edited successfully`);
            navigate("/");
        }
    }

    return (
        <form className='container mt-5'>
            <div className="mb-3">
                <label for="editTitle" className="form-label">Title</label>
                <input type="text" className="form-control" id="editTitle" name='title' value={editData.title} onChange={updateData} />
            </div>
            <div className="mb-3">
                <label for="editDescription" className="form-label">Description</label>
                <input type="text" className="form-control" id="editDescription" name='description' value={editData.description} onChange={updateData} />
            </div>
            <button type="submit" className="btn btn-primary" onClick={sendData} >Submit</button>
        </form>
    )
}

export default Edit