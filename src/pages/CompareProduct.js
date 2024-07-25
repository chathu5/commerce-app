import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from "../components/Meta";
import Color from '../components/Color';
import tv1 from "../images/tv1.webp";
import speaker1 from "../images/speaker 1.jpg";
import cross from "../images/cross.webp";
import Container from '../components/Container';

const CompareProduct = () => {
  const availableColors = ['#8B0000','#2C3E50', '#2C3E50', ];
  const lightColors = ['#F0F8FF', '#FAEBD7', '#FFD700',];
  return (
  <>
   <Meta title={"Compare Products"} />
   <BreadCrumb title ="Compare Products" />
   <Container class1="compare-product-wrapper py-5 home-wrapper-2">
      <div className="row">
        <div className="col-3">
          <div className="compare-product-card position-relative">
            <img 
              src={cross}
              alt="cross"
              className="position-absolute cross img-fluid"
             />
              <div className="product-card-image">
                <img src={ tv1 } alt="tv" />
                </div> 
                <div className="compare-product-details">
                  <h5 className="compare-product-details">
                  Samsung QLED 8K
                  </h5>
                  <h6 className="price mb-3 mt-3">$4999.00</h6>
                </div>
                <div>
                  <div className="product-detail">
                    <h5>Brand:</h5>
                    <p>Havels </p>
                  </div>
                  <div className="product-detail">
                    <h5>Type:</h5>
                    <p>TV</p>
                  </div>
                  <div className="product-detail">
                    <h5>Availablity:</h5>
                    <p>In Stock </p>
                  </div>
                  <div className="product-detail">
                    <h5>Color:</h5>
                    <Color colors={lightColors} />
                  </div>
                  <div className="product-detail">
                    <h5>Size:</h5>
                    <div className="d-flex gap-15">
                      <p>S</p>
                      <p>L</p>
                    </div>
                  </div>
                </div>
          </div>
        </div>
        <div className="col-3">
          <div className="compare-product-card position-relative">
            <img 
              src={cross}
              alt="cross"
              className="position-absolute cross img-fluid"
             />
              <div className="product-card-image">
                <img src={speaker1} alt="speaker" />
                </div> 
                <div className="compare-product-details">
                  <h5 className="compare-product-details">
                  Sony SRS-XB43
                  </h5>
                  <h6 className="price mb-3 mt-3">$249.00</h6>
                </div>
                <div>
                  <div className="product-detail">
                    <h5>Brand:</h5>
                    <p>Havels </p>
                  </div>
                  <div className="product-detail">
                    <h5>Type:</h5>
                    <p>JBL</p>
                  </div>
                  <div className="product-detail">
                    <h5>Availablity:</h5>
                    <p>In Stock </p>
                  </div>
                  <div className="product-detail">
                    <h5>Color:</h5>
                    <Color colors={availableColors} />
                  </div>
                  <div className="product-detail">
                    <h5>Size:</h5>
                    <div className="d-flex gap-15">
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </div>
                </div>
          </div>
        </div>
      </div>
 </Container>
  </>
  )
}

export default CompareProduct;