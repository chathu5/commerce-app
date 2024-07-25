import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import {Link} from 'react-router-dom';
import Container from '../components/Container';
import CustomerInput from '../components/CustomerInput';

const Resetpassword = () => {
  return (
  <>
    <Meta title={"Reset Password"} />
    <BreadCrumb title="Reset Password"/>
    <Container class1="login-wrapper py-5 home-wrapper-2">
       
        <div className="row">
            <div className="col-12">
                <div className="auth-card">
                    <h3 className="text-center mb-3 ">Reset Password</h3>
                    <form action="" className="d-flex flex-column gap-15">
                        <CustomerInput type="password" name="password" placeholder="Passsword"/>
                        <CustomerInput type="password" name="confirm-password" placeholder=" Confirm Password"/>
                        <div>
                      <div className="d-flex justify-content-center gap-15 align-items-center">
                                    <button className="button border-0">Ok</button>
                                    
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

export default Resetpassword