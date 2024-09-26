import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Redux
import { useDispatch } from 'react-redux';
import { progressVal } from '../../redux/progress/progressSlice';

const Register = () => {
  const dispatch = useDispatch(); //redux

  const navigate = useNavigate();

  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: ""
  });

  const updateData = (e) => {
    const { name, value } = e.target;
    setNewUser((preVal) => {
      return {
        ...preVal,
        [name]: value
      }
    });
  }

  const sendNewUser = async (e) => {
    e.preventDefault();

    const { username, email, password } = newUser;

    // setProgress(10);
    // setTimeout(setProgress(70), 500);
    () => dispatch(progressVal(20));
    () => {
      setTimeout(() => dispatch(progressVal(70)), 1000);
    }

    const res = await fetch("https://crud-web-app-server.vercel.app/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username, email, password
      })
    });

    const newUserData = await res.json();
    // setProgress(100);
    () => dispatch(progressVal(100));
    console.log(newUserData);

    if (res.status === 404 || !newUser) {
      alert(`error in signing up`);
    } else if (res.status === 409) {
      alert(`email already exists`);
      navigate("/register");
    }

    else if (res.status === 403) {
      alert(`Invalid Email Format`);
      navigate("/register");
    }

    else {
      alert(`registration success`);
      console.log(`new user addedd successfully`);
      navigate("/login");
    }
  }

  return (
    <form className='container mt-5'>
      <div className="mb-3">
        <label for="addUsername" className="form-label">Username</label>
        <input type="text" className="form-control" id="addUsername" name='username'
          value={newUser.username}
          onChange={updateData}
        />
      </div>
      <div className="mb-3">
        <label for="addEmail" className="form-label">Email</label>
        <input type="text" className="form-control" id="addEmail" name='email'
          value={newUser.email}
          onChange={updateData}
        />
      </div>
      <div className="mb-3">
        <label for="addPassword" className="form-label">Password</label>
        <input type="password" className="form-control" id="addPassword" name='password'
          value={newUser.password}
          onChange={updateData}
        />
      </div>
      <button type="submit" className="btn btn-primary" onClick={sendNewUser} >
        Submit
      </button>
      <div className='register-redirect' style={{ marginTop: "20px" }}>
        <p>Existing User? <a href="/login">Click here to Login</a></p>
      </div>
    </form>
  )
}

export default Register;
