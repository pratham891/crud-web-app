import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
// Redux
import { useDispatch } from 'react-redux';
import { progressVal } from '../redux/progress/progressSlice';

const DeleteButton = ({ id }) => {
    const dispatch = useDispatch(); //redux

    let navigate = useNavigate();

    const handleDelete = async (e) => {
        const email = localStorage.getItem("email");
        const token = localStorage.getItem("token");

        dispatch(progressVal(50));

        const res = await fetch(`https://crud-web-app-server.vercel.app/delete/${id}`, {
            method: "DELETE",
            headers: {
                "email": email,
                "authorization": token
            }
        });

        const data = await res.json();
        dispatch(progressVal(100));

        if (res.status === 401) {
            alert(`pls login to perform this action`);
            navigate("/login");
        }

        if (res.status === 500 || !data) alert(`internal server error`);
        else if (res.status == 404) {
            alert(`such post or user not found`);
        }
        else if (res.status === 200) {
            alert(`data deleted successfully`);
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