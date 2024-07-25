import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import CustomerInput from "../components/CustomerInput"
const Login = () => {
  return (
    <>
    <Meta title={"Login"} />
    <BreadCrumb title="Login"/>
    <Container class1="login-wrapper py-5 home-wrapper-2">
      
        <div className="row">
            <div className="col-12">
                <div className="auth-card">
                    <h3 className="text-center mb-3 ">Login</h3>
                    <form action="" className="d-flex flex-column gap-15">
                        <CustomerInput type="email" name="email" placeholder="Email"/>
                        <CustomerInput type="password" name="password" placeholder="Password"/>
                      <div>
                            <Link to="/forgot-password">Forget Password ?</Link>
                            <div className="d-flex justify-content-center gap-15 align-items-center">
                                    <button className="button border-0"type="submit">Login</button>
                                    <Link  to="/singup"className="button singup">SingUp</Link>
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

export default Login;