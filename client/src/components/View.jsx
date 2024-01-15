import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteButton from './DeleteButton';

const View = () => {

    const [getData, setGetData] = useState([]);
    const { id } = useParams();

    const getGetData = async (e) => {
        const res = await fetch(`https://crud-web-app-server.vercel.app/view/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 404 || !data) console.log(`error in fetching data`);
        else {
            setGetData(data);
            console.log(`data fetched successfully`);
        }
    }

    useEffect(() => {
        getGetData();
    }, []);

    return (
        <div className='container mt-5'>
            <div className="card" style={{ width: "24rem" }}>
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