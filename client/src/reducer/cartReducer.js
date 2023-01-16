const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, color, quantity, product } = action.payload;

    // tackle the existing product
    let existingProduct = state.cart.find((curItem) => curItem.productID === id);

    if (existingProduct) {
      let updatedProduct = state.cart.map((curElem) => {
        if (curElem.productID === id) {
          let newQuantity = +curElem.quantity + quantity;

          if (newQuantity >= curElem.stock) {
            newQuantity = curElem.stock;
          }
          return {
            ...curElem,
            quantity: newQuantity,
          };
        } else {
          return curElem;
        }
      });
      return {
        ...state,
        cart: updatedProduct,
      };
    } else {
      let cartProduct = {
        id: id,
        name: product.name,
        color,
        quantity,
        discount: product.discount,
        image: product.image,
        price: product.price,
        stock: product.stock,
      };

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }

  if (action.type === "CART") {
    let userData = action.payload;
    return {
      ...state,
      cart: userData.products,
    }
  }

  // to set the increment and decrement
  if (action.type === "SET_INCREMENT") {
    let id = action.payload;
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.productID === id) {
        let incAmount = +curElem.quantity + 1;

        if (incAmount >= curElem.stock) {
          incAmount = curElem.stock;
        }

        return {
          ...curElem,
          quantity: incAmount,
        };
      } else {
        return curElem;
      }
    });
    return { ...state, cart: updatedProduct };
  }

  if (action.type === "SET_DECREMENT") {
    let id = action.payload;
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.productID === id) {
        let decAmount = +curElem.quantity - 1;

        if (decAmount <= 1) {
          decAmount = 1;
        }

        return {
          ...curElem,
          quantity: decAmount,
        };
      } else {
        return curElem;
      }
    });
    return { ...state, cart: updatedProduct };
  }

  if (action.type === "REMOVE_ITEM") {
    let id = action.payload;
    let updatedCart = state.cart.filter((curItem) => curItem.productID !== id);
    return {
      ...state,
      cart: updatedCart,
    };
  }

  // to empty or to clear to cart
  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }

  if (action.type === "CART_TOTAL_ITEM") {
    let updatedItemVal = state.cart.length;
    return {
      ...state,
      total_item: updatedItemVal,
    };
  }

  if (action.type === "CART_TOTAL_PRICE") {
    let total_price = state.cart.reduce((initialNumber, curElem) => {
      let { price, quantity, discount } = curElem;
      let NewAmount;
      if (discount > 0) {
        NewAmount = (price - ((price * discount) / 100));
        initialNumber = initialNumber + NewAmount * quantity;
      } else {
        initialNumber = initialNumber + price * quantity;
      }
      //    initialNumber =         0     +   50  x    1    === 50
      //    initialNumber =         50    +   50  x    1    === 100
      //    initialNumber =         100   +   100 x    1    === 200
      return initialNumber;
    }, 0);

    return {
      ...state,
      total_price,
    };
  }

  return state;
};

export default cartReducer;