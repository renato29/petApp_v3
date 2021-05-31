import React, { useState, useEffect,useContext } from 'react';
import '../layout/CSSPages/profSet.css';
import { Button, Link, NavLink } from 'react-router-dom';
import Footer from '../layout/Footer';
const axios = require('axios').default;
// this is the user Profile Settings
function ProfSet() {
  
  const userData = JSON.parse(localStorage.getItem("auth"))

  const [user, setUser] = useState('');
  const [firstName, setFirstName] = useState(userData.result.firstName)
  const [lastName, setLastName] = useState(userData.result.lastName);
  const [email, setEmail] = useState(userData.result.email);
  const [phoneNum, setPhoneNum] = useState(userData.result.phoneNum);
  const [password, setPassword] = useState(userData.result.password);
  const [rep_pass, setRep_pass] = useState(userData.result.resp_pass);
  const [address, setAdress] = useState("");
  const [country, setCountry] = useState("");
  const [bank, setBank] = useState("");
  const [account, setAccount] = useState("");

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");


  function handleChange(event) {
    const { name, value } = event.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setLoading(true);
      setError("");
      console.log(user);

    } catch (error) {
      console.error(error);
    }
  }

  function handleSaveProfile() {

    axios.post('http://localhost:5050/api/user/update/:id',
      { 
        firstName: firstName,
        lastName: lastName,
        phoneNum: phoneNum,
        email: email, 
        address: address,
        country: country,
        bank:bank,
        account:account ,        
      
      })
    }

return (
  <>
    <div className="container rounded bg-white mt-5">
      <div className="row">
        <div className="col-md-4 border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img alt="imagem" className="rounded-circle mt-5" src="https://i.imgur.com/0eg0aG0.jpg" width={90} /><span className="font-weight-bold">Profile Image</span><span alt="img" className="text-black-50">                  <button className="btn btn-primary profile-button" type="button">Upload Image</button></span><span></span></div>
        </div>
        <div className="col-md-8">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="d-flex flex-row align-items-center back"><i className="fa fa-long-arrow-left mr-1 mb-1" />
                <Link to="/login"><h6>My Account</h6></Link>
              </div>
              <Link to="/updateprof"><h6 className="text-right">Edit Profile</h6></Link>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="row mt-2">
                <div className="col-md-6"><input onChange={handleChange} defaultValue={firstName} type="text" className="form-control" placeholder="first name" /></div>
                <div className="col-md-6"><input onChange={handleChange} defaultValue={lastName} type="text" className="form-control" placeholder="last Name" /></div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6"><input onChange={handleChange} defaultValue={email} type="text" className="form-control" placeholder="Email" /></div>
                <div className="col-md-6"><input onChange={handleChange} defaultValue={phoneNum} type="text" className="form-control" placeholder="Phone number" /></div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6"><input onChange={handleChange} type="text" className="form-control" placeholder="Address" /></div>
                <div className="col-md-6"><input onChange={handleChange} type="text" className="form-control" placeholder="Country" /></div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6"><input onChange={handleChange} type="text" className="form-control" placeholder="Bank Name" /></div>
                <div className="col-md-6"><input onChange={handleChange} type="text" className="form-control" placeholder="Account Number" /></div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6"><input onChange={handleChange} type="text" className="form-control" placeholder="Password" /></div>
                <div className="col-md-6"><input onChange={handleChange} type="text" className="form-control" placeholder="Repeat Password" /></div>
              </div>
              <NavLink to="/profset/userupdate" className="mt-5 text-right">
                <button className="btn btn-primary profile-button" type="button" onClick={handleSaveProfile}>Save Profile</button>
              </NavLink>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Footer stye={{ "background-color": "#239b4c" }}></Footer>
  </>
)
}

export default ProfSet;