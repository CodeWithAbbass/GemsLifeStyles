import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useProductContext } from '../../context/product_context';
import "../Css/DProduct.css";

const DProduct = () => {
  const Navigate = useNavigate();
  let location = useLocation();
  const { products, addProduct, updateProduct, deleteProduct, getParsedDate } = useProductContext();
  const [active, setActive] = useState("Add Product");
  const [product, setProduct] = useState({
    name: "",
    price: "",
    stock: "",
    discount: "",
    tag: "",
    brand: "",
    feature: "",
    category: "",
    color: "",
    image: "",
    Meta1: "",
    Meta2: "",
    Meta3: "",
    Meta4: "",
    description: "",
  });
  const [editProduct, setEditProduct] = useState({
    name: "",
    price: "",
    stock: "",
    discount: "",
    tag: "",
    brand: "",
    feature: "",
    category: "",
    color: "",
    image: "",
    Meta1: "",
    Meta2: "",
    Meta3: "",
    Meta4: "",
    productMeta: [],
    description: "",
  });


  // For Transition From One to Another Component 
  const ProductFunc = (str) => {
    setActive(str);
  }

  const onChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

    // For Product Image OnChange 
  const fileOnChange = (e) => {
    let { files } = e.target;
    setProduct({ ...product, image: files });
  }

  const handleAdd = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    for (const iterator of product.image) {
      formData.append('image', iterator, product.image.name);
    }
    formData.append('name', product.name);
    formData.append('price', product.price);
    formData.append('stock', product.stock);
    formData.append('discount', product.discount);
    formData.append('tag', product.tag);
    formData.append('brand', product.brand);
    formData.append('feature', product.feature);
    formData.append('category', product.category);
    formData.append('color', product.color);
    formData.append('Meta1', product.Meta1);
    formData.append('Meta2', product.Meta2);
    formData.append('Meta3', product.Meta3);
    formData.append('Meta4', product.Meta4);
    formData.append('description', product.description);
    addProduct(formData);
    Navigate('/admin/product');
  };

    // For EditProduct onChange
  const onChangeEditProduct = (e) => {
    const { name, value } = e.target;
    setEditProduct({
      ...editProduct,
      [name]: value,
    });
  }

  // For Set Default Already Exist Values to Related Product 
  const editNow = (id) => {
    const Editable = products.filter((item) => item._id === id);
    setEditProduct(Editable[0]);
  }

  // For Update Product
  const handleUpdate = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append('name', editProduct.name);
    formData.append('price', editProduct.price);
    formData.append('stock', editProduct.stock);
    formData.append('discount', editProduct.discount);
    formData.append('tag', editProduct.tag);
    formData.append('brand', editProduct.brand);
    formData.append('feature', editProduct.feature);
    formData.append('category', editProduct.category);
    formData.append('color', editProduct.color);
    formData.append('Meta1', editProduct.Meta1);
    formData.append('Meta2', editProduct.Meta2);
    formData.append('Meta3', editProduct.Meta3);
    formData.append('Meta4', editProduct.Meta4);
    formData.append('description', editProduct.description);
    updateProduct(formData, editProduct._id);
  };

  // For Delete Product
  const handleTrash = (id) => {
    let Confirmation = window.confirm('Are you sure you want to DELETE this Product from the GEMS?')
    if (Confirmation) {
      deleteProduct(id);
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, [location]);

  const style1 = {
    display: "block",
    visibility: "visible",
  }
  const style2 = {
    display: "none",
    visibility: "hidden",
  }
  
  return (
    <div className='DProduct container' id='DProductContainer'>
      <div className="DProduct_Container row flex-md-wrap w-100 py-4 mx-auto align-items-center justify-content-evenly">
        <div className="Container_Item col-md-3 mb-3 rounded d-flex align-items-center justify-content-evenly clickable" onClick={() => ProductFunc("Add Product")}>
          <i className="fa-solid fa-plus"></i>
          <h6 className='Item_txt_value mb-0'>Add Product</h6>
        </div>
        <div className="Container_Item col-md-3 mb-3 rounded d-flex align-items-center justify-content-evenly">
          <strong>{products.length}</strong>
          <h6 className='Item_txt_value mb-0'>Total Product</h6>
        </div>
        <div className="Container_Item col-md-3 mb-3 rounded d-flex align-items-center justify-content-evenly clickable" onClick={() => ProductFunc("All Products")}>
          <i className="fa-solid fa-store"></i>
          <h6 className='Item_txt_value mb-0'>All Products</h6>
        </div>
      </div>


      {/* //////////////////////////Add Product//////////////////////////////// */}
      <div className="AddProduct text-center" id="AddProductContainer" style={active === "Add Product" ? style1 : style2}>
        <h2>What's New</h2>
        <p>Please fill in the information below:</p>
        <form className="pt-4 d-flex flex-wrap justify-content-between" id="AddProductForm" encType="multipart/form-data" method='POST' onSubmit={handleAdd}>
          <input type="text" id="name" placeholder="PRODUCT NAME" className="w-100 form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" onChange={onChange} name="name" value={product.name} required tabIndex={1} />
          <input type="number" id="price" placeholder="PRICE" className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" onChange={onChange} name="price" value={product.price} required tabIndex={2} />
          <input type="number" id="stock" placeholder="STOCK" className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" onChange={onChange} name="stock" value={product.stock} required tabIndex={3} />
          <input type="number" id="discount" placeholder="PERCENTAGE DISCOUNT" className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" onChange={onChange} name="discount" value={product.discount} required tabIndex={4} />
          <input type="text" id="tag" placeholder="TAG" className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" onChange={onChange} name="tag" value={product.tag} required tabIndex={5} />
          <input type="text" id="brand" placeholder="BRAND" className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" onChange={onChange} name="brand" value={product.brand} required tabIndex={6} />
          <select id="feature" className="form-select outline-none shadow-none rounded-0 mb-3 py-2 px-3" aria-label=".form-select-sm example" onChange={onChange} name="feature" value={product.feature} required tabIndex={7}>
            <option value={""}>FEATURE?</option>
            <option name="Yes" value={"Yes"}>Yes</option>
            <option name="No" value={"No"} >No</option>
          </select>
          <select id="category" className="form-select outline-none shadow-none rounded-0 mb-3 py-2 px-3" aria-label=".form-select-sm example" onChange={onChange} name="category" value={product.category} required tabIndex={8}>
            <option value={""} >PRODUCT CATEGORY</option>
            <option name="True Wireless" value={"True Wireless"}>True Wireless</option>
            <option name="Noise Cancelling" value={"Noise Cancelling"}>Noise Cancelling</option>
            <option name="AudioPhile" value={"AudioPhile"}>AudioPhile</option>
            <option name="Others" value={"Others"}>Others</option>
          </select>
          <input type="text" id="color" placeholder="COLOR" className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" onChange={onChange} name="color" value={product.color} required tabIndex={9} />
          <input type="file" id="image" name="image" className="input-file form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3 w-100" multiple onChange={fileOnChange} required tabIndex={10} />
          <textarea id="Meta1" name="Meta1" placeholder="Product Meta 1" className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" onChange={onChange} value={product.Meta1} tabIndex={11} ></textarea>
          <textarea id="Meta2" name="Meta2" placeholder="Product Meta 2" className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" onChange={onChange} value={product.Meta2} tabIndex={12} ></textarea>
          <textarea id="Meta3" name="Meta3" placeholder="Product Meta 3" className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" onChange={onChange} value={product.Meta3} tabIndex={13} ></textarea>
          <textarea id="Meta4" name="Meta4" placeholder="Product Meta 4" className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" onChange={onChange} value={product.Meta4} tabIndex={14} ></textarea>
          <textarea id="description" placeholder="DESCRIPTION" className="w-100 form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" onChange={onChange} name="description" value={product.description} required tabIndex={15} />
          <input type="submit" id="AddProduct" className="btn rounded-0 w-100 py-2 px-3" value={"Add Product"} />
        </form>
      </div>

      {/* //////////////////////////All Product//////////////////////////////// */}
      <div className="AllProducts text-center" id="AllProductsContainer" style={active === "All Products" ? style1 : style2}>
        <h2>All Products</h2>

        {products.map((item, index) => {
          const { _id, name, tag, feature, brand, category, color, date, discount, description, price, stock, image, productMeta } = item;
          let [MainImg, OtherImg1, OtherImg2, OtherImg3] = image; // Destructuring From Array
          let [Meta1, Meta2, Meta3, Meta4] = productMeta; // Destructuring From Array

          return (
            <div className="my-4 container p-0" key={index}>
              <div className="AllProducts_MainContainer DesktopAllProducts row flex-lg-wrap mx-auto align-items-center justify-content-evenly w-100">
                <div className="col-2 Product_MainImg"><img src={MainImg} alt="Product Pic" className='w-100' /></div>
                <div className="col-1 Product_OtherImg">
                  <img src={OtherImg1} alt="T3400" className='w-100' />
                  <img src={OtherImg2} alt="T3400" className='w-100 my-4' />
                  <img src={OtherImg3} alt="T3400" className='w-100' />
                </div>
                <div className="col-4 Product_HeadingTxt">
                  <strong>Name:</strong>
                  <p className="Product_HeadingTxt_Name mb-4">{name}</p>
                  <strong>Description:</strong>
                  <p className="Product_HeadingTxt_Description mb-4">{description}</p>
                  <strong>Meta Description:</strong>
                  <ol className="Product_HeadingTxt_MetaDescription">
                    <li className={`${Meta1 ? "list-item" : "d-none"}`}>{Meta1}</li>
                    <li className={`${Meta2 ? "list-item" : "d-none"}`}>{Meta2}</li>
                    <li className={`${Meta3 ? "list-item" : "d-none"}`}>{Meta3}</li>
                    <li className={`${Meta4 ? "list-item" : "d-none"}`}>{Meta4}</li>
                  </ol>

                </div>
                <div className="col-2 Product_Meta">
                  <p className="Product_Meta_items Product_Meta_ID mb-4"><strong>Product ID: </strong>{_id.slice(0, 7)}...</p>
                  <p className="Product_Meta_items Product_Meta_Price mb-4"><strong>Price: </strong>{price}</p>
                  <p className="Product_Meta_items Product_Meta_Discount mb-4"><strong>Discount: </strong>{discount}%</p>
                  <p className="Product_Meta_items Product_Meta_Date mb-4"><strong>Date: </strong>{getParsedDate(date)}</p>
                  <p className="Product_Meta_items Product_Meta_Feature mb-4 text-capitalize"><strong>Feature: </strong>{feature}</p>
                </div>
                <div className="col-2 Product_Meta border-0">
                  <p className="Product_Meta_items Product_Meta_Stock mb-4"><strong>Stock: </strong>{stock}</p>
                  <p className="Product_Meta_items Product_Meta_Brand mb-4"><strong>Brand: </strong>{brand}</p>
                  <p className="Product_Meta_items Product_Meta_Category mb-4"><strong>Category: </strong>{category}</p>
                  <p className="Product_Meta_items Product_Meta_Color mb-4"><strong>Color: </strong>{color}</p>
                  <p className="Product_Meta_items Product_Meta_Tag mb-4"><strong>Tag: </strong>{tag}</p>
                  <strong></strong>
                </div>
                <button type="button" className="Product_EditBtn btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => editNow(_id)}>EDIT NOW</button>
                <button type="button" className="Product_TrashBtn btn" onClick={() => handleTrash(_id)}>Trash</button>
              </div>
              {/* //////////////////////////All Product For Mobile Layout//////////////////////////////// */}
              <div className="AllProducts_MainContainer MobileAllProducts row flex-lg-wrap mx-auto align-items-center justify-content-evenly w-100">
                <div className="col-12 Product_MainImg"><img src={MainImg} alt="Product Pic" className='w-100' /></div>
                <div className="col-12 Product_OtherImg">
                  <div className="row justify-content-between m-0">
                    <img src={OtherImg1} alt="T3400" className='col-4' />
                    <img src={OtherImg2} alt="T3400" className='col-4' />
                    <img src={OtherImg3} alt="T3400" className='col-4' />
                  </div>
                </div>
                <div className="col-12 Product_HeadingTxt text-start">
                  <div className="container py-2">
                    <div className="row align-items-center">
                      <div className="col-4 HeadingTxt py-2"><strong>Name:</strong></div>
                      <div className="col-8 py-2">{name}</div>
                    </div>
                    <div className="row align-items-center">
                      <div className="col-4 HeadingTxt py-2"><strong>Descripition:</strong></div>
                      <div className="col-8 py-2">{description}</div>
                    </div>
                    <div className="row align-items-center">
                      <div className="col-4 HeadingTxt py-2"><strong>Meta Description:</strong></div>
                      <div className="col-8 py-2">
                        <ol className="Product_HeadingTxt_MetaDescription mb-0 ps-3">
                          <li className={`${Meta1 ? "list-item" : "d-none"}`}>{Meta1}</li>
                          <li className={`${Meta2 ? "list-item" : "d-none"}`}>{Meta2}</li>
                          <li className={`${Meta3 ? "list-item" : "d-none"}`}>{Meta3}</li>
                          <li className={`${Meta4 ? "list-item" : "d-none"}`}>{Meta4}</li>
                        </ol>
                      </div>
                    </div>
                    <div className="row align-items-center">
                      <div className="col-4 HeadingTxt py-2"><strong>Product ID:</strong></div>
                      <div className="col-8 py-2">{_id}</div>
                    </div>
                    <div className="row align-items-center">
                      <div className="col-4 HeadingTxt py-2"><strong>Price:</strong></div>
                      <div className="col-8 py-2">{price}</div>
                    </div>
                    <div className="row align-items-center">
                      <div className="col-4 HeadingTxt py-2"><strong>Discount:</strong></div>
                      <div className="col-8 py-2">{discount}%</div>
                    </div>
                    <div className="row align-items-center">
                      <div className="col-4 HeadingTxt py-2"><strong>Date:</strong></div>
                      <div className="col-8 py-2">{getParsedDate(date)}</div>
                    </div>
                    <div className="row align-items-center">
                      <div className="col-4 HeadingTxt py-2"><strong>Feature:</strong></div>
                      <div className="col-8 py-2">{feature}</div>
                    </div>
                    <div className="row align-items-center">
                      <div className="col-4 HeadingTxt py-2"><strong>Stock:</strong></div>
                      <div className="col-8 py-2">{stock}</div>
                    </div>
                    <div className="row align-items-center">
                      <div className="col-4 HeadingTxt py-2"><strong>Brand:</strong></div>
                      <div className="col-8 py-2">{brand}</div>
                    </div>
                    <div className="row align-items-center">
                      <div className="col-4 HeadingTxt py-2"><strong>Category:</strong></div>
                      <div className="col-8 py-2">{category}</div>
                    </div>
                    <div className="row align-items-center">
                      <div className="col-4 HeadingTxt py-2"><strong>Color:</strong></div>
                      <div className="col-8 py-2">{color}</div>
                    </div>
                    <div className="row align-items-center TagRow">
                      <div className="col-4 HeadingTxt py-2"><strong>Tag:</strong></div>
                      <div className="col-8 py-2">{tag}</div>
                    </div>
                  </div>
                </div>
                <button type="button" className="Product_EditBtn btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => editNow(_id)}>EDIT NOW</button>
                <button type="button" className="Product_TrashBtn btn" onClick={() => handleTrash(_id)}>Trash</button>
              </div>
            </div>


          )
        })}
      </div>



      {/* <!-- Modal --> */}
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">Edit Now</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="pt-4 d-flex flex-wrap justify-content-between" id="AddProductForm" encType="multipart/form-data" method='POST' onSubmit={handleUpdate}>
                <input type="text" id="name" name="name" placeholder="PRODUCT NAME" className="w-100 form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" value={editProduct.name} onChange={onChangeEditProduct} />
                <input type="number" id="price" name="price" placeholder="PRICE" className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" value={editProduct.price} onChange={onChangeEditProduct} />
                <input type="number" id="stock" name="stock" placeholder="STOCK" className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" value={editProduct.stock} onChange={onChangeEditProduct} />
                <input type="number" id="discount" name="discount" placeholder="PERCENTAGE DISCOUNT" className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" value={editProduct.discount} onChange={onChangeEditProduct} />
                <input type="text" id="tag" name="tag" placeholder="TAG" className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" value={editProduct.tag} onChange={onChangeEditProduct} />
                <input type="text" id="brand" name="brand" placeholder="BRAND" className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" value={editProduct.brand} onChange={onChangeEditProduct} />
                <select id="feature" name="feature" className="form-select outline-none shadow-none rounded-0 mb-3 py-2 px-3" aria-label=".form-select-sm example" value={editProduct.feature} onChange={onChangeEditProduct} >
                  <option disabled>FEATURE?</option>
                  <option name="Yes" value={"Yes"}>Yes</option>
                  <option name="No" value={"No"} >No</option>
                </select>
                <select id="category" name="category" className="form-select outline-none shadow-none rounded-0 mb-3 py-2 px-3" aria-label=".form-select-sm example" value={editProduct.category} onChange={onChangeEditProduct} >
                  <option disabled>PRODUCT CATEGORY</option>
                  <option name="True Wireless" value={"True Wireless"}>True Wireless</option>
                  <option name="Noise Cancelling" value={"Noise Cancelling"}>Noise Cancelling</option>
                  <option name="AudioPhile" value={"AudioPhile"}>AudioPhile</option>
                  <option name="Others" value={"Others"}>Others</option>
                </select>
                <input type="text" id="color" name="color" placeholder="COLOR" className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" value={editProduct.color} onChange={onChangeEditProduct} />
                <textarea id="Meta1" name="Meta1" placeholder="Product Meta 1" className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" defaultValue={editProduct.productMeta.length > 3 ? editProduct.productMeta[0] : ""} onChange={onChangeEditProduct}></textarea>
                <textarea id="Meta2" name="Meta2" placeholder="Product Meta 2" className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" defaultValue={editProduct.productMeta.length > 3 ? editProduct.productMeta[1] : ""} onChange={onChangeEditProduct}></textarea>
                <textarea id="Meta3" name="Meta3" placeholder="Product Meta 3" className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" defaultValue={editProduct.productMeta.length > 3 ? editProduct.productMeta[2] : ""} onChange={onChangeEditProduct}></textarea>
                <textarea id="Meta4" name="Meta4" placeholder="Product Meta 4" className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" defaultValue={editProduct.productMeta.length > 3 ? editProduct.productMeta[3] : ""} onChange={onChangeEditProduct}></textarea>
                <textarea id="description" name="description" placeholder="DESCRIPTION" className="w-100 form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" value={editProduct.description} onChange={onChangeEditProduct} />
                <button type="submit" id="AddProduct" className="btn rounded-0 w-100 mb-3 py-2 px-3" >Save Changes</button>
                <button type="button" className="btn rounded-0 w-100 py-2 px-3" data-bs-dismiss="modal">Close</button>
              </form>
            </div>
            <div className="modal-footer">
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}

export default DProduct;
