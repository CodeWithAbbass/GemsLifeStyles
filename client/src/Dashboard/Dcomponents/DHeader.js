import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../Css/DHeader.css";
import DSidebar from "../Dcomponents/DSidebar";
import GEMSLOGO from "../../images/GEMS/GEMSLOGO.png";
import { useAdminContext } from '../../context/admin_context';


const DHeader = () => {
  const { admin, adminLogout } = useAdminContext();
  const Location = useLocation();

  function openDSidebar() {
    const width = window.innerWidth;
    if (width <= 768) {
      document.getElementById("DSidebar_Container").style.width = "100%";
    } else if (width <= 991) {
      document.getElementById("DSidebar_Container").style.width = "35%";
    } else {
      document.getElementById("DSidebar_Container").style.width = "25%";
    }
  }
  function closeDSidebar() {
    document.getElementById("DSidebar_Container").style.width = "0";
  }
  const handleOnChange = (v) => {
    // console.log('Clicked')
  }
  useEffect(() => {

  }, [Location]);

  return (
    <div className={`DHeader p-2 ${Location.pathname === "/admin/login" || Location.pathname === "/admin/signup" ? "d-none" : "d-block"}`}>
      <div className="container-fluid d-flex justify-content-between DesktopHeader">
        <div className="DHeader_Left row align-items-center">
          <Link to="/admin" className="col-3 text-start Logo_Col">
            <img src={GEMSLOGO} alt="GEMS" className='GEMS_Logo' />
          </Link>
          <div className="col-9 text-start SearchContainer">
            <i className='fa fa-bars d-inline me-sm-4' onClick={openDSidebar}></i>
            <input type="text" className="form-control border-0 w-75 d-inline" id="search" name="search" aria-label="Text input with dropdown button" placeholder="Search..." onChange={handleOnChange} />
          </div>
        </div>
        <div className="DHeader_Right row align-items-center">
          <div className="col-md-12 text-end Profile_Col Logout_Col">
            <Link to="/admin/login" className='btn rounded-0 shadow-none me-5' onClick={adminLogout}>LOGOUT</Link>
            <img src={admin.avatar} alt="Profile" className='rounded-circle avatar me-lg-2' />
            <span>{admin.fname}</span>
          </div>
        </div>
      </div>
      <div className="container-fluid MobileHeader">
        <div className="row w-100 m-0">
          <div className="col-4 Hamburger_Icon text-start d-flex align-items-center">
            <i className='fa fa-bars' onClick={openDSidebar}></i>
          </div>
          <Link to="/admin" className="col-4 text-center Logo_Col d-flex align-items-center justify-content-center">
            <img src={GEMSLOGO} alt="GEMS" className='GEMS_Logo' />
          </Link>
          <div className="col-4 text-end Profile_Col Logout_Col d-flex align-items-center justify-content-end">
            <img src={admin.avatar} alt="Profile" className='rounded-circle avatar' />
          </div>
        </div>
      </div>
      <div id="DSidebar_Container" >
        <DSidebar closeDSidebar={closeDSidebar} />
      </div>
    </div>
  );
}

export default DHeader;
