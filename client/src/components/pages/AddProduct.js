import "../../Css/AddProduct.css";
import React, { useState } from "react";
import { useCartContext } from "../../context/cart_context";

const AddProduct = (props) => {
    const [product, setProduct] = useState({
        id: "",
        name: "",
        tag: "",
        brand: "",
        title: "",
        category: "",
        date: "",
        discount: "",
        description: "",
        oldPrice: "",
        pMainImg: "",
        pOtherImg: "",
    });

    const { addProductItem, getProducts } = useCartContext(); 
    const handleAdd = (e) => {
        e.preventDefault();
        addProductItem(
            product.id,
            product.name,
            product.tag,
            product.brand,
            product.title,
            product.category,
            product.date,
            product.discount,
            product.description,
            product.newPrice,
            product.oldPrice,
            product.pMainImg,
            product.pOtherImg,
        );
        setProduct({
            id: '',
            name: '',
            tag: '',
            brand: '',
            title: '',
            category: '',
            date: '',
            discount: '',
            description: '',
            newPrice: '',
            oldPrice: '',
            pMainImg: '',
            pOtherImg: '',
        });
        getProducts()
    };
    const onChange = (e) => {
        // console.log('Onchange');
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    return (
        <div className="AddProduct text-center">
            <h2>What's New</h2>
            <p>Please fill in the information below:</p>
            <form className="my-4">
                <fieldset>
                    <input
                        id="id"
                        name="id"
                        placeholder="PRODUCT ID"
                        className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3"
                        required=""
                        type="text"
                        value={product.id}
                        onChange={onChange}
                    />
                    <input
                        id="name"
                        name="name"
                        placeholder="PRODUCT NAME"
                        className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3"
                        required=""
                        type="text"
                        value={product.name}
                        onChange={onChange}
                    />
                    <input
                        id="tag"
                        name="tag"
                        placeholder="TAG"
                        className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3"
                        required=""
                        type="text"
                        value={product.tag}
                        onChange={onChange}
                    />
                    <input
                        id="brand"
                        name="brand"
                        placeholder="BRAND"
                        className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3"
                        required=""
                        type="text"
                        value={product.brand}
                        onChange={onChange}
                    />
                    <input
                        id="title"
                        name="title"
                        placeholder="TITLE"
                        className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3"
                        required=""
                        type="text"
                        value={product.title}
                        onChange={onChange}
                    />
                    <select
                        id="category"
                        name="category"
                        className="form-select form-select outline-none shadow-none rounded-0 mb-3 py-2 px-3"
                        aria-label=".form-select-sm example"
                        value={product.category}
                        onChange={onChange}
                    >
                        <option defaultValue >PRODUCT CATEGORY</option>
                        <option name="1">One</option>
                        <option name="2">Two</option>
                        <option name="3">Three</option>
                    </select>
                    <input
                        id="weight"
                        name="weight"
                        placeholder="PRODUCT WEIGHT"
                        className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3"
                        required=""
                        type="text"
                        value={product.weight}
                        onChange={onChange}
                    />
                    <input
                        id="date"
                        name="date"
                        placeholder="DATE"
                        className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3"
                        required=""
                        type="date"
                        value={product.date}
                        onChange={onChange} />
                    <input
                        id="discount"
                        name="discount"
                        placeholder="PERCENTAGE DISCOUNT"
                        className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3"
                        required=""
                        type="text"
                        value={product.discount}
                        onChange={onChange}
                    />
                    <textarea
                        id="description"
                        name="description"
                        placeholder="DESCRIPTION"
                        className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3"
                        value={product.description}
                        onChange={onChange}
                    ></textarea>
                    <input
                        id="pMainImage"
                        name="pMainImage"
                        className="input-file form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3"
                        type="file"
                        value={product.pMainImg}
                        onChange={onChange}
                    />
                    <input
                        id="pOtherImg"
                        name="pOtherImg"
                        className="input-file form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3"
                        type="file"
                        value={product.pOtherImg}
                        onChange={onChange}
                    />
                    <button
                        type="submit"
                        id="singlebutton"
                        name="singlebutton"
                        className="btn rounded-0 border border-1 border-dark w-100 py-2 px-3"
                        onClick={handleAdd}
                    >
                        ADD PRODUCT
                    </button>
                </fieldset>
            </form>
        </div>
    );
};

export default AddProduct;
