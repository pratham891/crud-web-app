import React from 'react'

const AddData = () => {
    return (
        <form className='container mt-5'>
            <div className="mb-3">
                <label for="addTitle" className="form-label">Title</label>
                <input type="text" className="form-control" id="addTitle" />
            </div>
            <div className="mb-3">
                <label for="addDescription" className="form-label">Description</label>
                <input type="text" className="form-control" id="addDescription" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default AddData