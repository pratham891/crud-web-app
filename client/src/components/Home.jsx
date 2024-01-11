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
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>title-one</td>
              <td>description-one</td>
              <td className='d-flex justify-content-between'>
                <Link to="/view/:id">
                  <button className='btn btn-success'>
                    <RemoveRedEyeIcon />
                  </button>
                </Link>
                <Link to="/edit/:id">
                  <button className='btn btn-primary'>
                    <EditIcon />
                  </button>
                </Link>
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