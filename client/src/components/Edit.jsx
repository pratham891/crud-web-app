import React from 'react'

const Edit = () => {
    return (
        <form className='container mt-5'>
            <div class="mb-3">
                <label for="exampleInputTitle" class="form-label">Title</label>
                <input type="text" class="form-control" id="exampleInputTitle" aria-describedby="titleHelp" />
            </div>
            <div class="mb-3">
                <label for="exampleInputDescription" class="form-label">Description</label>
                <input type="text" class="form-control" id="exampleInputDescription" />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    )
}

export default Edit