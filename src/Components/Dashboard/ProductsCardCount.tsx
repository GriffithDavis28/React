import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./ProductsCard.scss";

interface ProductProps{
    title: string,
    count: number
}

const ProductsCountCard: React.FC<ProductProps> = ({title, count}) => {
    const location = useLocation();

    const productsPage = () => {
        switch(location.pathname){
            case "/products":
                return "Products";
            default:
                return "Dashboard";
        }
    }

    return(
        
        <div className="product-count-card" onClick={productsPage}>
            <Link to={"/products"}>
            <h1>{title}</h1>
            <p>{count}</p>
            </Link>
        </div>
    )
}

export default ProductsCountCard;