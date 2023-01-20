import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAdminContext } from '../../context/admin_context';
import "../Css/DSidebar.css";

const DSidebar = ({ closeDSidebar }) => {

  const { admin, adminLogout } = useAdminContext();
  let location = useLocation();

  useEffect(() => {

    // eslint-disable-next-line
  }, [location]);


  return (
    <div className='DSidebar'>
      <div className="closeBtn text-white p-1" onClick={closeDSidebar}>x</div>
      <div className="d-flex align-items-center ms-4 mb-4 admin">
        <div className="position-relative adminImg">
          <img src={admin.avatar} alt="Admin" className='rounded-circle' />
          <div className='bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1'></div>
        </div>
        <div className="Profile_text ms-3">
          <h6 className='mb-0 text-white'>{admin.fname}</h6>
          <p className=''>Admin</p>
        </div>
      </div>
      <div className="navbar-nav w-100" >
        <Link to="/admin" className={`nav-item ${location.pathname === "/admin" ? "active" : ""}`} onClick={closeDSidebar}><i className='fa fa-tachometer-alt me-2'></i>Dashboard</Link>
        <Link to="/admin/product" className={`nav-item ${location.pathname === "/admin/product" ? "active" : ""}`} onClick={closeDSidebar}><i className="fa-brands fa-product-hunt me-2"></i>Product</Link>
        <Link to="/admin/blog" className={`nav-item ${location.pathname === "/admin/blog" ? "active" : ""}`} onClick={closeDSidebar}><i className="fa-sharp fa-solid fa-blog me-2"></i>Blog</Link>
        <Link to="/admin/login" className={`nav-item Logout`} onClick={adminLogout}><i className="fa-sharp fa-solid fa-user me-2"></i>Logout</Link>
      </div>
    </div>
  );
}

export default DSidebar;
