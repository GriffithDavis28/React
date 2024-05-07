import PC from "../Assets/PC.webp";
import chair from "../Assets/chair.jpg";
import chargingpad from "../Assets/chargingpad.jpeg";
import desk from "../Assets/desk.jpg";
import gamingDesk from "../Assets/gamingdesk.avif";
import gamingLaptop from "../Assets/gaminglaptop.jpg";
import headphones from "../Assets/headphones.jpg";
import headset from "../Assets/headset.jpeg";
import helmet from "../Assets/helmet.webp";
import gamingKeyboard from "../Assets/keyboard.jpg";
import keyboardMouse from "../Assets/keyboardandmouse.jpg";
import lamp from "../Assets/lamp.jpg";
import monitor from "../Assets/monitor.avif";
import gamingMouse from "../Assets/mouse.webp";
import speaker from "../Assets/pulse.jpg";
import rolex from "../Assets/rolex.jpg";
import surface from "../Assets/surface.jpeg";
import vr from "../Assets/vr.jpg";
import webcam from "../Assets/webcam.jpg";
import { ProductType } from "../Types/ProductType";



//List of products
const Products: ProductType[] = [
  {
    image: helmet,
    id: 1,
    name: "Helmet",
    description: "Certified and provides Grade a Protection",
    price: 499.99,
    quantity: 4,
  },
  {
    image: rolex,
    id: 2,
    name: "Rolex",
    description: "Crown yourself like a king",
    price: 2300.0,
    quantity: 3,
  },
  {
    image: surface,
    id: 3,
    name: "Microsoft Surface",
    description: "Powered by the latest intel processor",
    price: 1299.99,
    quantity: 6,
  },
  {
    image: chair,
    id: 4,
    name: "Ergonomic Office Chair",
    description: "Adjustable and supportive chair for long work hours",
    price: 249.99,
    quantity: 15,
  },
  {
    image: keyboardMouse,
    id: 5,
    name: "Wireless Keyboard and Mouse Set",
    description: "Sleek and minimalist desktop accessory combo",
    price: 59.99,
    quantity: 22,
  },
  {
    image: speaker,
    id: 6,
    name: "Portable Bluetooth Speaker",
    description: "Powerful audio in a compact, waterproof design",
    price: 79.95,
    quantity: 18,
  },
  {
    image: webcam,
    id: 7,
    name: "High-Resolution Webcam",
    description: "1080p camera for video calls and streaming",
    price: 99.5,
    quantity: 11,
  },
  {
    image: headphones,
    id: 8,
    name: "Noise-Cancelling Headphones",
    description: "Immersive audio experience with ambient noise reduction",
    price: 179.99,
    quantity: 9,
  },
  {
    image: lamp,
    id: 9,
    name: "Programmable LED Desk Lamp",
    description: "Adjustable brightness and color temperature lighting",
    price: 65.75,
    quantity: 14,
  },
  {
    image: chargingpad,
    id: 10,
    name: "Wireless Charging Pad",
    description: "Fast, convenient charging for Qi-enabled devices",
    price: 39.99,
    quantity: 27,
  },
  {
    image: desk,
    id: 11,
    name: "Standing Desk Converter",
    description: "Transform any desk into a height-adjustable workspace",
    price: 149.95,
    quantity: 6,
  },
  {
    image: gamingLaptop,
    id: 12,
    name: "Gaming Laptop",
    description: "High-performance laptop for intense gaming sessions",
    price: 1499.99,
    quantity: 8,
  },
  {
    image: gamingMouse,
    id: 13,
    name: "Wireless Gaming Mouse",
    description: "Precise tracking and customizable RGB lighting",
    price: 69.95,
    quantity: 14,
  },
  {
    image: gamingKeyboard,
    id: 14,
    name: "Mechanical Gaming Keyboard",
    description: "Tactile and responsive keys for fast-paced gaming",
    price: 99.75,
    quantity: 11,
  },
  {
    image: monitor,
    id: 15,
    name: "4K Gaming Monitor",
    description: "Ultra-high definition display with fast refresh rate",
    price: 599.99,
    quantity: 6,
  },
  {
    image: vr,
    id: 16,
    name: "VR Headset",
    description: "Immersive virtual reality experience for gaming",
    price: 399.99,
    quantity: 5,
  },
  {
    image: headset,
    id: 17,
    name: "Wireless Gaming Headset",
    description: "Surround sound audio and noise-cancelling microphone",
    price: 149.99,
    quantity: 9,
  },
  {
    image: gamingDesk,
    id: 18,
    name: "Gaming Desk",
    description: "Reinforced desk with cable management and RGB lighting",
    price: 299.95,
    quantity: 7,
  },
  {
    image: PC,
    id: 19,
    name: "Gaming PC",
    description: "High-end desktop computer optimized for gaming",
    price: 1999.99,
    quantity: 4,
  },
];

export { Products };
