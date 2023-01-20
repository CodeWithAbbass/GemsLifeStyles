import './App.css';
import './Css/General.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Home from './components/pages/Home';
import AllProducts from './components/pages/AllProducts';
// import NewArrivals from './components/pages/NewArrivals';
// import HelpCenter from './components/pages/HelpCenter';
// import Download from './components/pages/Download';
import Blog from './components/pages/Blog';
import Affiliate from './components/pages/Affiliate';
// import WhereToBuy from './components/pages/WhereToBuy';
import Cart from './components/pages/Cart';
import Checkout from './components/pages/Checkout';
import Payment from './components/pages/Payment';
import Search from './components/pages/Search';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import User from './components/pages/User';
// import About from './components/pages/About';
// import NewsRoom from './components/pages/NewsRoom';
import AddProduct from './components/pages/AddProduct';
import LoadingBar from 'react-top-loading-bar';
import SingleProduct from './components/pages/SingleProduct';
import ErrorPage from './components/pages/ErrorPage';
import ComingSoon from './Coming Soon Page/ComingSoon';

import Dashboard from "./Dashboard/Pages/Dashboard";
import DHome from './Dashboard/Dcomponents/DHome';
import DProduct from './Dashboard/Dcomponents/DProduct';
import DBlog from './Dashboard/Dcomponents/DBlog';
import DLogin from './Dashboard/Dcomponents/DLogin';
import DSignup from './Dashboard/Dcomponents/DSignup';

function App(props) {
  const [progress, setProgress] = useState(0);


  useEffect(() => {

    // eslint-disable-next-line
  }, []);

  return (
    <div id="Back_to_Top">
      <BrowserRouter>
        <LoadingBar color='#1FBAFF' height={3} shadow={true} progress={progress} />
        <Routes>
          <Route path="/" element={<Header />} >
            <Route index element={<Home />} setProgress={setProgress} />
            <Route path="allproducts" element={<AllProducts setProgress={setProgress} />} />
            <Route path="newarrivals" element={<AllProducts setProgress={setProgress} />} />
            <Route path="helpcenter" element={<ComingSoon />} />
            <Route path="download" element={<ComingSoon />} />
            <Route path="blog" element={<Blog setProgress={setProgress} />} />
            <Route path="affiliate" element={<Affiliate setProgress={setProgress} />} />
            <Route path="wheretobuy" element={<ComingSoon />} />
            <Route path="cart" element={<Cart setProgress={setProgress} />} />
            <Route path="checkout" element={<Checkout setProgress={setProgress} />} />
            <Route path="payment" element={<Payment setProgress={setProgress} />} />
            <Route path="search" element={<Search setProgress={setProgress} />} />
            <Route path="login" element={<Login setProgress={setProgress} />} />
            <Route path="signup" element={<Signup setProgress={setProgress} />} />
            <Route path="user" element={<User setProgress={setProgress} />} />
            <Route path="about" element={<ComingSoon />} />
            <Route path="newsroom" element={<ComingSoon />} />
            <Route path="addproduct" element={<AddProduct setProgress={setProgress} />} />
            <Route path="singleproduct/:id" element={<SingleProduct setProgress={setProgress} />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
          <Route path="/admin" element={<Dashboard setProgress={setProgress} />}>
            <Route index element={<DHome />} />
            <Route path="product" element={<DProduct />} />
            <Route path="login" element={<DLogin setProgress={setProgress} />} />
            <Route path="signup" element={<DSignup setProgress={setProgress} />} />
            <Route path="blog" element={<DBlog />} />
          </Route>
        </Routes>
        {/* <a href="#Back_to_Top" className="btn scrollUp bg-white border-5 border-white"><i className="fa fa-angle-up" /></a> */}
      </BrowserRouter>
    </div>
  );
}

export default App;


