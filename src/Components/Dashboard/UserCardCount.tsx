import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./UserCardCount.scss";

interface UserProps {
  title: string;
  count: number;
}

const UserCountCard: React.FC<UserProps> = ({ title, count }) => {
  const location = useLocation();

  const getUsers = () => {
    switch (location.pathname) {
      case "/users":
        return "Users";
      default:
        return "Dashboard";
    }
  };

  return (
    <div className="users-card-count" onClick={getUsers}>
      <Link to={"/users"}>
        <h1>{title}</h1>
        <p>{count}</p>
      </Link>
    </div>
  );
};

export default UserCountCard;
