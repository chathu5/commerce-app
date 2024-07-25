import React from 'react';
import {Link} from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import BreadCrumb from '../components/BreadCrumb';
import mainbanner1 from  "../images/b4.jpg";
import mainbanner2 from "../images/cart 1.avif";
import mainbanner3 from "../images/cart 3.avif";
import mainbanner4 from "../images/cart 4.avif";
import mainbanner5 from "../images/cart 1.jpg";
import camera1 from "../images/camera 8.jpg";
import headphone1 from "../images/headp1.jpg";
import watch1 from "../images/watch 3.webp";
import lap1 from "../images/lap 3.jpg";
import tv1 from "../images/tv1.webp";
import speaker1 from "../images/speaker 1.jpg";
import phone1 from"../images/phone 7.jpg";
import tab1 from "../images/tab 1.webp";
import f1 from "../images/f1.avif";
import f2 from "../images/fphone3.webp";
import f3 from "../images/fecho1.jpg";
import f4 from "../images/flap1.jpg";
import sp1 from "../images/sp2.avif";
import sp2 from "../images/sp3.webp";
import sp3 from "../images/sp4.webp";
import sp4 from "../images/sp4.jpg";
import o1 from "../images/o6.jpg";
import o2 from "../images/o5.jpg";
import o3 from "../images/Eo7.avif";
import o4 from "../images/o1.jpg";
import o5 from "../images/o2.jpg";
import o6 from "../images/o3.avif";
import o7 from "../images/o4.webp";
import o8 from "../images/o8.webp";
import b1 from "../images/op.jpg";
import b2 from "../images/lg.png";
import b3 from "../images/dell.png";
import b4 from "../images/hp.png";
import b5 from "../images/ap.webp";
import b6 from "../images/intel.jpg";
import b7 from "../images/asus.jpg";
import b8 from "../images/lenova.jpeg";
import b9 from "../images/sam.avif";
import b10 from "../images/red.webp";
import blog1 from "../images/vid 2.webp";
import blog2 from "../images/vid.avif";
import blog3 from "../images/vid 3.webp";
import blog4 from "../images/vid 3.jpg";
import Container from '../components/Container';
import {service} from "../utils/Data";

