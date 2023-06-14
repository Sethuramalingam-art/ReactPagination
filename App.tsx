import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [products, setProducts] = useState<any[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);

  const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const result = await response.json();

    setProducts(result?.products);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const selectPageHandler = (index: number) => {
    setPageNumber(index);
  };
  return (
    <div>
      <div className="products__main">
        {products
          ?.slice(pageNumber * 10 - 10, pageNumber * 10)
          .map((product, index) => {
            return (
              <div key={index} className="product__detail">
                <img src={product.thumbnail} alt={product.title} />
                <span>{product.title}</span>
              </div>
            );
          })}
      </div>
      {products.length > 0 && (
        <div className="pagination__bse">
          <span onClick={() => selectPageHandler(pageNumber - 1)}>prev</span>
          {[...Array(products.length / 10)].map((_, index) => {
            return (
              <span onClick={() => selectPageHandler(index + 1)}>
                {index + 1}
              </span>
            );
          })}
          <span onClick={() => selectPageHandler(pageNumber + 1)}>next</span>
        </div>
      )}
    </div>
  );
}

export default App;
