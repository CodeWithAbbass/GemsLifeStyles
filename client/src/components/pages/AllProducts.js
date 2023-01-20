import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useProductContext } from "../../context/product_context";
import ProductGrid3x from "../ProductGrid3x";
import ProductGrid2x from '../ProductGrid2x';
import "../../Css/AllProducts.css"

const AllProducts = ({ setProgress }) => {
  const location = useLocation()
  const { filteredProducts, getProducts, filterProducts, SortProducts, } = useProductContext();  // Destructure
  const [Grid2xActive, setGrid2xActive] = useState(true);
  const [Grid3xActive, setGrid3xActive] = useState(false);
  const [showDetails, setShowDetails] = useState("All Products"); // For Mobile Dropdown Category.


  const Grid2x = () => {
    setGrid3xActive(false);
    setGrid2xActive(true);
  }
  const Grid3x = () => {
    setGrid2xActive(false);
    setGrid3xActive(true);
  }

  useEffect(() => {
    setProgress(10);
    setProgress(30);
    getProducts();
    setProgress(50);
    setProgress(100);
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, [location]);


  return (
    <div className='AllProduct text-center'>
      <h2 className='mt-5'>ALL PRODUCTS</h2>
      <div className="container AllProduct_filter my-5 d-flex flex-wrap justify-content-between bg-white">
        {/* Desktop Filter Menu */}
        <div className="AllProduct_filterMenus Desktop_Filter_Menu d-flex flex-wrap align-content-center justify-content-center">
          <button className='btn border-0 outline-0 shadow-none radius-0' onClick={() => filterProducts("All Products")}>All Products</button>
          <button className='btn border-0 outline-0 shadow-none radius-0' onClick={() => filterProducts("True Wireless")}>True Wireless</button>
          <button className='btn border-0 outline-0 shadow-none radius-0' onClick={() => filterProducts("Noise Cancelling")}>Noise Cancelling</button>
          <button className='btn border-0 outline-0 shadow-none radius-0' onClick={() => filterProducts("AudioPhile")}>AudioPhile</button>
          <button className='btn border-0 outline-0 shadow-none radius-0' onClick={() => filterProducts("Others")}>Others</button>
        </div>
        {/* Mobile Filter Menu */}
        <div className="AllProduct_filterMenus Mobile_Filter_Menu mt-4">
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item bg-transparent">
              <div className="accordion-header" id="flush-headingTwo">
                <button className="accordion-button collapsed bg-transparent d-block text-center" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseTwo">{showDetails}</button>
              </div>
              <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                  <button className='text-decoration-none link-light d-block py-2' onClick={() => { setShowDetails("All Products"); filterProducts("All Products") }}>All Products</button>
                  <button className='text-decoration-none link-light d-block py-2' onClick={() => { setShowDetails("True Wireless"); filterProducts("True Wireless") }}>True Wireless</button>
                  <button className='text-decoration-none link-light d-block py-2' onClick={() => { setShowDetails("Noise Cancelling"); filterProducts("Noise Cancelling") }}>Noise Cancelling</button>
                  <button className='text-decoration-none link-light d-block py-2' onClick={() => { setShowDetails("AudioPhile"); filterProducts("AudioPhile") }}>AudioPhile</button>
                  <button className='text-decoration-none link-light d-block py-2' onClick={() => { setShowDetails("Others"); filterProducts("Others") }}>Others</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="AllProduct_collectionToolbar d-flex flex-wrap align-items-center">
          <div className="Grid_Icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className={`bi bi-grid-fill me-2 ${Grid2xActive ? "active_Grid" : ""}`} viewBox="0 0 16 16" onClick={Grid2x}>
              <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className={`bi bi-grid-3x3-gap-fill ${Grid3xActive ? "active_Grid" : ""}`} viewBox="0 0 16 16" onClick={Grid3x}>
              <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z" />
            </svg>
          </div>
          <select className="form-select rounded-0 shadow-none ms-2" aria-label="Default select example" onChange={(e) => SortProducts(e.target.value)}>
            <option value="New to Old" defaultValue={"Date,New to Old"}>Date,New to Old</option>
            <option value="Old to New">Date,Old to New</option>
            <option value="Feature">Feature</option>
            <option value="Best Selling">Best Selling</option>
            <option value="A - Z">Alphabetically, A-Z</option>
            <option value="Z - A">Alphabetically, Z-A</option>
            <option value="Low to High">Price,Low to High</option>
            <option value="High to Low">Price,High to Low</option>
          </select>
        </div>
      </div>

      <div className={`container d-flex justify-content-center g-0 ${Grid3xActive ? "d-block" : "d-none"}`}>
        <div className="row w-100 justify-content-between">
          {filteredProducts.map((item, index) => {
            const { _id, name, tag, brand, category, discount, description, price, image, } = item;
            const [pMainImg, pOtherImg] = image; // Destructuring From Array
            return (
              <div className="col-4 m-0 p-0 mb-5" key={index}>
                <ProductGrid3x
                  id={_id}
                  name={name}
                  tag={tag}
                  brand={brand}
                  category={category}
                  discount={discount}
                  description={description}
                  price={price}
                  pMainImg={pMainImg}
                  pOtherImg={pOtherImg}
                />
              </div>)
          })}
        </div>
      </div>
      <div className={`container ProductGrid2x_Column d-flex justify-content-center g-0 ${Grid2xActive ? "d-block" : "d-none"}`}>
        <div className="row w-100 justify-content-between m-0">
          {filteredProducts.map((item, index) => {
            const { _id, name, tag, brand, category, discount, description, price, image } = item;
            const [pMainImg, pOtherImg] = image; // Destructuring From Array
            return (
              <div className="col-6 m-0 p-0 mb-5" key={index}>
                <ProductGrid2x
                  id={_id}
                  name={window.innerWidth <= 768 ? `${name.slice(0, 28)}...` : name}
                  tag={tag}
                  brand={brand}
                  category={category}
                  discount={discount}
                  description={window.innerWidth <= 768 ? `${description.slice(0, 50)}...` : description}
                  price={price}
                  pMainImg={pMainImg}
                  pOtherImg={pOtherImg}
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default AllProducts;