const Home = () => {
  return (
   <>
   <Container class1="home-wrapper-1 py-5"> 
    <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative ">
              <img
               src={mainbanner1}
               className="img-fluid rounded-3"
               alt="main-banner" width="250%" height="250%"
               />
               <div className="main-banner-content position-absolute">
                <h4>SUPERCHARGED FOR PROS .</h4>
                <h5> iPad S13+ Pro .</h5>
                <p> From $999.0 or $41.62/mo</p>
                <Link className="button">BUY NOW</Link>
               </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <div className="small-banner position-relative ">
              <img
               src={mainbanner2}
               className="img-fluid rounded-3"
               alt="main-banner"
               />
               <div className="small-banner-content position-absolute">
                <h4>BEST SALE</h4>
                <h5>Laptop Max</h5>
                <p> From $1699.00 or <br/> $64.62/mo</p>
               </div>
            </div>
            <div className="small-banner position-relative ">
              <img
               src={mainbanner3}
               className="img-fluid rounded-3"
               alt="main-banner"
               />
               <div className="small-banner-content position-absolute">
                <h4>NEW ARRIVAL</h4>
                <h5> Buy iPhone</h5>
                <p> From $599 or <br/> $ 49.91/mo. for 12 mo</p>
               </div>
            </div>
            <div className="small-banner position-relative ">
              <img
               src={mainbanner4}
               className="img-fluid rounded-3"
               alt="main-banner"
               />
               <div className="small-banner-content position-absolute">
                <h4>15% OFF</h4>
                <h5>Smartwatch 7</h5>
                <p> Shop the latest band <br/> styles and colors.</p>
               </div>
            </div>
            <div className="small-banner position-relative ">
              <img
               src={mainbanner5}
               className="img-fluid rounded-3"
               alt="main-banner"
               />
               <div className="small-banner-content position-absolute">
                <h4>Free ENGRAVING</h4>
                <h5>AirPods Max</h5>
                <p> High-fidelity playback & <br/> Ultra-low distortion</p>
               </div>
            </div>
            </div>
          </div>
        </div>
        </Container>
     <Container class1="home-wrapper-2 py-5">
  <div className="row">
    <div className="col-12">
      <div className="services d-flex align-items-center justify-content-between">
        {
          service?.map((i, j) => {
            return (
              <div className="d-flex align-items-center gap-15" key={j}>
                <img src={i.image} alt="service" width="50px" />
                <div>
                  <h6>{i.title}</h6>
                  <p className="mb-0">{i.tagline}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  </div>
</Container>
<Container class1="featured-wrapper py-5 home-wrapper-2">
<div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>
          <ProductCard 
           imgurl={camera1} 
           brand="Havels"
           ptitle="Canon EOS Rebel T7"
           pp="The Canon EOS Rebel T7 is an excellent entry-level DSLR camera that combines 
           fantastic image quality with intuitive controls."
           price="$3899.00"
           

           imgurl2={headphone1} 
           brand1="Havels"
           ptitle1="Sony" 
           pp1="Experience industry-leading noise cancellation and exceptional sound quality with Sony WH-1000XM4 headphones,
            perfect for music lovers."
           price1="$349.99"
         />
          <ProductCard
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
            imgurl={tv1} 
            brand="Havels"
            ptitle="Samsung QLED 8K"
            pp="Experience stunning 8K resolution with the Samsung QLED 8K TV. 
            Featuring Quantum HDR, Ultra Viewing Angle, and AI upscaling for an unparalleled viewing experience."

            price="$4999.00"
           
 
            imgurl2={speaker1} 
            brand1="Havels"
            ptitle1="Sony SRS-XB43" 
            pp1="Experience the power of EXTRA BASS with the Sony SRS-XB43. 
            This wireless speaker delivers deep, punchy sound and features a built-in mic for hands-free calls. 
            Water and dust resistant."
            price1="$249.00"
          />
          <ProductCard 
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
</Container>
  <Container class1="famous-wrapper py-5 home-wrapper-2">
  <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative ">
              <img
               src={f1}
               className="img-fluid "
               alt="watch"
               />
               <div className="famous-content position-absolute">
               <h5  className="text-dark">Big Screen</h5>
               <h6  className="text-dark">Smart Watch Series 7</h6>
                <p>From $399 or $16.62/mo*</p>
               </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative ">
              <img
               src={f2}
               className="img-fluid "
               alt="phone"
               />
               <div className="famous-content position-absolute">
                <h5>Face ID for secure authentication.</h5>
                <h6>Apple iPhone</h6>
                <p >From $699 to $1,399</p>
               
               </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative ">
              <img
               src={f3}
               className="img-fluid "
               alt="watch"
               />
               <div className="famous-content position-absolute">
                <h5>Alexa voice assistant for smart home control</h5>
                <h6>Amazon Echo</h6>
                <p>From  $49 to $229</p>
               
               </div>
            </div>
          </div>
          <div className="col-3">
            <div className=" gap-10  ">
                <div className="famous-card position-relative ">
              <img
               src={f4}
               className="img-fluid "
               alt="main-banner"
               />
               <div className="famous-content position-absolute">
               <h5  className="text-dark">Detachable keyboard for versatility.</h5>
                <h6  className="text-dark">Microsoft Surface</h6>
                <p  className="text-dark">From $799 to $2,299</p>
               </div>
             </div>
            </div>
            </div>
            </div>
  </Container>
  <Container class1="special-wrapper py-5 home-wrapper-2">
     
  <div className="row ">
            <SpecialProduct
            imgs={sp1}
            stitle="OLED display with perfect blacks and stunning contrast."
            sprice="$1,299"
            sprice2="$3,999"
            sp1="10"
            s1="10"
            s2="240"
            s3="1440"
            sproduct="Product : 20"
            />
            <SpecialProduct
             imgs={sp2}
             stitle="Keyless entry with remote access and monitoring."
             sprice="$229"
             sprice2="$279"
             sp1="7"
             s1="7"
             s2="168"
             s3="1440"
             sproduct="Product : 5"
            />
            <SpecialProduct
              imgs={sp3}
              stitle="Wireless VR headset with built-in sensors."
              sprice="$229"
              sprice2="$399"
              sp1="13"
              s1="7"
              s2="312"
              s3="1440"
              sproduct="Product : 19"
            />
            <SpecialProduct
             imgs={sp4}
             stitle="Wireless VR headset with built-in sensors."
             sprice="$199"
             sprice2="$249"
             sp1="3"
             s1="3"
             s2="72"
             s3="1440"
             sproduct="Product : 8"
            />
          
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
            <ProductCard
            imgurl={o5} 
            brand="Havels"
            ptitle="Solstice Smart Thermostat"
            pp=" Adaptive learning to optimize home temperature for energy savings."
            price="$249.00"
            
 
            imgurl2={o6} 
            brand1="Havels"
            ptitle1="Vortex Air Purifier" 
            pp1="Smart air quality monitoring and automatic adjustments."
            price1="$399.00"
            />
            <ProductCard
             imgurl={o7} 
             brand="Havels"
             ptitle="Samsung 50 inch Smart Tv"
             pp=" 4K Ultra HD display with integrated streaming services and voice control."
             price="$1,299.00"
             
  
             imgurl2={o8} 
             brand1="Havels"
             ptitle1="ZenithTech Smart Doorbell" 
             pp1="Facial recognition and real-time alerts to your phone."
             price1="$229.00"
            />
          </div>
  </Container>
  <Container class1="marque-warpper home-wrapper-2 py-5">
  <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
            <Marquee className="d-flex">
              <div className="mx-4 w-25">
                <img src={b1} alt="brand" />
              </div>
              <div className="mx-4 w-25">
                <img src={b2} alt="brand" />
              </div>
              <div className="mx-4 w-25">
                <img src={b3} alt="brand" />
              </div>
              <div className="mx-4 w-25">
                <img src={b4} alt="brand" />
              </div>
              <div className="mx-4 w-25">
                <img src={b5} alt="brand" />
              </div>
              <div className="mx-4 w-25">
                <img src={b6} alt="brand" />
              </div>
              <div className="mx-4 w-25">
                <img src={b7} alt="brand" />
              </div>
              <div className="mx-4 w-25">
                <img src={b8} alt="brand" />
              </div>
              <div className="mx-4 w-25">
            <img src={b9} alt="brand" />
              </div>
              <div className="mx-4 w-25">
                <img src={b10} alt="brand" />
              </div>
            </Marquee>
            </div>
          </div>
        </div>
  </Container>
  <Container class1="blog-wrapper py-5 home-wrapper-2">
  <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
          
            </div>
            <div className="row">
              <div className="col-3">
          <BlogCard 
            bimg={blog1 }
            bdate="August 10, 2024"
            btitle="Top 5 Must-Have Smart Devices for Your Home in 2024"
            bdesc=" As technology evolves, so does our need for smarter, more efficient devices. 
            In this post, we highlight the top five must-have smart devices for 2024, including...... "
          />
            </div>
            <div className="col-3">
          <BlogCard 
                bimg={blog2}
                bdate="August 10, 2024"
                btitle="Top Benefits of ZenithTech’s Smart Video Technology for Your Home"
                bdesc="Discover the advantages of integrating ZenithTech’s Smart Video Technology into your home.... "
                />
          
            </div>
            <div className="col-3">
          <BlogCard 
          bimg={blog3}
          bdate="August 10, 2024"
          btitle="How ZenithTech’s Smart Watch Can Transform Your Fitness Routine"
          bdesc=" Elevate your fitness journey with ZenithTech’s latest Smart Watch.
           This blog delves...."
          />
            </div>
            <div className="col-3">
          <BlogCard 
          bimg={blog4}
          bdate="August 10, 2024"
          btitle="The Future of Home Security: Innovations in Smart Cameras"
          bdesc="  Security technology is advancing rapidly, and ZenithTech’s latest Smart Camera is leading the way. 
          This post explores the innovations ...... "
          />
            </div>
            </div>
  </Container> 
   </>
  )
}

export default Home;
