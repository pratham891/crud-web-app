import React from 'react';
import PersonIcon from '@mui/icons-material/Person';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">CRUD Web App</a>

                <a href="/profile">
                    <button className='btn btn-secondary'>
                        <PersonIcon />
                    </button>
                </a>
            </div>
        </nav>
    );
}

export default Navbar;