import React, { useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import './style.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">CRUD Web App</a>
                {/* {
                    localStorage.getItem("email") ? <ProfileBtn /> : <LoginBtn />
                } */}

                {/* In current version, only profile icon will be showing since if user is logged out, automatically it will be redirected to login page... so no need for providing manual option of login */}
                <ProfileBtn />
            </div>
        </nav>
    );
}

const ProfileBtn = () => {
    const [show, setShow] = useState(false);

    const logoutOperator = () => {
        localStorage.removeItem("email");
        localStorage.removeItem("token");
        alert(`Logged Out`);
    }

    return (
        <div className='nav-profile'>
            <div onClick={() => { setShow(!show) }} >
                <button className='btn btn-secondary'>
                    <PersonIcon />
                </button>
            </div>

            {
                show ?
                    <div className='nav-toggle'>
                        <div className='nav-toggle-1'>
                            <a href="/profile">View Profile</a>
                        </div>

                        <div className='nav-toggle-2'>
                            <a onClick={logoutOperator} href="/login" >Logout</a>
                        </div>
                    </div>
                    : null
            }
        </div>
    );
}

const LoginBtn = () => {
    const [show, setShow] = useState(false);

    return (
        <div className='nav-profile'>
            <div onClick={() => { setShow(!show) }} >
                <button className='btn btn-secondary'>
                    Login
                </button>
            </div>

            {
                show ?
                    <div className='nav-toggle'>
                        <div className='nav-toggle-1'>
                            <a href="/login">Login</a>
                        </div>
                        <div className='nav-toggle-2'>
                            <a href="/register">Sign Up</a>
                        </div>
                    </div>
                    : null
            }
        </div>
    );
}

export default Navbar;