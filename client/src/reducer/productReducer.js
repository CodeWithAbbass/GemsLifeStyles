const ProductReducer = (state, action) => {
  if (action.type === "ADD_PRODUCT") {
    let Product = action.payload;
    return {
      ...state,
      products: [...state.products, Product.savedProduct],
    }
  }

  if (action.type === "All_PRODUCTS") {
    let Product = action.payload;

    return {
      ...state,
      products: Product,
      filteredProducts: Product,
    }
  }

  if (action.type === "SINGLE_PRODUCT") {
    let Product = action.payload;
    return {
      ...state,
      singleProduct: [Product],
    }
  }

  if (action.type === "UPDATE_PRODUCT") {
    let { Product, id } = action.payload;
    let updatedProduct = state.products.filter(item => item._id !== id);
    updatedProduct = [...updatedProduct, Product.product];
    return {
      ...state,
      products: updatedProduct,
      filteredProducts: Product,
    }
  }

  if (action.type === "DELETE_PRODUCT") {
    let product = action.payload;
    let NewProducts = state.products.filter(item => item._id !== product._id);
    return {
      ...state,
      products: NewProducts,
      filteredProducts: NewProducts,
    }
  }

  if (action.type === "FILTER_PRODUCTS") {
    let category = action.payload;
    if (category === "All Products") {
      const result = state.products.filter(item => item);
      return {
        ...state,
        filteredProducts: result,
      }
    }
    const result = state.products.filter(item => item.category === category);
    return {
      ...state,
      filteredProducts: result,
    }
  }

  if (action.type === "SORT_PRODUCTS") {
    let value = action.payload;
    const CopyAllProducts = state.filteredProducts.map(a => a) // Copy Array of Object Because we don't want to change original array.

    switch (value) {
      case "New to Old":
        const resultNewtoOld = CopyAllProducts.sort((a, b) => a.date.localeCompare(b.date));
        return {
          ...state,
          filteredProducts: resultNewtoOld,
        }
      case "Old to New":
        const resultOldtoNew = CopyAllProducts.reverse((a, b) => a.date.localeCompare(b.date));
        return {
          ...state,
          filteredProducts: resultOldtoNew,
        }
      case "Feature":
        const resultFeature = CopyAllProducts.sort((a, b) => b.feature.localeCompare(a.feature));
        return {
          ...state,
          filteredProducts: resultFeature,
        }
      case "Best Selling":
        const resultBestSelling = CopyAllProducts.sort((a, b) => b.discount.localeCompare(a.discount));
        return {
          ...state,
          filteredProducts: resultBestSelling,
        }
      case "A - Z":
        const resultAZ = CopyAllProducts.sort((a, b) => a.name.localeCompare(b.name));
        return {
          ...state,
          filteredProducts: resultAZ,
        }
      case "Z - A":
        const resultZA = CopyAllProducts.sort((a, b) => b.name.localeCompare(a.name));
        return {
          ...state,
          filteredProducts: resultZA,
        }
      case "Low to High":
        const resultLowtoHigh = CopyAllProducts.sort((a, b) => a.price - b.price);
        // const resultLowtoHigh = CopyAllProducts.sort((a, b) => a.price.localeCompare(b.price));
        return {
          ...state,
          filteredProducts: resultLowtoHigh,
        }
      case "High to Low":
        const resultHightoLow = CopyAllProducts.sort((a, b) => b.price - a.price);
        return {
          ...state,
          filteredProducts: resultHightoLow,
        }
      default:
        const defaultResult = CopyAllProducts.sort((a, b) => a.name.localeCompare(b.name));
        return {
          ...state,
          filteredProducts: defaultResult,
        }
    }



  }

  return state;
};

export default ProductReducer;