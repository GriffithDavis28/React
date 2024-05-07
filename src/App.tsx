import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "./App.scss";
import Cart from "./Components/Cart/Cart";
import { ProductContext } from "./Components/Context/ProductContext";
import Dashboard from "./Components/Dashboard/Dasbaord";
import Header from "./Components/Header/Header";
import Orders from "./Components/Orders/Orders";
import ProductDetails from "./Components/ProductList/ProductDetails";
import { Products } from "./Components/ProductList/Products";
import ProductList from "./Components/ProductList/ProductsList";
import { ProductType } from "./Components/Types/ProductType";
import UserDetails from "./Components/Users/UserDetails";
import UsersList from "./Components/Users/UsersList";

export interface cartObject extends ProductType {
  quantity: number;
}

export interface orderObject {
  id: string;
  username: string;
  totalPrice: number;
  quantity: number;
  city: string;
}

function App() {
  const [selectedProduct, setSelectedProduct] = useState<ProductType>();

  const [cartItems, setCartItems] = useState<cartObject[]>([]);
  const [orderItems, setOrderItems] = useState<orderObject[]>([]);

  const [visibilty, setVisibility] =useState<boolean>(true);

  //Function to add product to cart
  const addToCart = (prod: ProductType) => {
    let find: boolean = false;

    const newarray: cartObject[] = cartItems.map((item) => {
      if (item.id === prod.id) {
        find = true;
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    if (find === false) {
      newarray.push({ ...prod, quantity: 1 });
    }

    setCartItems([...newarray]);
  };

  //Increase or Decrease functions are below to handle any change in number of products
  const handleIncrement = (prod: cartObject) => {
    const newarray: cartObject[] = cartItems.map((item) => {
      if (item.id === prod.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    setCartItems([...newarray]);
  };

  const handleDecrement = (prod: cartObject) => {
    if (prod.quantity > 1) {
      const newArray: cartObject[] = cartItems.map((item) => {
        if (item.id === prod.id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      setCartItems([...newArray]);
    }
  };

  const detail = (prod: ProductType) => {
    setSelectedProduct(prod);
  };

  //Function to place order from the cart
  const placeOrder = (
    value: number,
    city: string,
    quantity: number,
    username: string
  ) => {
    const id = uuidv4();
    console.log(id);
    console.log(value, city, username);
    setOrderItems([
      ...orderItems,
      {
        id: id,
        totalPrice: value,
        city: city,
        quantity: quantity,
        username: username,
      },
    ]);
  };

  //Links are used in sidebar
  //Routes are used to render the components
  return (
    <div className="App">
      <div className="Header">
        <Header />
      </div>
      <div className={`sidebar ${visibilty ? 'visible':'hidden'}`}>
        <Link to="/cart">
          <button>Go to cart</button>
        </Link>
        <Link to="/">Dashboard</Link>
        <Link to="/users">Users</Link>
        <Link to="/products"> Products</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/orders">Orders</Link>
      </div>

      <div className="Content">
        <ProductContext.Provider value={{ product: Products, detail }}>
          <Switch>
            <Route path={"/"} exact={true}>
              <Dashboard />
            </Route>
            <Route path={"/users"} exact={true}>
              <UsersList />
            </Route>
            <Route path={"/users/:id"} exact={true}>
              <UserDetails />
            </Route>
            <Route path={"/products"} exact={true}>
              <ProductList addToCart={addToCart} />
            </Route>
            <Route path={"/products/:id"} exact={true}>
              <ProductDetails />
            </Route>
            <Route path={"/cart"} exact={true}>
              <Cart
                cartItems={cartItems}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
                placeOrder={placeOrder}
              />
            </Route>
            <Route path={"/orders"} exact={true}>
              <Orders orders={orderItems} />
            </Route>
          </Switch>
        </ProductContext.Provider>
      </div>
    </div>
  );
}

export default App;
