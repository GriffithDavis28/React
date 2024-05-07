import React from "react";
import { Products } from "../ProductList/Products";
import Users from "../Users/Users";
import "./Dashboard.scss";
import ProductsCountCard from "./ProductsCardCount";
import UserCountCard from "./UserCardCount";

const Dashboard: React.FC = () => {

  //render the cards to show number of users, products and orders present

  const getUsersCount = () => {
    return Users.length;
  }

  const getProductCount = () => {
    return Products.length;
  }

  return(
    <div className="dashboard">
        <UserCountCard title="Users" count={getUsersCount()} />
        <ProductsCountCard title="Products" count={getProductCount()} />
    </div>
  )
};

export default Dashboard;
