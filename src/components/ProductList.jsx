import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/reducers/products/productSlice";
import { addCart, removeCart } from "../redux/reducers/cart/CartSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state?.allProducts);
  const cart = useSelector((state) => state?.cart);
  const getProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    const data = await response?.data;
    dispatch(getAllProducts(data));
  };

  useEffect(() => {
    getProducts();
  }, [dispatch]);

  const productQuantity = (juniad) => {
    if (juniad.length <= 0) {
      return "NO product found";
    }
    else{
        return juniad.length
    }
  };

  return (
    <div className="flex  gap-3">
      <div className="w-1/2 border-2 border-black flex gap-2 flex-wrap">
        {products?.allProducts.map((item) => {
          return (
            <div className="w-1/2" key={item.id}>
              <img
                className="w-[100px] h-[100px] object-contain"
                src={item.image}
              />
              <p>{item.title}</p>
              <button
                onClick={() => dispatch(addCart(item))}
                className="bg-black text-white "
              >
                Add to cart
              </button>
            </div>
          );
        })}
      </div>
      <div className="border-2 border-black">
        <h1>Add to cart</h1>

        <h2>
          Count {productQuantity(cart.items)}
        </h2>
        {/* <h4> 3 (n0 product found)</h4> */}

        {cart?.items.map((item) => {
          return (
            <div className="w-1/2" key={item.id}>
              <img
                className="w-[20px] h-[20px] object-contain"
                src={item.image}
              />
              <p>{item.title}</p>
              <button
                onClick={() => dispatch(removeCart({ id: item.id }))}
                className="bg-black text-white "
              >
                Remove to cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
