import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ReCaptchaV2 from 'react-google-recaptcha';

const Login = () => {
    const navigate = useNavigate();

    let [user, setUser] = useState({
        email: "",
        password: ""
    });

    // reCaptchaV2 token state variable
    const [gToken, setGToken] = useState("");
    const [submitEnabled, setSubmitEnabled] = useState(false);

    useEffect(() => {
        if (gToken.length) {
            setSubmitEnabled(true);
        }
    }, [gToken]);

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

        const res = await fetch("http://localhost:3003/login", {
            method: "Post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        });

        const existUser = await res.json();

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

    // token for reCaptchaV2
    // const handleToken = (token) => {
    //     setToken(token);
    // }

    // create recaptchav2 token
    const handleToken = (token) => {
        setGToken(token);
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
            <div className="reCaptcha mb-3">
                <ReCaptchaV2
                    sitekey={import.meta.env.VITE_RECAPTCHAV2_SITE_KEY}
                    onChange={handleToken}
                />
            </div>
            <button
                disabled={!submitEnabled}
                type="submit"
                className={submitEnabled ? "btn btn-primary" : "btn btn-secondary"}
                onClick={sendUser} >
                Submit
            </button>
            <div className='register-redirect' style={{ marginTop: "20px" }}>
                <p>New User? <a href="/register">Click here to Register</a></p>
            </div>
        </form>
    );
}

export default Login;