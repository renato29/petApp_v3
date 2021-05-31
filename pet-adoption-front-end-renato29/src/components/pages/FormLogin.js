import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom'
import { login } from '../../lib/api'

const handlerLogin = async (email, password) => {

  console.log(email, password)

  const data = await login({
    "email": email,
    "password": password,
  })
  console.log(data)
  if (data === undefined) {
    return false;

  } else {
    console.log(data)
    localStorage.setItem('auth', JSON.stringify(data));
    window.location.assign("/login")

  }

}


const FormLogin = () => {


  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [alert, setAlert] = useState(true);
  const [error, setError] = useState("");


  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    try {
      window.location.replace("http://localhost:3000/");
    } catch (error) {
      console.error(error);
      setError("Email and password do not match!");
    } 
  }

  return (
    <>
    {/* {Form Login} */}
      <h1 className='pb-4'>Login </h1>
      <form className='  justify-content-center mx-auto'  >
        <div className="login_form_wrapper">
          <div className="container ">
            <div className="row">
              <div className="col-md-12 col-md-offset-2 ">
                {/* login_wrapper */}
                <div className="login_wrapper">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-xs-12 col-sm-6">
                      <Link to="#" className="btn btn-primary facebook">
                        <span>Login with Facebook</span> <i className="fa fa-facebook" /> </Link> </div>

                    <div className="col-lg-6 col-md-6 col-xs-12 col-sm-6">

                
                    </div>
                  </div>
                  <h2>or</h2>
                  <div className="formsix-pos">
                    <div className="form-group i-email">
                      <input type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        className="form-control"
                        required id="email2"
                        placeholder="Email Address" /> </div>
                  </div>
                  <div className="formsix-e">
                    <div className="form-group i-password">
                      <input
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        className="form-control"
                        required id="password"
                        placeholder="Password" /> </div>
                  </div>
                  <div className="login_remember_box">
                    <label className="control control--checkbox">Remember me
                  <input type="checkbox" /> <span className="control__indicator" /> </label>
                    <Link to="" className="forget_password"> Forgot Password </Link> </div>
                  <div className="login_message">
                    <p>Don’t have an account ? <Link to=""> Sign up </Link> </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Alert variant='danger' className={alert === true ? "close " : ""} >User Wrong </Alert>

        <Button
          className='btn btn-primary text-uppercase'
          onClick={() => setAlert(handlerLogin(email, password))}>Login</Button>

        <NavLink to='/dashboard'><button className='btn btn-primary text-uppercase'>Admin</button></NavLink>
      </form>
    </>
  )
}

export default FormLogin;
