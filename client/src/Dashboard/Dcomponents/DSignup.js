import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdminContext } from '../../context/admin_context';
import "../Css/DSignup.css";

const DSignup = () => {
  const { adminData } = useAdminContext();
  const [credentials, setCredentials] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    avatar: "",
    password: "",
    cpassword: ""
  });
  const Navigate = useNavigate();

  const onChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  }

  const fileOnChange = (e) => {
    const { files } = e.target;
    setCredentials({ ...credentials, avatar: files[0] });
  }

  const createAdmin = async (formData) => {
    try {
      const URL = 'https://gemlifestylesserver.gemlifestyles.com/api/auth/adminsignup';
      const response = await fetch(URL, {
        method: 'POST',
        credentials: "include",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        alert("Account Created Successfully");
        adminData(data.admin);
        Navigate("/admin");
      }
      else {
        alert(data.Error);
      }
    } catch (error) {
      console.error(error);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append('avatar', credentials.avatar, credentials.avatar.name);
    formData.append('fname', credentials.fname);
    formData.append('lname', credentials.lname);
    formData.append('email', credentials.email.toLowerCase());
    formData.append('phone', credentials.phone);
    formData.append('password', credentials.password);
    formData.append('cpassword', credentials.cpassword);
    createAdmin(formData);
  }




  return (
    <div className='DSignup text-center container'>
      <h2>Welcome New Admin For Registeration</h2>
      <p>Please fill in the information below:</p>
      <form className='my-4' encType="multipart/form-data" method="POST" onSubmit={handleSubmit}>
        <input type="text" className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" onChange={onChange} name="fname" value={credentials.fname} id="fname" placeholder='FirstName' minLength={3} required />
        <input type="text" className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" onChange={onChange} name="lname" value={credentials.lname} id="lName" placeholder='LastName' />
        <input type="email" className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" onChange={onChange} name="email" value={credentials.email} id="email" aria-describedby="emailHelp" placeholder='Email' required />
        <input type="number" className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" onChange={onChange} name="phone" value={credentials.phone} id="phone" placeholder='Phone Number' />
        <input type="file" name="avatar" accept='image/png, image/jpg, image/jpeg' className="input-file form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3 w-100" onChange={fileOnChange} id="avatar" required />
        <input type="password" className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" onChange={onChange} name="password" value={credentials.password} id="password" placeholder='Password' minLength={8} required />
        <input type="password" className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" onChange={onChange} name="cpassword" value={credentials.cpassword} id="cpassword" placeholder='Confirm Password' minLength={8} required />
        <button type="submit" className="btn rounded-0 w-100 py-2 px-3" >CREATE MY ACCOUNT</button>
      </form>
    </div>
  );
}
export default DSignup;