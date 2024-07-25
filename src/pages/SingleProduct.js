import React,{useState} from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from 'react-image-zoom';
import Color from "../components/Color";
import { VscGitCompare } from "react-icons/vsc";
import { GoHeart } from "react-icons/go";
import o1 from "../images/o6.jpg";
import o2 from "../images/o5.jpg";
import o3 from "../images/Eo7.avif";
import o4 from "../images/o1.jpg";
import h1 from "../images/head 4.jpeg";
import h2 from "../images/head 5.jpeg";
import h3 from "../images/head 6.jpeg";
import h4 from "../images/head 7.jpeg";
import headphone1 from "../images/headp1.jpg";
import Container from '../components/Container';

const SingleProduct = () => {
    const props = {
        width: 500, 
        height: 600, 
        zoomWidth: 600, 
        img: headphone1
      };
    const [orderedProduct, setorderedProduct] = useState(true);

   const  copyToClipboard = (text) => {
      console.log('text', text)
      var textField = document.createElement('textarea')
      textField.innerText = text
      document.body.appendChild(textField)
      textField.select()
      document.execCommand('copy')
      textField.remove()
    }
    const availableColors = ["#000000", "#FF0000", "#0000FF", "#FFFF00"];
  return (
    <>
     <Meta title={"Product Name"} />
     <BreadCrumb title="Product Name"/>
     <Container class1="main-product-wrapper py-5 home-wrapper-2">
       
            <div className="row">
                <div className="col-6">
                    <div className='main-product-image'>
                        <div>
                        <ReactImageZoom {...props} />
                        </div>
                    </div>
                    <div className="other-product-image d-flex flex-wrap gap-15">
                       <div>
                        <img src={h1} className="img-fluid" alt="" />
                       </div>
                       <div>
                       <img src={h2} className="img-fluid" alt="" />
                       </div>
                       <div>
                       <img src={h3} className="img-fluid" alt="" />
                       </div>
                       <div>
                       <img src={h4} className="img-fluid" alt="" />
                       </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="main-product-details">
                        <div className="border-bottom ">
                        <h3 className="title">Sony Headphone</h3>
                        </div>
                        <div className="border-bottom py-3">
                            <p className="price">$349.99</p>
                            <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0 t-review">( 2 Reviews)</p>
                      </div>
                      <a href="#review" className="review-btn">Write a Review</a>
                        </div>
                        <div className=" py-3">
                            <div className="d-flex gap-10 align-items-center my-2">
                                <h3 className="product-heading">Type :</h3>
                                <p className="product-data">Headsets</p>
                            </div>
                            <div className="d-flex gap-10 align-items-center my-2">
                            <h3 className="product-heading">Brand :</h3>
                            <p className="product-data">Havells</p>
                            </div>
                            <div className="d-flex gap-10 align-items-center my-2">
                            <h3 className="product-heading">Categories :</h3>
                            <p className="product-data">AirPods,&nbsp; Camera,&nbsp; Computer & Laptop ,&nbsp;  Headphone</p>
                            </div>
                            <div className="d-flex gap-10 align-items-center my-2">
                            <h3 className="product-heading">Tags :</h3>
                            <p className="product-data">Headphone &nbsp;   Laptop   &nbsp;  Mobile  &nbsp;   Oppo</p>
                            </div>
                            <div className="d-flex gap-10 align-items-center my-2">
                            <h3 className="product-heading">Availability :</h3>
                            <p className="product-data">541 In Stock </p>
                            </div>
                            <div className="d-flex gap-10 flex-column mt-2 mb-3">
                            <h3 className="product-heading">Size :</h3>
                            <div className="d-flex flex-wrap gap-15">
                              <span className="badge border border-1 bg-white text-dark border-secondary">S</span>
                              <span className="badge border border-1 bg-white text-dark border-secondary">M</span>
                              <span className="badge border border-1 bg-white text-dark border-secondary">L</span>
                            </div>
                            </div>
                            <div className="d-flex gap-10 flex-column mt-2 mb-3">
                            <h3 className="product-heading">Color</h3>
                            <Color colors={availableColors} />
                            </div>
                            <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                            <h3 className="product-heading">Quantity:</h3>
                            <div className="">
                              <input 
                              type="number" 
                              style={{width:"70px"}}
                              min={1}
                              max={10}
                              className="form-control"
                              name="" 
                              id="" 
                              />
                            </div>
                            <div className="d-flex align-items-center gap-30 ms-5">
                              <button className="button border-0" type="submit">
                                Add Cart
                              </button>
                              <button className="button singup" type="submit">
                              Buy it Now
                              </button>
                            </div>
                            <div classsName="d-flex align-items-center gap-15">
                            </div>
                            </div>
                            <div className="d-flex align-items-center gap-15">
                            <div>
                                <a href=""><VscGitCompare className="fs-5 me-2" />
                                Add to Compare</a>
                              </div>
                              <div>
                                <a href=""><GoHeart className="fs-5 me-2"/>
                                Add to Wishlist</a>
                              </div>
                            </div>
                            <div className="d-flex gap-10 flex-column  my-3">
                                <h3 className="product-heading">Shipping & Returns :</h3>
                                <p className="product-data">
                                  Free shipping and returns available on all orders !<br/>
                                 We Shipall us  domestic orders within <b>5-10 business days!</b>
                                </p>
                            </div>
                            <div className="d-flex gap-10 align-items-center my-3">
                                <h3 className="product-heading"> Product Link :</h3>
                                <a 
                                href="javascript:void(0);"
                                 onClick={()=>{
                                  copyToClipboard ("/images/head 7.jpeg");
                                  }}
                                  >
                                Copy Product Link
                                </a>
                            </div>
                            
                           </div>
                    </div>
                </div>
            </div>
        
     </Container>
    < Container class1="description-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
            <div clssName="row">
                <div className="col-12">
                <h4>Description</h4>
                   <div className="bg-white p-3">
                   <p>Experience industry-leading noise cancellation and exceptional sound quality with Sony WH-1000XM4 headphones,
                   perfect for music lovers.
                    </p>
                   </div>
                </div>
            </div>
        </div>
     </Container>
     <Container class1="reviews-wrapper  home-wrapper-2">
     
        <div className="row">
          <div className="col-12">
            <h3  id="review">Reviews</h3>
            <div className="review-inner-wrapper">
              <div className="review-head d-flex justify-content-between align-items-end">
                <div>
                  <h4 className="mb-2">Customer Reviews</h4>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">Based on 2 Reviews</p>
                  </div>
                </div>
                {orderedProduct && (
                  <div>
                    <a className="text-dark text-decoration-underline" href="">
                      Write a Review
                    </a>
                  </div>
                )}
              </div>
              <div  className="review-form py-4">
                <h4>Write a Review</h4>
              <form action="" className="d-flex flex-column gap-15">
                <div>
                <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={true}
                      activeColor="#ffd700"
                    />
                </div>
                  <div >
                    <textarea 
                    name="" 
                    id=""
                    className="w-100 form-control"
                     cols="30" 
                     rows="4"
                     placeholder='Comments'
                     ></textarea>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button className="button border-0">Submit Review</button>
                  </div>
                </form>
              </div>
              <div className="reviews mt-4">
                <div className="review">
                <div className="d-flex gap-10 align-items-center">
                    <h6 className="mb-0">Chathu</h6>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                </div>
                    <p className="mt-3"> I recently purchased the Sony WH-1000XM5 wireless noise-canceling headphones, 
                      and I couldn't be happier with my decision. These headphones are truly a game-changer in 
                      the world of audio equipment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
     
    </Container>
     <Container class1="popular-wrapper py-5 home-wrapper-2">
    
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading"> Our Popular Products</h3>
          </div>
          </div>
          <div className="row">
          <ProductCard
             imgurl={o1} 
             brand="Havels"
             ptitle="Aurora Smart Lamp"
             pp="Voice-controlled mood lighting with customizable colors."
             price="$179.00"
             
  
             imgurl2={o2} 
             brand1="Havels"
             ptitle1="Nimbus Fitness Tracker" 
             pp1="Advanced health metrics including ECG and blood oxygen monitoring."
             price1="$199.00"
           />
            <ProductCard
             imgurl={o3} 
             brand="Havels"
             ptitle="Aurora Smart Lamp"
             pp=" 360-degree audio with built-in voice assistant."
             price="$249.00"
             
  
             imgurl2={o4} 
             brand1="Havels"
             ptitle1="Echo Home Security Camera" 
             pp1="AI-powered motion detection and two-way audio communication."
             price1="$199.00"
            />
            
          </div>
   
    </Container>
    </>
  )
}

export default SingleProduct;