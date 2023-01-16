import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();


const initialState = {
  cart: [],
  total_item: "",
  total_price: "",
  shipping_fee: 1,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = async (id, color, quantity = 1, product) => {
    try {
      const URL = `https://gemlifestylesserver.gemlifestyles.com/api/cart/addtocart/${id}`;
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          Accept: "application/json",
          'Content-Type': "application/json",
        },
        credentials: "include",
      });
      const data = await response.json();
      if (data.success) {
        dispatch({ type: "ADD_TO_CART", payload: { id, color, quantity, product } });
      }
      else {
        alert("Attention! This Product Add to Cart is Temporary Please Login Before Add to Cart to Save Products In Your Cart.")
        dispatch({ type: "ADD_TO_CART", payload: { id, color, quantity, product } });
        const error = new Error(response.error);
        console.log(error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getCartItems = async () => {
    try {
      const URL = `https://gemlifestylesserver.gemlifestyles.com/api/cart/getcartitems`;
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
        dispatch({ type: "CART", payload: data.userData });
      }
      else {
        const error = new Error(response.error);
        console.log(error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const setIncrement = async (id) => {
    try {
      const URL = `https://gemlifestylesserver.gemlifestyles.com/api/cart//incrementcartitem/${id}`;
      const response = await fetch(URL, {
        method: 'PUT',
        headers: {
          Accept: "application/json",
          'Content-Type': "application/json"
        },
        credentials: "include",
      });
      const data = await response.json();
      if (data.success) {
        dispatch({ type: "SET_INCREMENT", payload: id });
      }
    } catch (error) {
      console.error(error);
    }
  };

  // increment and decrement the product
  const setDecrease = async (id) => {
    try {
      const URL = `https://gemlifestylesserver.gemlifestyles.com/api/cart//decrementcartitem/${id}`;
      const response = await fetch(URL, {
        method: 'PUT',
        headers: {
          Accept: "application/json",
          'Content-Type': "application/json"
        },
        credentials: "include",
      });
      const data = await response.json();
      if (data.success) {
        dispatch({ type: "SET_DECREMENT", payload: id });
      }
    } catch (error) {
      console.error(error);
    }
  };

  // to remove the individual item from cart
  const removeItem = async (id) => {
    try {
      const URL = `https://gemlifestylesserver.gemlifestyles.com/api/cart/deletecartitem/${id}`;
      const response = await fetch(URL, {
        method: 'DELETE',
        headers: {
          Accept: "application/json",
          'Content-Type': "application/json"
        },
        credentials: "include",
      });
      const data = await response.json();
      if (data.success) {
        dispatch({ type: "REMOVE_ITEM", payload: id });
      }
    } catch (error) {
      console.error(error);
    }
  };

  // to clear the cart
  const clearCart = async () => {
    try {
      const URL = `https://gemlifestylesserver.gemlifestyles.com/api/cart/clearcart`;
      const response = await fetch(URL, {
        method: 'DELETE',
        headers: {
          Accept: "application/json",
          'Content-Type': "application/json"
        },
        credentials: "include",
      });
      const data = await response.json();
      if (data.success) {
        dispatch({ type: "CLEAR_CART" });
      }
    } catch (error) {
      console.error(error);
    }

  };


  useEffect(() => {
    dispatch({ type: "CART_TOTAL_ITEM" });
    dispatch({ type: "CART_TOTAL_PRICE" });
    // eslint-disable-next-line
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        getCartItems,
        removeItem,
        clearCart,
        setDecrease,
        setIncrement,
      }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };