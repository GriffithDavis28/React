import { useEffect, useState } from "react";
import { cartObject } from "../../App";
import { ProductType } from "../Types/ProductType";
import User from "../Users/Users";
import "./Cart.scss";

type cartProps = {
  cartItems: ProductType[];
  handleIncrement: (prod: cartObject) => void;
  handleDecrement: (prod: cartObject) => void;
  placeOrder: (
    totalPrice: number,
    city: string,
    quantity: number,
    username: string
  ) => void;
};

type User = (typeof User)[number];
type Address = (typeof User)[number]["address"][number];

const Cart = ({
  cartItems,
  handleIncrement,
  handleDecrement,
  placeOrder,
}: cartProps) => {
  const [totalPrice, setTotalvalue] = useState<number>(0);
  const [selectedUser, setSelectedUser] = useState<User | null | undefined>(
    null
  );
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);

  useEffect(() => {
    let totalvalue = 0;
    cartItems.map((items) => {
      totalvalue = items.price * items.quantity;
    });
    setTotalvalue(totalvalue);
  }, [cartItems]);

  const selectUser = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedUserId = e.target.value;
    const selectedUserObj = User.find((user) => user.name === selectedUserId);
    setSelectedUser(selectedUserObj);
  };

  //function to select address after the user is selected
  const selectAddress = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    const selectedAddressId = parseInt(e.target.value);
    if (selectedUser && selectedUser.address[selectedAddressId]) {
      setSelectedAddress(selectedUser.address[selectedAddressId]);
    } else setSelectedAddress(null);
  };

  //Function to place the order after selecting the user and the address
  const orderPlaced = () => {
    console.log("order placed");
    console.log(selectedUser, selectAddress);

    //below was used to test if the order was being placed with hardcoded values
    //placeOrder(800, "baltimore", "Rachel")

    if (selectedUser && selectedAddress) {
      const quantity = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
      );
      placeOrder(totalPrice, selectedAddress.city, quantity, selectedUser.name);
    }
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((eachItem) => {
          return (
            <div className="display-items" key={eachItem.id}>
              <p>{eachItem.name}</p>
              <p>{eachItem.price}</p>
              <p>{eachItem.quantity}</p>
              <button onClick={() => handleIncrement(eachItem)}>+</button>
              <button onClick={() => handleDecrement(eachItem)}>-</button>
            </div>
          );
        })}
      </ul>
      <div className="place-order-btn">
        <button onClick={orderPlaced}>Place order</button>
      </div>
      Total Price: <p>{totalPrice}</p>
      <div className="user-cart">
        <div>
          <select onChange={(e) => selectUser(e)}>
            Select a user how to put a default value on dropdowns
            <option value=""> select user </option>
            {User.map((user, index) => (
              <option key={user.id} value={user.name}>
                {user.name}
              </option>
            ))}
          </select>

          {selectedUser && (
            <select onChange={(e) => selectAddress(e)}>
              <option value="">Select Address</option>
              {selectedUser.address.map((address, index) => (
                <option key={index} value={index}>
                  {address.city}
                </option>
              ))}
            </select>
          )}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Cart;
