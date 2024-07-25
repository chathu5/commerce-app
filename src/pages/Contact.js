import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from "../components/Meta";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInfo } from "react-icons/fa6";
import Container from '../components/Container';

const Contact = () => {
  return (
    <>
     <Meta title={"Contact"} />
     <BreadCrumb title ="Contact" />
     <Container class1="contact-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.2674383086655!2d79.96960527448243!3d6.858516019180619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae251077f6ff7eb%3A0x34f3a90f82d2410c!2sPathum%20Uyana%2C%20Pannipitiya!5e0!3m2!1sen!2slk!4v1720973794325!5m2!1sen!2slk" 
          width="600" 
          height="450" 
          className="border-0 w-100"
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
         </iframe>
          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between">
              <div>
                <h3 className="contact-title mb-4">Contact</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div >
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder='Name'/>
                  </div>
                  <div >
                    <input 
                    type="email" 
                    className="form-control" 
                    placeholder='Email'/>
                  </div>
                  <div >
                    <input 
                    type="tel" 
                    className="form-control" 
                    placeholder='Mobile Number' />
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
                  <div>
                    <button className="button border-0">Submit</button>
                  </div>
                </form>
                </div>
                <div>
                <h3 className="contact-title mb-4">Get in Touch with us</h3>
                <div>
                  <ul className="ps-0">
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <IoHomeOutline className="fs-5"/>
                    <address className="mb-0">
                    Hno: 387 Nugemulla Road,
                       Mahanampura,
                       Colombo
                      </address>
                    </li>
                    <li  className="mb-3 d-flex gap-15 align-items-center">
                      <MdOutlineMailOutline className="fs-5"/>
                      <a href="tel:+93 74563459021">+93 74563459021</a>
                      </li>
                    <li  className="mb-3 d-flex gap-15 align-items-center">
                      <FaPhoneAlt className="fs-5"/>
                      <a href="mailto:devcorner@gmail.com">TechHive@gmail.com</a>
                      </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <FaInfo className="fs-5"  />
                      <p>Monday-Friday  10 AM -8 PM </p>
                      </li>
                  </ul>
                </div>
                </div>
            </div>
          </div>
        </div>
     
     </Container>
    </>
  )
}

export default Contact;