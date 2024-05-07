import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../Context/ProductContext";
import { ProductType } from "../Types/ProductType";
import { Products } from "./Products";
import "./ProductsList.scss";

type ProductListProps = {
  addToCart: (product: ProductType) => void;
};

//Function to display all products

const ProductList: React.FC<ProductListProps> = ({ addToCart }) => {
  const p = useContext(ProductContext);

  const [cart, setCart] = useState<ProductType[]>([]);

  const showDetails = (prod: ProductType) => {
    p?.detail(prod);
  };

  return (
    <div className="products-list">
      {Products.map((prod) => {
        return (
          <div className="products" key={prod.id}>
            <img src={prod.image} alt={prod.name} />
            <h1>{prod.name}</h1>
            <p>{prod.price}</p>
            <Link to={`/products/${prod.id}`}>
            <button onClick={() => showDetails(prod)}>details</button></Link>
            <button onClick={() => addToCart(prod)}>Add to Cart</button>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
