import React from 'react'
import { Link } from 'react-router-dom';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Home = () => {
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

        <table className="table mt-2">
          <thead>
            <tr className='table-dark'>
              <th scope="col">id</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Work</th>
              <th scope="col">Contact</th>
              <th scope="col">Action</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>username</td>
              <td>email</td>
              <td>work</td>
              <td>mobile</td>
              <td className='d-flex justify-content-between'>
                <button className='btn btn-success'>
                  <RemoveRedEyeIcon />
                </button>
                <button className='btn btn-primary'>
                  <EditIcon />
                </button>
                <button className='btn btn-danger'>
                  <DeleteIcon />
                </button>
              </td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default Home