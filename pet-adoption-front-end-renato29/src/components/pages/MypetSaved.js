import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import PetListContextProvider from '../context/PetListContextProvider'
import PetList from '../context/PetList'
import PetsForm from '../context/PetsForm'

import Footer from '../layout/Footer'

const MypetSaved = ({ petItem, index, handleRemove }) => {

  return (
    <><PetListContextProvider>
      <div className='container-flex'>
        <div className='form-box p-auto'>
          <h1 className="display-5 text-uppercase py-1 text-center Title ">Create new PET</h1>
          <div className='container '>
            <div className="p-4" >
              <PetsForm />
              <div className="p-4 pet-list">
                <h3> List of my added Pets</h3>
              </div>
            </div>
            <PetList />
          </div>
        </div>
        <Footer />
      </div>
    </PetListContextProvider>
    </>
  )
}

export default MypetSaved;

  