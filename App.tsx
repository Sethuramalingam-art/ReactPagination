import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [products, setProducts] = useState<any[]>([]);

  const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const result = await response.json();

    setProducts(result?.products);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="products__main">
      {products?.map((product, index) => {
        return (
          <div key={index}>
            <img src={product.thumbnail} alt={product.title} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
