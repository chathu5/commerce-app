import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from "../components/Meta";
import BlogCard from "../components/BlogCard";
import Home from "../pages/Home";
import blog1 from "../images/vid 2.webp";
import blog2 from "../images/vid.avif";
import blog3 from "../images/vid 3.webp";
import blog4 from "../images/vid 3.jpg";
import { Link } from 'react-router-dom';
import Container from '../components/Container';
const Blog = () => {
  return (
    <>
     <Meta title={"Blogs"} />
     <BreadCrumb title ="Blogs" />
     <Container class1="blog-wrapper home-wrapper-2 py-5">
       <div className="row">
                <div className="col-3">
                <div className="filter-card mb-3">
              <h3 className="filter-title">Find By Categories</h3>
              <div>
                <ul className="ps-0">
                  <li>Home</li>
                  <li>Our Store</li>
                  <li>Blogs</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
                </div>
                <div className="col-9">
                    <div className="row">
                        <div className="col-6 mb-3">
                        <BlogCard 
            bimg={blog1}
            bdate="August 10, 2024"
            btitle="Top 5 Must-Have Smart Devices for Your Home in 2024"
            bdesc="  As technology evolves, so does our need for smarter, more efficient devices. 
            In this post, we highlight the top five must-have smart devices for 2024, ..."
          />
         
                        </div>
                        <div className="col-6 mb-3">
                        <BlogCard 
                bimg={blog2}
                bdate="August 10, 2024"
                btitle="Top Benefits of ZenithTech’s Smart Video Technology for Your Home"
                bdesc="Discover the advantages of integrating ZenithTech’s Smart Video Technology into your home.... "
          />
                        </div>
                        <div className="col-6 mb-3">
                        <BlogCard 
          bimg={blog3}
          bdate="August 10, 2024"
          btitle="How ZenithTech’s Smart Watch Can Transform Your Fitness Routine"
          bdesc=" Elevate your fitness journey with ZenithTech’s latest Smart Watch.
           This blog delves...."
          />
                        </div>
                        <div className="col-6 mb-3">
                        <BlogCard 
          bimg={blog4}
          bdate="August 10, 2024"
          btitle="The Future of Home Security: Innovations in Smart Cameras"
          bdesc="  Security technology is advancing rapidly, and ZenithTech’s latest Smart Camera is leading the way. 
          This post explores the innovations ...... "
          />
                        </div>
                    </div>
                </div>
            </div>
            </Container>
    </>
  )
}

export default Blog;