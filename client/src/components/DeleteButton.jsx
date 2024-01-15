import React from 'react'
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';

const DeleteButton = ({ id }) => {
    let navigate = useNavigate();

    const handleDelete = async (e) => {
        const res = await fetch(`https://crud-web-app-server.vercel.app/delete/${id}`, {
            method: "DELETE",
        });

        const data = await res.json();

        if (res.status === 404 || !data) console.log(`error in deleteing data`);
        else {
            alert(`data deleted successfully`);
            console.log(`data deleted successfully`);
            if (window.location.pathname == "/") window.location.reload();
            else navigate("/");
        }
    }

    return (
        <button className='btn btn-danger' onClick={handleDelete}>
            <DeleteIcon />
        </button>
    )
}

export default DeleteButton