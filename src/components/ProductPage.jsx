import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { callAPI } from "../utils/CallApi";
import ProductDeatils from "./ProductDeatils";

const ProductPage = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  const getProduct = () => {
    callAPI(`data/products.json`).then((productResults) => {
      setProduct(productResults[id]);
    });
  };

  useEffect(() => {
    getProduct();
  }, []);

  if (!product?.title) return <h1>Loading... </h1>;

  return (
    product && (
      <div className="h-screen  bg-amazonclone-background">
        <div className="min-w-[1000px] max-w-[1500px] m-auto ">
          <div className="grid grid-cols-10 gap-2">
            <div className="col-span-3 p-8 rounded bg-white m-auto">
              <img src={`${product.image}`} />
            </div>
            <div className="col-span-5 p-4 rounded bg-white divide-y divide-gray-400">
              <div className="mb-3">
                <ProductDeatils product={product} ratings={true} />
              </div>
              <div></div>
            </div>
            <div className="col-span-2 bg-green-400"></div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductPage;
