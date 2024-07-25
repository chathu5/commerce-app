import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from 'react-router-dom';
import { MdArrowBack } from "react-icons/md";
import blog1 from "../images/vid 2.webp";
import Container from '../components/Container';

const SingleBlog = () => {
  return (
    <>
     <Meta title={"Dynamic Blog Name"} />
     <BreadCrumb title="Dynamic Blog Name"/>
     <Container class1="blog-wrapper home-wrapper-2 py-5">
       
            <div className="row">
                <div className="col-12">
                    <div className="single-blog-card">
                        <h3 className="title">
                        Top 5 Must-Have Smart Devices for Your Home in 2024
                        </h3>
                        <img src={blog1} className="img-fluid w-100" alt="blog"/>
                        <p>As technology evolves, so does our need for smarter, more efficient devices.
                           In this post, we highlight the top five must-have smart devices for 2024, including the newest additions to ZenithTech's collection. 
                           From the Smart Thermostat that adapts to your lifestyle to the Smart Doorbell with advanced security features, we break down 
                           what makes each device a game-changer. Learn about their unique features, benefits, and how 
                           they can simplify your life and enhance your home environment. </p>
                        <Link to="/blogs" className="d-flex align-items-center gap-10"><MdArrowBack className="fs-4" />Go Back To Blogs</Link>
                    </div>
                    </div>
            </div>
        
     </Container>
    </>
  )
}

export default SingleBlog;