import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';

const Edit = () => {
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

        const { title, description } = editData;

        const res = await fetch(`https://crud-web-app-server.vercel.app/edit/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title, description
            })
        });

        const data = await res.json();

        if (res.status === 404 || !data) console.log(`error in editing data`);
        else {
            alert(`data edited successfully`);
            console.log(`data edited successfully`);
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