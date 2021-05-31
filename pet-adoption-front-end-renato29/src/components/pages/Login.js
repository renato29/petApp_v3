import React, { useContext, useState } from 'react';
import Footer from '../layout/Footer';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import PetListContextProvider from '../context/PetListContextProvider';


const INITIAL_USER = {
    firstName: "",
    lastName: "",
    password: "",
    phoneNumber: "",

};
const userData = JSON.parse(localStorage.getItem("auth"))

const Login = () => {
    const [firstName, setFirstName] = useState(userData.result.firstName)
    const [lastName, setLastName] = useState(userData.result.lastName)
    const [city, setCity] = useState("")
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [disabled, setDisabled] = useState(true);

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            console.log("start loading");
            setLoading(true);
            setError("");
            setLoading(false);
        } catch (error) {
            setError("Something wrong...");
        } finally {
            setLoading(false);
        }
    }
    function handleChange(event) {
        const { name, value } = event.target;
        console.log(name, value)
    }
    return (
        <>
        <PetListContextProvider>
            <div className='main-container'>
                <div className='container-fluid'>
                    <div className='form-box ' >
                        <Container className="justify-content-md-center" >
                            <div className="justify-content-md-center">
                                <h1 className="p-4">Hi {firstName} {lastName} </h1>
                            </div>
                            
                            <NavLink to='/mypets'>
                                <button
                                    type="button"
                                    className="btn btn-primary btn-lg btn-block mx-3 my-3">Add new Pets
                                </button>
                            </NavLink>
                            <NavLink to='/profset'>
                                <button type="button" className="btn btn-primary btn-lg btn-block mx-3 my-3">
                                    Profile Settings
                                </button>
                            </NavLink>
                            <NavLink to='/search'>
                                <button type="button" className="btn btn-primary btn-lg btn-block mx-3 my-3">
                                    Search
                                </button>
                            </NavLink>
                        </Container>
                    
                    </div>
                </div>
                <Footer />
            </div>
            </PetListContextProvider>
        </>
    )
}
export default Login;
