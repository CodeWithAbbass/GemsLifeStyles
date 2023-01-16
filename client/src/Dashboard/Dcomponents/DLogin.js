import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useAdminContext } from '../../context/admin_context';
import "../Css/DLogin.css";

const DLogin = () => {

  const Navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const { adminData } = useAdminContext();

  const onChange = (e) => {
    let { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  }

  const adminLogin = async (credentials) => {
    try {
      let { email, password } = credentials;
      const URL = 'https://gemlifestylesserver.gemlifestyles.com/api/auth/adminlogin';
      
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
        alert("Admin Login Successfully");
        adminData(data.admin);
        Navigate("/admin");
      }
      else {
        alert(data.error);
      }
    } catch (error) {
      console.error(error);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    adminLogin(credentials);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, []);

  return (
    <div className='DLogin text-center container'>
      <h2>Login In</h2>
      <p>Please enter your e-mail and password:</p>
      <form className="my-4 position-relative" method="post" onSubmit={handleSubmit} encType="multipart/form-data">
        <input type="email" className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" onChange={onChange} value={credentials.email.toLowerCase()} name="email" id="email" aria-describedby="emailHelp" placeholder='Email' required />
        <input type="password" className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3 " onChange={onChange} value={credentials.password} name="password" minLength={8} id="password" autoComplete="true" placeholder='Password' required />
        <button type="button" className="btn rounded-0">Forgot Password?</button>
        <button type="submit" className="btn rounded-0 border border-1 border-dark w-100 py-2 px-3">LOGIN</button>
        <div className="createOne">Don't have an account? <Link to={"/admin/signup"}>Create one</Link></div>
      </form>
    </div>
  );
}

export default DLogin;
