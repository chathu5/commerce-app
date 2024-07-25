import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import cross from "../images/cross.webp";
import o3 from "../images/Eo7.avif";
import o8 from "../images/o8.webp";
import o5 from "../images/o2.jpg";
import Container from '../components/Container';

const Wishlist = () => {
  return (
   <>
    <Meta title={"Wishlist"} />
    <BreadCrumb title="Wishlist"/>
    <Container class1="wishlist-wrapper home-wrapper-2 py-5">

        <div className="row">
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
               src={cross}
               alt="cross"
               className="position-absolute cross img-fluid"
               />
               <div className="wishlist-card-image">
                <img 
                src={o3}
                className="img-fluid w-100"
                 alt="JBL" />
               </div>
                <div className=" py-3 px-3">
                <h5 className="title">Aurora Smart Lamp</h5>
                <h6 className="price">$249.00</h6>
                </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
               src={cross}
               alt="cross"
               className="position-absolute cross img-fluid"
               />
               <div className="wishlist-card-image">
                <img 
                src={o8}
                className="img-fluid w-100"
                 alt="bell" />
               </div>
                <div className=" py-3 px-3">
                <h5 className="title">ZenithTech Smart Doorbell</h5>
                <h6 className="price">$229.00</h6>
                </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
               src={cross}
               alt="cross"
               className="position-absolute cross img-fluid"
               />
               <div className="wishlist-card-image">
                <img 
                src={o5}
                className="img-fluid w-100"
                 alt="smart" />
               </div>
                <div className=" py-3 px-3">
                <h5 className="title">Solstice Smart Thermostat</h5>
                <h6 className="price">$249.00</h6>
                </div>
            </div>
          </div>
        </div>
   
    </Container>
   </>
  )
}

export default Wishlist;