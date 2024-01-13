import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const DeleteButton = ({ id }) => {
    const handleDelete = async (e) => {
        const res = await fetch(`http://localhost:3003/delete/${id}`, {
            method: "DELETE",
        });

        const data = await res.json();

        if (res.status === 404 || !data) console.log(`error in deleteing data`);
        else {
            alert(`data deleted successfully`);
            console.log(`data deleted successfully`);
        }
    }

    return (
        <button className='btn btn-danger' onClick={handleDelete}>
            <DeleteIcon />
        </button>
    )
}

export default DeleteButton