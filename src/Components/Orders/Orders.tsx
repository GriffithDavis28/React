import React from "react";
import DataTable from "react-data-table-component";
import { v4 as uuidv4 } from "uuid";
import { orderObject } from "../../App";

interface OrderProp {
  orders: orderObject[];
}

//orders here will be used as data for the table

const Orders: React.FC<OrderProp> = ({ orders }) => {
  //Used the react-data-table-component to render a table with the column headings below

  const defaultOrder:orderObject[] = [
    {
      id: uuidv4(),
      username: "John",
      totalPrice: 499.99,
      quantity: 1,
      city: "Kansas City",
    }
  ]
  const columns = [
    {
      name: "OrderID",
      selector: (row: orderObject) => row.id,
    },
    {
      name: "Username",
      selector: (row: orderObject) => row.username,
    },
    {
      name: "Total Amount",
      selector: (row: orderObject) => row.totalPrice,
    },
    {
      name: "Quantity",
      selector: (row: orderObject) => row.quantity,
    },
    {
      name: "City",
      selector: (row: orderObject) => row.city,
    },
  ];

  return (
    <div>
      <DataTable columns={columns} data={orders || defaultOrder} />
    </div>
  );
};
export default Orders;
