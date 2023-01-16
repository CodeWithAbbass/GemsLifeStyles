import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../Css/Login.css";

const Login = ({ setProgress }) => {

  const Navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const onChange = (e) => {
    let { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  }

  const Login = async (credentials) => {
    const { email, password } = credentials;
    
    let URL = 'https://gemlifestylesserver.gemlifestyles.com/api/auth/login';
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        Accept: "application/json",
        'Content-Type': "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (data.success) {
      alert(`${data.user.fname} Login Successfully`);
      Navigate("/");
    }
    else {
      alert(data.error);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    Login(credentials);
  }

  useEffect(() => {
    setProgress(10);
    setProgress(20);
    setProgress(50);
    setProgress(100);
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, []);


  return (
    <div className='Login text-center container'>
      <h2>Login In</h2>
      <p>Please enter your e-mail and password:</p>
      <form className="my-4 position-relative" method="post" onSubmit={handleSubmit} encType="multipart/form-data">
        <input type="email" className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" onChange={onChange} value={credentials.email.toLowerCase()} name="email" id="email" aria-describedby="emailHelp" placeholder='Email' autoComplete="true" required />
        <input type="password" className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3 " onChange={onChange} value={credentials.password} name="password" id="password" minLength={8} placeholder='Password' autoComplete="true" required />
        <button type="button" className="btn rounded-0">Forgot Password?</button>
        <button type="submit" className="btn rounded-0 border border-1 border-dark w-100 py-2 px-3">LOGIN</button>
        <div className="createOne">Don't have an account? <Link to={"/signup"}>Create one</Link></div>
      </form>
    </div>
  );
}

export default Login;
