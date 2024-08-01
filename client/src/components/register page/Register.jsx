import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
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

    const res = await fetch("http://localhost:3003/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username, email, password
      })
    });

    const newUserData = await res.json();
    console.log(newUserData);

    if (res.status === 404 || !newUser) {
      alert(`error in signing up`);
    } else {
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
    </form>
  )
}

export default Register;
