import React from 'react';
import { useLocation } from 'react-router-dom';


//Function to render header dynamically after page is selected
const Header: React.FC = () =>{

    const location = useLocation();

    //used switch case to render the name of the page we are in

    const getPageName = () => {
        switch(location.pathname){
            case "/":
                return "Dashboard";
            case "/users":
                return "Users"
            case "/products":
                return "Products";
            case "/cart":
                return "Cart";
            case "/orders":
                return "Orders";
            default:
                return "Dashboard";
        }
    }

  return (
    <div>{getPageName()}</div>
  )
}

export default Header;
