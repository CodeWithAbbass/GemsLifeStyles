import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import DFooter from '../Dcomponents/DFooter';
import DHeader from '../Dcomponents/DHeader';
import "../Css/Dashboard.css";
import { useAdminContext } from '../../context/admin_context';

const Dashboard = ({ setProgress }) => {
  let Navigate = useNavigate();
  const { adminData } = useAdminContext();

  const getadmin = async () => {
    try {
      const URL = 'https://gemlifestylesserver.gemlifestyles.com/api/auth/getadmin';
      const response = await fetch(URL, {
        method: 'GET',
        headers: {
          Accept: "application/json",
          'Content-Type': "application/json",
        },
        credentials: "include",
      });
      const data = await response.json();
      if (data.success) {
        adminData(data.user);
      }
      else {
        Navigate("/admin/login");
        console.error(data);
      }
    } catch (error) {
      console.error(error);
    }
  }


  useEffect(() => {
    setProgress(10);
    setProgress(30);
    setProgress(50);
    setProgress(75);
    setProgress(100);
    getadmin();
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, []);


  return (
    <div className='Dashboard'>
      <DHeader />
      <Outlet />
      <DFooter />
    </div>
  );
}

export default Dashboard;
