import React from 'react'

const Edit = () => {
    return (
        <form className='container mt-5'>
            <div className="mb-3">
                <label for="editTitle" className="form-label">Title</label>
                <input type="text" className="form-control" id="editTitle" />
            </div>
            <div className="mb-3">
                <label for="editDescription" className="form-label">Description</label>
                <input type="text" className="form-control" id="editDescription" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default Edit