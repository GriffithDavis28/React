import { useContext, useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ProductContext } from "../Context/ProductContext";
import { ProductType } from "../Types/ProductType";
import { Products } from "./Products";
import "./display.scss";

//Function to display the details of a product

const ProductDetails: React.FC = () => {

  const [visibility, setVisibility] = useState<boolean>(true);

  const {id}:any = useParams();
 console.log(id);
  const prodDetails = useContext(ProductContext);
  const selected = Products.filter((prod) => prod.id === +id)
  console.log(selected)

  const details = (prod: ProductType) => {
    prodDetails?.detail(prod);
  };

  const backToProducts = () => {
    window.location.pathname="/products"
  }

  useEffect(() => {
      setVisibility(false);

      return () =>{
        setVisibility(true)
      }
  }, [setVisibility])

  return (
    <div>
    <div className="details">
      <div>
        <img src={selected[0].image} alt={selected[0].name}/>
        <h1> Name: {selected[0].name} </h1>
        <br />
        <p>Description: {selected[0].description}</p>
        <br />
        <p>Price: {selected[0].price}</p>
        <br />
        <p>Quantity: {selected[0].quantity}</p>
        <br />
        <Carousel interval={3000}>
      {selected[0].images.map((url, index) => (
        <Carousel.Item key={index}>
          <img src={url} alt={`Slide ${index}`} />
        </Carousel.Item>
      ))}
    </Carousel>
    <button onClick={backToProducts}> {"Back"}</button>
      </div>
      {visibility && (
        <div className={`visibility ? "visible":"hidden"`}>
        </div>
      )}
    </div>
    </div>
  );
};

export default ProductDetails;
