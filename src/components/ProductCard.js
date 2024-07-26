import React from 'react';
import ReactStars from "react-rating-stars-component";
import{Link,useLocation} from "react-router-dom";
import addcart from "../images/arrow.png";
import addcart1 from "../images/eye.webp";
import addcart2 from "../images/bag.webp";
import wishlist from "../images/heart.webp";
const ProductCard = (props)=> {
  const { grid,imgurl,brand,ptitle,pp,price,imgurl2,brand1,ptitle1,pp1,price1}=props;
  let location = useLocation();
  console.log(grid);
  
  return (
    <>
    <div 
    className={`${location.pathname === "/product" ? `gr-${grid}` : "col-3"}`}
    >
        <Link to={`${
          location.pathname == "/"
          ?   "/product/:id"
          :location.pathname=='/product/:id'
           ? "/product/:id"
           :":id"
           }`}
            className="Product-Card position-relative">
          <div className="wishlist-icon position-absolute">
          <button className="border-0 bg-transparent">
            <img src={wishlist}alt="wishlist" />
            </button>
          </div>
            <div classname="product-image">
                <img 
                src= {imgurl} classname="img-fluid" alt="Product image" />
               </div>
            <div className="product-details">
               <h6 className="brand">{brand}</h6>
               <h5 className="product-title">
                {ptitle}
               </h5>
               <ReactStars
                count={5} 
                size={24} 
                value={4}
                edit={false}
                activeColor="#ffd700" />
                  <p  className={`${grid === 12 ? "d-block" : "d-none"} description`}>{pp}</p>
               <p className="price">{price}</p>
            </div>
            <div className="action-bar position-absolute">
              <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
              <img src={addcart} alt="addcart" />
              </button>
              <button className="border-0 bg-transparent">
              <img src={addcart1} alt="addcart" />
              </button>
              <button className="border-0 bg-transparent">
              <img src={addcart2} alt="addcart" />
              </button>
              </div>
            </div>
            </Link> 
    </div>
    <div 
    className={`${location.pathname === "/product" ? `gr-${grid}` : "col-3"}`}
    >
        <Link to={`${
          location.pathname == "/"
          ?   "/product/:id"
          :location.pathname=='/product/:id'
           ? "/product/:id"
           :":id"
           }`} 
           className="Product-Card position-relative">
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
            <img src={wishlist}alt="wishlist" />
            </button>
          </div>
            <div classname="product-image">
                <img 
                src= {imgurl2} classname="img-fluid" alt="Product image" />
               </div>
            <div className="product-details">
               <h6 className="brand">{brand1}</h6>
               <h5 className="product-title">
                {ptitle1}
               </h5>
               <ReactStars
                count={5} 
                size={24} 
                value={4}
                edit={false}
                activeColor="#ffd700" />
                  <p  className={`${grid === 12 ? "d-block" : "d-none"} description`}>{pp1}</p>
               <p className="price">{price1}</p>
            </div>
            <div className="action-bar position-absolute">
              <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
              <img src={addcart} alt="addcart" />
              </button>
              <button className="border-0 bg-transparent">
              <img src={addcart1} alt="addcart" />
              </button>
              <button className="border-0 bg-transparent">
              <img src={addcart2} alt="addcart" />
              </button>
              </div>
            </div>
            </Link> 
    </div>
    </>
  )
}

export default ProductCard;