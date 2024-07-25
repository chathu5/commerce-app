import React from 'react';
import {Link} from "react-router-dom";

const BlogCard = (props) => {
  const{bdate,btitle,bdesc,bimg}=props
  return (
   
 <div className="blog-card">
            <div classname="card-image">
                <img src={bimg} classname="img-fluid"  alt="blog" />
            </div>
            <div className="blog-content">
                <p className="date">{bdate}</p>
                <h5 className="title">{btitle}</h5>
                <p classsName="desc">{bdesc}</p>
                <Link to="/blog/:id" className="button">
                Read More
                </Link>
            </div>    
           </div>  
          
   
   

  );
};

export default BlogCard;