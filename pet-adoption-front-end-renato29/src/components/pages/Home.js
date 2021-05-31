import React, {useState} from 'react';
import Footer from '../layout/Footer';
import ModalReg from '../layout/ModalReg'
import ModalLogin from '../layout/ModalLogin'
import GetInTouch from '../layout/GetIntouch';
import {useHistory} from 'react-router-dom'
import '../layout/modal.scss';


const Home = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalRegVis, setModalRegVis] = useState(false);

    const user = JSON.parse(localStorage.getItem('auth'));
    const History =useHistory();

    function userLogOut () {
        localStorage.clear()
        History.push("/")
		window.location.replace("http://localhost:3000/")
	  }
    return (
        <>  
            <div className='home-main-container'>
                <div className='container-home'>
                    <div className='form-box w-80' >
                        <div className="card-home text-center  ">
                            <div className="card-body-center my-4 ">
                                <h5 className="card-title w-text">Ready to meet your perfect Buddy? </h5>
                                
                                <button className="btn btn-primary mr-5" onClick={()=> setModalRegVis(true)} >Register</button>{modalRegVis ? (<ModalReg onClose={() => setModalRegVis(false)}>
                                </ModalReg>) : null}

                                <button className="btn btn-primary" onClick={() => setIsModalVisible(true)} >Login</button>
                                {isModalVisible ? (<ModalLogin onClose={() => setIsModalVisible(false)}>
                                </ModalLogin>) : null}
                            </div>
                            {localStorage.getItem('auth')?
                                user && (
                            <div className="w-text btn-sm btn btn-danger  " onClick={userLogOut}>
                                    LogOut
                            </div>): null }
                        </div>
                    </div>
                </div>
            </div>
            <GetInTouch />
            <Footer>
            </Footer>       
        </>
    )
}

export default Home;
