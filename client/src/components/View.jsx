import React from 'react';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const View = () => {
    return (
        <div className='container mt-5'>
            <div className="card" style={{ width: "24rem" }}>
                <div className="card-body">
                    <div className='mb-2 d-flex justify-content-between'>
                        <h5 className="card-title">Card title</h5>

                        <div className="add_btn" style={{ textAlign: "right" }} >
                            <Link to="/edit/:id">
                                <button className="btn btn-primary mx-2"><EditIcon /></button>
                            </Link>
                            <button className="btn btn-danger">
                                <DeleteIcon />
                            </button>
                        </div>

                    </div>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn btn-primary">Back to Home</a>
                </div>
            </div>
        </div>
    )
}

export default View