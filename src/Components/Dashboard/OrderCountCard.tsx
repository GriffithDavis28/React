import React from "react";
import { Link, useLocation } from "react-router-dom";

interface OrderProps{
    title: string,
    count: number
}

const OrderCountCard: React.FC<OrderProps> = ({title, count}) => {

    const location = useLocation();

    const orderPage = () =>{
        switch(location.pathname){
            case "/orders":
                return "Orders";
            default:
                return "Dashboard";
        }
    }

    return(
        <div className="orders-count-card" onClick={orderPage}>
            <Link to="/orders">
            <h1>{title}</h1>
            <p>{count}</p>
            </Link>
        </div>
    )
}

export default OrderCountCard;