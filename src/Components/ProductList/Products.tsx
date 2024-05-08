import PC from "../Assets/PC.webp";
import chargingpad from "../Assets/chargingpad.jpeg";
import gamingLaptop from "../Assets/gaminglaptop.jpg";
import headphones from "../Assets/headphones.jpg";
import helmet from "../Assets/helmet.webp";
import keyboardMouse from "../Assets/keyboardandmouse.jpg";
import monitor from "../Assets/monitor.avif";
import speaker from "../Assets/pulse.jpg";
import surface from "../Assets/surface.jpeg";
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
    images:["https://id-test-11.slatic.net/p/c18b0897c32df27b8bf7a3868d41fd5e.jpg", "https://data.outletmoto.eu/imgprodotto/agv-k-1-integral-motorcycle-helmet-top-winter-test-2015_66404_zoom.jpg", "https://dainese-cdn.thron.com/delivery/public/image/dainese/0b6ad147-dd95-43fa-9b9f-2c679840a927/ramfdh/std/615x615/k1-top-ece2205-winter-test-2015.jpg?format=auto"]
  },
  {
    image: surface,
    id: 2,
    name: "Microsoft Surface",
    description: "Powered by the latest intel processor",
    price: 1299.99,
    quantity: 6,
    images:["https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/RE59oHt_slim-pen-2_intel-evo?fmt=png-alpha", "https://i.ytimg.com/vi/Ke4kXDfsDuE/maxresdefault.jpg","https://news.microsoft.com/wp-content/uploads/prod/sites/45/2022/11/Surface-Release-Opening-Image.jpg"]
  },
  {
    image: keyboardMouse,
    id: 3,
    name: "Wireless Keyboard and Mouse Set",
    description: "Sleek and minimalist desktop accessory combo",
    price: 59.99,
    quantity: 22,
    images:["https://rukminim2.flixcart.com/image/850/1000/jasj6a80/mouse/r/c/f/apple-magic-mouse-2-and-magic-keyboard-2-original-imaezzd2w6ujtyja.jpeg?q=90&crop=false", keyboardMouse, "https://www.macworld.com/wp-content/uploads/2024/03/magic_keyboard_mouse_trackpad-2.jpg?quality=50&strip=all"]
  },
  {
    image: speaker,
    id: 4,
    name: "Portable Bluetooth Speaker",
    description: "Powerful audio in a compact, waterproof design",
    price: 79.95,
    quantity: 18,
    images:[speaker, "https://images-cdn.ubuy.ae/663089cfc89e85150571cecb-jbl-pulse-4.jpg", "https://i.gadgets360cdn.com/products/audio/large/1552566931_832_jbl_pulse-wireless-bluetooth-speaker.jpg"]
  },
  {
    image: headphones,
    id: 5,
    name: "Noise-Cancelling Headphones",
    description: "Immersive audio experience with ambient noise reduction",
    price: 179.99,
    quantity: 9,
    images:[headphones, "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQTQ3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1687660671363", "https://specials-images.forbesimg.com/imageserve/60cf7a0695529b182673a621/Beats-Solo-Pro-Wireless-with-Apple-H1-Headphone-Chip/960x0.jpg?fit=scale"]
  },
  {
    image: chargingpad,
    id: 6,
    name: "Wireless Charging Pad",
    description: "Fast, convenient charging for Qi-enabled devices",
    price: 39.99,
    quantity: 27,
    images:[chargingpad, "https://m.media-amazon.com/images/I/61qBGwej4VL._AC_UF1000,1000_QL80_DpWeblab_.jpg", "https://callmateindia.com/cdn/shop/files/Black-1.jpg?v=1710830940&width=2048"]
  },
  {
    image: gamingLaptop,
    id: 7,
    name: "Gaming Laptop",
    description: "High-performance laptop for intense gaming sessions",
    price: 1499.99,
    quantity: 8,
    images:[gamingLaptop, "https://www.asus.com/media/Odin/Websites/global/ProductLine/20200824120814.jpg", "https://cdn.mos.cms.futurecdn.net/B2tiEhsEHZ2JHA7DuS4Jvb.jpg"]
  },
  {
    image: monitor,
    id: 8,
    name: "4K Gaming Monitor",
    description: "Ultra-high definition display with fast refresh rate",
    price: 599.99,
    quantity: 6,
    images:[monitor, "https://dlcdnrog.asus.com/rog/media/1685137869361.webp","https://dlcdnwebimgs.asus.com/gain/A00C8F15-E127-4AB4-A5F3-B22FF0CB6BC9/w717/h525"]
  },
  {
    image: PC,
    id: 9,
    name: "Gaming PC",
    description: "High-end desktop computer optimized for gaming",
    price: 1999.99,
    quantity: 4,
    images:[PC, "https://www.asus.com/media/Odin/Websites/global/ProductLine/20230105010819.png","https://dlcdnrog.asus.com/rog/media/1697483674143.webp"]
  },
];

export { Products };
