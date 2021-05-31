import React, { useContext } from 'react'
import { PetListContext } from './PetListContextProvider'
import { Button } from 'react-bootstrap';

const Pet = ({ pet }) => {
  const { removePet, findItem } = useContext(PetListContext)
  return (
    <>
      <ui className=" d-flex mx-1 card">
        <img className=" card card-img-top" src=".../100px180/" alt="IMG" />
        <div className="card-body">
          <h5 className="card-title">{pet.title[2]}</h5>
          <p className="card-text">{pet.title[1]} </p>
          <p className="card-text">{pet.title[4]} </p>
        </div>
        <Button className="btn bg-success " onClick={() => findItem(pet.id)}>
          <i class="fas fa-heart"></i>
        </Button>{' '}
        <Button className="btn task-btn" onClick={() => findItem(pet.id)}>
          <i class="fas fa-info-circle"></i>
        </Button>{' '}
        <Button className="btn task-btn" onClick={() => findItem(pet.id)}>
          <i className="fas fa-pen"></i>
        </Button>{' '}
        <Button
          className="btn-delete task-btn bg-danger"  onClick={() => removePet(pet.id)}>
          <i className="fas fa-trash-alt"></i>
        </Button>{' '}
      </ui>
    </>
  )
}

export default Pet