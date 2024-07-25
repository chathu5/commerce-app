import React, {useState} from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import Color from "../components/Color";
import sp1 from "../images/sp2.avif";
import tv1 from "../images/tv1.webp";
import camera1 from "../images/camera 8.jpg";
import headphone1 from "../images/headp1.jpg";
import watch1 from "../images/watch 3.webp";
import lap1 from "../images/lap 3.jpg";
import phone1 from"../images/phone 7.jpg";
import tab1 from "../images/tab 1.webp";
import on1 from "../images/line 1.png" ;
import on2 from "../images/line 3.png" ;
import on3 from "../images/line 2.png" ;
import on4 from "../images/line 4.avif"  ;
import Container from '../components/Container';

const OutStore = () => {
  const [grid, setGrid] = useState(4);

  const availableColors =  ['#F0F8FF','#FAEBD7', '#FFD700','#D3D3D3', '#F5F5DC', '#FFB6C1', '#E0FFFF','#F0FFF0', '#E6E6FA',  '#FFFACD',
    '#000000', '#2C3E50', '#34495E', '#2E8B57', '#8B0000', '#4B0082', '#556B2F', '#A52A2A', '#708090', '#800080',];
return (
    <>
    <Meta title={"Out Store"} />
     <BreadCrumb title="Out Store"/>
     <Container class1="store-wrapper home-wrapper-2 py-5">
   
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Shop By Categories</h3>
              <div>
                <ul className="ps-0">
                  <li>Watch</li>
                  <li>Tv</li>
                  <li>Camera</li>
                  <li>Laptop</li>
                </ul>
              </div>
            </div>
            <div className="filter-card mb-3">
            <h3 className="filter-title">Filter By</h3>
            <div>
              <h5 className="sub-title">Availablity</h5>
              <div>
              <div className="form-check">
                <input 
                className="form-check-input"
                type="checkbox"
                value="" 
                id=""
                />
                 <label className="form-check-label" htmlFor="">
                 In Stock (1)
                 </label>
              </div>
              <div className="form-check">
                <input 
                className="form-check-input" 
                type="checkbox" 
                value="" 
                id="" 
               />
                 <label className="form-check-label" htmlFor="">
                 Out of Stock (0)
                 </label>
              </div>
              </div>
              <h5 className="sub-title">Price</h5>
              <div className="d-flex align-items-center gap-10">
              <div className="form-floating">
              <input 
              type="email" 
              className="form-control" 
              id="floatingInput" 
              placeholder="From"
              />
            <label htmlFor="floatingInput">From</label>
            </div>
            <div className="form-floating">
              <input 
              type="email" 
              className="form-control"
             id="floatingInput" 
              placeholder="To"
              />
            <label htmlFor="floatingInput1">To</label>
            </div>
              </div>
              <h5 className="sub-title">Colors</h5>
              <div>
                <div >
                <Color colors={availableColors} />
                               </div>
              </div>
              <h5 className="sub-title">Size</h5>
              <div>
                <div classname="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="color-1"
                    />
                    <label className="form-check-label" htmlFor="color-1">
                      S (2)
                    </label>
                </div>
                <div classname="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="color-2"
                    />
                    <label className="form-check-label" htmlFor="color-2">
                      M (1)
                    </label>
                </div>
                <div classname="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="color-1"
                    />
                    <label className="form-check-label" htmlFor="color-1">
                      L (o)
                    </label>
                </div>
                <div classname="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="color-1"
                    />
                    <label className="form-check-label" htmlFor="color-1">
                      XL (0)
                    </label>
                </div>
              </div>
            </div>
            </div>
            <div className="filter-card mb-3">
            <h3 className="filter-title">Product Tags </h3>
            <div>
              <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                  Headphone
                </span>
                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                  Laptop
                </span>
                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                 Mobile
                </span>
                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                Tv
                </span>
                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                 Speaker
                </span>
                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                JBL
                </span>
              </div>
            </div>
            </div>
            <div className="filter-card mb-3">
            <h3 className="filter-title">
                Random Product
              </h3>
              <div>
                <div className="random-products mb-3 d-flex">
                  <div className="w-50">
                    <img 
                    src={sp1}
                    className="img-fluid"
                     alt="tv" />
                  </div>
                  <div className="w-50">
                    <h5>
                    OLED display with perfect blacks and stunning contrast
                    </h5>
                    <ReactStars
                         count={5} 
                         size={24} 
                         value={4}
                         edit={false}
                         activeColor="#ffd700" 
                         />
                        <b>$1,299</b> 
                  </div>
                </div>
                <div className="random-products d-flex">
                  <div className="w-50">
                    <img 
                    src={tv1}
                    className="img-fluid"
                     alt="tv" />
                  </div>
                  <div className="w-50">
                    <h5>
                    Experience stunning 8K resolution with the Samsung QLED 8K TV. 
                    </h5>
                    <ReactStars
                         count={5} 
                         size={24} 
                         value={4}
                         edit={false}
                         activeColor="#ffd700" 
                         />
                        <b>$4999</b> 
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="filter-sort-grid mb-4">
              <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center gap-10">
                <p className="mb-0 d-block" style={{width:"100px"}}>Sort By:</p>
                <select 
                    name=""
                    defaultValue={"manual"}
                    className="form-control form-select"
                    id=""
                  >    
                      <option value="manual">Featured</option>
                      <option value="best-selling" >Best Selling
                      </option>
                      <option Value="title-ascending">Alphabetically , A-Z</option>
                      <option value="title-descending">Alphabetically, Z-A</option>
                      <option value="price-ascending">Price, low to high</option>
                      <option value="price-descending">Price, high to low</option>
                      <option value="created-ascending">Date, old to new</option>
                      <option value="created-descending">Date, new to old</option>
                    </select>
              </div>
              <div className="d-flex align-items-center gap-10">
                <p className="totalproducts mb-0">21 Products</p>
                 <div className="d-flex gap-10 align-items-center grid">
                    <img 
                    onClick={() => {
                      setGrid(3);
                    }}
                      src={on1}
                      className="d-block img-fluid" 
                      alt="grid"
                   />
                   <img
                     onClick={() => {
                      setGrid(4);
                    }} 
                    src={on2}
                     className="d-block img-fluid" 
                     alt="grid"
                   />
                   <img 
                    onClick={() => {
                      setGrid(6);
                    }}
                   src={on3} 
                   className="d-block img-fluid" 
                   alt="grid" 
                  />
                   <img
                    onClick={() => {
                      setGrid(12);
                    }} 
                   src={on4}
                   className="d-block img-fluid" 
                   alt="grid" 
                  />
               </div>
             </div>
                
              </div>
             </div>
             <div className="product-list pb-5">
               <div className="d-flex gap-10 flex-wrap">
                <ProductCard
                 grid={grid}
                 imgurl2={headphone1} 
                 brand1="Havels"
                 ptitle1="Sony" 
                 pp1="Experience industry-leading noise cancellation and exceptional sound quality with Sony WH-1000XM4 headphones,
                  perfect for music lovers."
                 price1="$349.99"

                 imgurl={camera1} 
           brand="Havels"
           ptitle="Canon EOS Rebel T7"
           pp="The Canon EOS Rebel T7 is an excellent entry-level DSLR camera that combines 
           fantastic image quality with intuitive controls."
           price="$3899.00"
                
                />
                <ProductCard
                 grid={grid}
            imgurl={watch1} 
            brand="Havels"
            ptitle="Rolex Submariner"
            pp="The Rolex Submariner is a symbol of excellence, precision, and timeless style,
             featuring a robust design and water resistance."
            price="$8500.00"
           
 
            imgurl2={lap1} 
            brand1="Havels"
            ptitle1="Dell XPS 13" 
            pp1="The Dell XPS 13 combines sleek design with powerful performance, featuring a 13.4-inch InfinityEdge display,
             Intel Core i7 processor, and up to 16GB of RAM. Ideal for professionals and students alike."
            price1="$1399.00"
          />
          <ProductCard
           grid={grid} 
           imgurl={phone1} 
           brand="Havels"
           ptitle="Apple iPhone 13 Pro"
           pp="The Apple iPhone 13 Pro features a stunning 6.1-inch Super Retina XDR display, 
           A15 Bionic chip, and an advanced triple-camera system. Experience exceptional performance and photography."
           price="$999.00"
         

           imgurl2={tab1} 
           brand1="Havels"
           ptitle1="Samsung Galaxy Tab S9" 
           pp1="The Samsung Galaxy Tab S9 boasts a 12.4-inch Super AMOLED display, 
           Snapdragon 865+ processor, and S Pen support. Enjoy a PC-like experience with the DeX mode."
           price1="$849.00"
          />
               </div>
             </div>
            </div>
          </div>
       
      </Container>
    
    </>
  );
}

export default OutStore;