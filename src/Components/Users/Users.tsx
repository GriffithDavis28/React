import logo from "../Assets/UserLogo.jpg";
import { Users } from "../Types/UserType";
//List of users
const User: Users[] = [
  {
    logo: logo,
    id: 1,
    name: "John Wayne",
    address: [
      { address: "123 Main St", city: "New York" },
      { address: "456 Oak Rd", city: "Chicago" },
    ],
  },
  {
    logo:logo,
    id: 2,
    name: "Rachel McAdams",
    address: [
      { address: "789 Elm Ave", city: "Los Angeles" },
      { address: "321 Pine St", city: "Seattle" },
      { address: "654 Maple Blvd", city: "Miami" },
    ],
  },
  {
    logo:logo,
    id: 3,
    name: "Michelle Presley",
    address: [{ address: "987 Oak Dr", city: "Houston" }],
  },
  {
    logo:logo,
    id: 4,
    name: "Emily Osmett",
    address: [
      { address: "159 Maple Ln", city: "Denver" },
      { address: "753 Birch Ct", city: "Atlanta" },
      { address: "258 Elm St", city: "Portland" },
      { address: "951 Oak Ave", city: "San Francisco" },
    ],
  },
  {
    logo:logo,
    id: 5,
    name: "David Blaine",
    address: [
      { address: "357 Pine Rd", city: "Boston" },
      { address: "852 Elm Blvd", city: "Washington D.C." },
    ],
  },
  {
    logo:logo,
    id: 6,
    name: "Sarah Jessica Parker",
    address: [
      { address: "159 Oak Dr", city: "Dallas" },
      { address: "753 Maple Ct", city: "Phoenix" },
    ],
  },
  {
    logo:logo,
    id: 7,
    name: "Anthony Davis",
    address: [{ address: "357 Birch Rd", city: "Philadelphia" }],
  },
  {
    logo:logo,
    id: 8,
    name: "Olivia Rodrigo",
    address: [
      { address: "852 Pine Blvd", city: "San Diego" },
      { address: "159 Elm Ln", city: "Seattle" },
      { address: "753 Oak Ave", city: "San Francisco" },
    ],
  },
  {
    logo:logo,
    id: 9,
    name: "Andrew Tate",
    address: [
      { address: "357 Maple Dr", city: "Chicago" },
      { address: "852 Birch Ct", city: "Boston" },
      { address: "159 Pine Rd", city: "New York" },
    ],
  },
  {
    logo:logo,
    id: 10,
    name: "Isabella Mercred",
    address: [{ address: "753 Oak Blvd", city: "Miami" }],
  },
  {
    logo:logo,
    id: 11,
    name: "Lucas Perez",
    address: [
      { address: "123 Elm St", city: "Miami" },
      { address: "456 Oak Ave", city: "Los Angeles" },
      { address: "789 Pine Rd", city: "Seattle" },
    ],
  },
  {
    logo:logo,
    id: 12,
    name: "Sophia Ramirez",
    address: [
      { address: "321 Maple Blvd", city: "Houston" },
      { address: "654 Birch Ln", city: "Atlanta" },
    ],
  },
];

export default User;
