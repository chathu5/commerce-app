import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from '../components/Container';
import CustomerInput from '../components/CustomerInput';
const Singup = () => {
  return (
    <>
    <Meta title={"Sing Up"} />
    <BreadCrumb title="Sing Up"/>
   
    <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
            <div className="col-12">
                <div className="auth-card">
                    <h3 className="text-center mb-3 ">Sing Up</h3>
                    <form action="" className="d-flex flex-column gap-15">
                        <CustomerInput type="text" 
                             name="Fname" 
                             placeholder="Frist Name" />
                        <CustomerInput type="text" name="Lname" placeholder="Last Name"/>
                        <CustomerInput type="email" name="email" placeholder="Email"/>
                        <CustomerInput type="tel" name="Mobile" placeholder="Mobile Number"/>
                        <CustomerInput type="password" name="password" placeholder="Password"/>
                        <div>
                            <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                                    <button className="button border-0">Create</button>
                                    
                            </div>
                            </div>
                    </form>
                </div>
            </div>
        </div>
  
    </Container>
    </>
  )
}

export default Singup;