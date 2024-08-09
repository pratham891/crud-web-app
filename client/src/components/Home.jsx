import React from 'react'
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteButton from './DeleteButton';
import './homeStyle.css';


const Home = () => {
  const navigate = useNavigate();

  const [getData, setGetData] = useState([]);

  const getGetData = async (e) => {

    const email = localStorage.getItem("email");
    const token = localStorage.getItem("token");

    const res = await fetch("/api/view", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "email": email,
        "authorization": token
      }
    });

    const data = await res.json();

    if (res.status === 401) {
      alert(`Pls login first`);
      console.log(`err`);
      navigate("/login");
    }

    if (res.status === 500 || !data) console.log(`internal server error`);
    else if (res.status === 200) {
      setGetData(data);
      console.log(`data fetched successfully`);
    }
  }

  useEffect(() => {
    getGetData();
  }, []);

  return (
    <div className='mt-5'>
      <div className='container mb-5' style={{ overflow: "auto" }}>
        <div className='add_btn mt-2' style={{ textAlign: "right" }}>
          <Link to="/add-data">
            <button className='btn btn-primary'>
              Add Data
            </button>
          </Link>
        </div>

        <table className="table table-striped mt-2">
          <thead>
            <tr className='table-dark'>
              <th scope="col">id</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>

            {
              getData.map((element, id) => {
                return (
                  <>
                    <tr>
                      <th scope="row">{id + 1}</th>
                      <td>{element.title}</td>
                      <td>{element.description}</td>
                      <td className='d-flex justify-content-between'>
                        <Link to={`/view/${element._id}`}>
                          <button className='btn btn-success'>
                            <RemoveRedEyeIcon />
                          </button>
                        </Link>
                        <Link to={`/edit/${element._id}`}>
                          <button className='btn btn-primary'>
                            <EditIcon />
                          </button>
                        </Link>
                        <Link to={`/`}>
                          <DeleteButton id={element._id} />
                        </Link>
                      </td>
                    </tr>
                  </>
                );
              })
            }
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default Home