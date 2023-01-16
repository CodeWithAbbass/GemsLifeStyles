import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/productReducer";

const AppContext = createContext();

const initialState = {
  filteredProducts: [],
  products: [],
  singleProduct: [],
};

const AppProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  
  const getProducts = async () => {
    try {
      const URL = 'https://gemlifestylesserver.gemlifestyles.com/api/products/fetchallproducts'
      const response = await fetch(URL, {
        method: 'GET',
        headers: {
          Accept: "application/json",
          'Content-Type': "application/json",
        },
        credentials: "include",
      });
      const Product = await response.json();
      dispatch({ type: "All_PRODUCTS", payload: Product });
    } catch (error) {
      console.error(error);
    }
  }

  const getSingleProduct = async (id) => {
    try {

      const URL = `https://gemlifestylesserver.gemlifestyles.com/api/products/getproduct/${id}`;
      const response = await fetch(URL, {
        method: 'GET',
        headers: {
          Accept: "application/json",
          'Content-Type': "application/json",
        },
        credentials: "include",
      });
      const Product = await response.json();
      dispatch({ type: "SINGLE_PRODUCT", payload: Product });
    }
    catch (error) {
      console.error(error);
    }
  }

  const addProduct = async (formData) => {
    try {
      const URL = "https://gemlifestylesserver.gemlifestyles.com/api/products/addproduct";
      const response = await fetch(URL, {
        method: 'POST',
        credentials: "include",
        body: formData,
      });

      const Product = await response.json();
      if (Product.success) {
        dispatch({ type: "ADD_PRODUCT", payload: Product });
        alert("Product Added Successfully");
      }
      else {
        alert(Product.Error);
      }
    } catch (error) {
      console.error(error);
    }
  }

  const updateProduct = async (formData, id) => {
    try {
      const URL = `https://gemlifestylesserver.gemlifestyles.com/api/products/updateproduct/${id}`;
      const response = await fetch(URL, {
        method: 'PUT',
        body: formData,
      });

      const Product = await response.json();
      if (Product.success) {
        dispatch({ type: "UPDATE_PRODUCT", payload: { Product, id } });
        alert("Product Updated Successfully");
      }
      else {
        alert("Product Updated Failed Due To: ", Product.Error);
      }
    } catch (error) {
      console.error(error);
    }
  }

  const deleteProduct = async (id) => {
    try {
      const URL = `https://gemlifestylesserver.gemlifestyles.com/api/products/deleteproduct/${id}`;
      const response = await fetch(URL, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const Product = await response.json();
      if (Product.success) {
        dispatch({ type: "DELETE_PRODUCT", payload: Product.product });
        alert("Product Has Been Deleted Successfully");
      }
      else {
        alert("Product Deletion Failed Due To: ", Product.error);
      }
    } catch (error) {
      console.error(error);
    }
  }




  // Minus discount  
  const CalcDiscount = (discount, amount) => {
    if (+discount > 0) {
      let NewAmount = (+amount - ((+amount * +discount) / 100));
      return NewAmount;
    } else {
      return +amount;
    }
  }

  const filterProducts = (category) => {
    dispatch({ type: "FILTER_PRODUCTS", payload: category })
  }

  const SortProducts = (value) => {
    dispatch({ type: "SORT_PRODUCTS", payload: value })
  }

  const getParsedDate = (strDate) => {
    var strSplitDate = String(strDate).split(' ');
    var date = new Date(strSplitDate[0]);
    // alert(date);
    var dd = date.getDate();
    var mm = date.getMonth() + 1; //January is 0!

    var yyyy = date.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    date = dd + "-" + mm + "-" + yyyy;
    return date.toString();
  }

  useEffect(() => {
    getProducts();
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, []);

  return (
    <AppContext.Provider value={{
      ...state,
      getProducts,
      getSingleProduct,
      addProduct,
      updateProduct,
      deleteProduct,
      filterProducts,
      SortProducts,
      CalcDiscount,
      getParsedDate,
    }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };