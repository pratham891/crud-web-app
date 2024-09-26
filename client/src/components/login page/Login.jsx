import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Redux
import { useDispatch } from 'react-redux';
import { progressVal } from '../../redux/progress/progressSlice';

const Login = () => {
    const dispatch = useDispatch(); //redux

    const navigate = useNavigate();

    let [user, setUser] = useState({
        email: "",
        password: ""
    });

    // function to keep track of updating values
    const updateData = (e) => {
        const { name, value } = e.target;
        setUser((preVal) => {
            return {
                ...preVal,
                [name]: value
            }
        });
    }

    // api call req
    const sendUser = async (e) => {
        e.preventDefault();

        const { email, password } = user;

        dispatch(progressVal(50));

        const res = await fetch("https://crud-web-app-server.vercel.app/login", {
            method: "Post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        });

        const existUser = await res.json();

        dispatch(progressVal(100));

        if (res.status === 500 || !existUser) {
            alert(`can not sign in`);
        } else if (res.status === 404) {
            alert(`user not found or wrong email`);
        } else if (res.status === 401) {
            alert(`wrong password`);
        } else if (res.status === 200) {
            localStorage.setItem("token", existUser.token);
            localStorage.setItem("email", email);
            alert(`login success`);
            navigate("/");
        }
    }

    return (
        <form className='container mt-5'>
            <div className="mb-3">
                <label for="addEmail" className="form-label">Email</label>
                <input type="text" className="form-control" id="addEmail" name='email'
                    value={user.email}
                    onChange={updateData}
                />
            </div>
            <div className="mb-3">
                <label for="addPassword" className="form-label">Password</label>
                <input type="password" className="form-control" id="addPassword" name='password'
                    value={user.password}
                    onChange={updateData}
                />
            </div>
            <button type="submit" className="btn btn-primary" onClick={sendUser} >
                Submit
            </button>
            <div className='register-redirect' style={{ marginTop: "20px" }}>
                <p>New User? <a href="/register">Click here to Register</a></p>
            </div>
        </form>
    );
}

export default Login;