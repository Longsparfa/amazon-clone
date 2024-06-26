/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { callAPI } from "../utils/CallApi";
import { GB_CURRENCY } from "../utils/constant";
import ProductDetails from "./ProductDetails";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const ProductPage = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState("1");

  const getProduct = () => {
    callAPI(`data/products.json`).then((productResults) => {
      setProduct(productResults[id]);
    });
  };

  const addToQuantityProduct = () => {
    setProduct((product.quantity = quantity));
    return product;
  };

  useEffect(() => {
    getProduct();
  }, []);

  if (!product?.title) return <h1>Loading... </h1>;

  return (
    product && (
      <div className="h-screen  bg-amazonclone-background">
        <div className="w-full m-auto p-4 ">
          <div className="grid grid-cols-1 sm:grid-cols-5 md:grid-cols-10 gap-2">
            <div className="col-span-3 p-8 rounded bg-white m-auto">
              <img src={`${product.image}`} />
            </div>
            <div className="col-span-5 p-4 rounded bg-white divide-y divide-gray-400">
              <div className="mb-3">
                <ProductDetails product={product} ratings={true} />
              </div>
              <div className="text-base xl:text-lg mt-3">
                {product.description}
              </div>
            </div>
            <div className="col-span-2 p-4 rounded bg-white">
              <div className="text-xl xl:text-2xl text-right text-red-700 font-semibold">
                {GB_CURRENCY.format(product.price)}
              </div>
              <div className="text-base xl:text-lg text-right text-gray-500 font-semibold">
                RRP
                <span className="line-through">
                  {GB_CURRENCY.format(product.oldPrice)}
                </span>
              </div>
              <div className="text-sm xl:text-base text-blue-500 font-semibold mt-3">
                FREE Returns
              </div>
              <div className="text-sm xl:text-base text-blue-500 font-semibold mt-1">
                FREE Delivery
              </div>
              <div className="text-base xl:text-lg text-green-700 font-semibold mt-1">
                In Stock
              </div>
              <div className="text-base xl:text-lg mt-1 ">
                Quantity:
                <select
                  onChange={(e) => setQuantity(e.target.value)}
                  className="p-2 bg-white border rounded-md focus:border-indigo-600 "
                  id=""
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <Link to={"/checkout"}>
                <button
                  onClick={() => dispatch(addToCart(addToQuantityProduct()))}
                  className="btn"
                >
                  Add to Cart
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductPage;
