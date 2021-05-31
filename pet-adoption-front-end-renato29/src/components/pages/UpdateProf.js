import React from 'react';
import Footer from '../layout/Footer';
import { NavLink } from 'react-router-dom';
import '../layout/CSSPages/profSet.css';


const INITIAL_USER = {
  FirstName: "",
  LastName: "",
  email: "",
  password: "",
  repeatedPass: "",
  phone: "",
};

function UpdateProf() {

  const [user, setUser] = React.useState(INITIAL_USER);
  const [loading, setLoading] = React.useState(false);
	const [error, setError] = React.useState("");


 
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

   function handleChange(event) {
		const { name, value } = event.target;
		setUser((prevState) => ({ ...prevState, [name]: value }));
  }

  return (
    <>
      <div className="container rounded bg-white mt-5">
        <div className="row">
          <div className="col-md-4 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img alt="imagem" className="rounded-circle mt-5" src="https://i.imgur.com/0eg0aG0.jpg" width={90} /><span className="font-weight-bold">John Doe</span><span alt="img" className="text-black-50">john_doe12@bbb.com</span><span>United States</span></div>
          </div>
          <div className="col-md-8">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="d-flex flex-row align-items-center back"><i className="fa fa-long-arrow-left mr-1 mb-1" />
                  <h6>Back to home</h6>
                </div>
                <h6 className="text-right">Edit Profile</h6>
              </div>
              <form error={Boolean(error)} loading={loading} onSubmit={handleSubmit}>
                <div className="row mt-2">
                  <div className="col-md-6"><input onChange={handleChange} type="text" className="form-control" placeholder="first name" /></div>
                  <div className="col-md-6"><input onChange={handleChange} type="text" className="form-control"  placeholder="Doe" /></div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6"><input onChange={handleChange} type="text" className="form-control" placeholder="Email"  /></div>
                  <div className="col-md-6"><input onChange={handleChange} type="text" className="form-control"  placeholder="Phone number" /></div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6"><input onChange={handleChange} type="text" className="form-control" placeholder="address" /></div>
                  <div className="col-md-6"><input onChange={handleChange} type="text" className="form-control"  placeholder="Country" /></div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6"><input onChange={handleChange} type="text" className="form-control" placeholder="Bank Name"  /></div>
                  <div className="col-md-6"><input onChange={handleChange} type="text" className="form-control" placeholder="Account Number" /></div>
                </div>
                <NavLink to="user_update" className="mt-5 text-right">
                  <button className="btn btn-primary profile-button" type="button" onClick={()=>{}} >
                    Udpate Link Profile</button></NavLink>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer stye={{ "background-color": "#239b4c" }}></Footer>
    </>
  )
}

export default UpdateProf;