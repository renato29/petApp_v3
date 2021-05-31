import React, { useState, useContext, useEffect } from 'react'
import { PetListContext } from '../context/PetListContextProvider'
import { Button } from 'react-bootstrap';
import { setNewPet } from '../../lib/api'

const PetsForm = () => {
  const { addPet, clearList, editPet, editItem } = useContext(PetListContext)

  const [title, setTitle] = useState('')
  const [name, setName] = useState('')
  const [breed, setBreed] = useState('')
  const [type, setType] = useState('')
  const [status, setStatus] = useState('')
  const [color, setColor] = useState('')
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [diet, setDiet] = useState('')
  const [bio, setBio] = useState('')
  const [alergy, setAlergy] = useState('')


  const handleSubmit = e => {
    e.preventDefault()
    if (!editItem) {
      setNewPet(name, breed, type, status, color, weight, height, diet, alergy, bio)
      addPet([name, breed, type, status, color, weight, height, diet, alergy, bio])
      setTitle('')

    } else {
      editPet(title, editItem.id)

    }
  }

  const handleChange = e => {
    setTitle(e.target.value)
  }

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title)
      console.log(editItem)
    } else {
      setTitle('')
    }
  }, [editItem])

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <div className='col-md-6 mb-4'>
          <input
            type="text"
            placeholder="Add Pet..."
            value={title}
            onChange={handleChange}
            required
            className="task-input"
          />
        </div>

        <select className="custom-select">
          <option
            value={type}
            onChange={(event) => setType(event.target.value)}
          >Type of Buddy</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
        </select>
        <div className="row mt-2">
          <div className="col-md-6"><input type="text" className="form-control" placeholder="Buddy name" onChange={(event) => { setName(event.target.value) }} /></div>
          <div className="col-md-6"><input type="text" className="form-control" placeholder="color" onChange={(event) => { setColor(event.target.value) }} /></div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6"><input type="text" className="form-control" placeholder="Breed" onChange={(event) => { setBreed(event.target.value) }} /></div>
          <div className="col-md-6"><input type="text" className="form-control" placeholder="weight" onChange={(event) => { setWeight(event.target.value) }} /></div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6">
            <select className="form-control"
              value={status}
              onChange={(event) => setStatus(event.target.value)}>
              <option value="AdoptStatusNone">Adoption Status</option>
              <option value="Adopted">Adopted</option>
              <option value="Foster">Foster</option>
            </select></div>
          <div className="col-md-6"><input type="text" className="form-control" placeholder="Height" onChange={(event) => { setHeight(event.target.value) }} /></div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6"><input type="text" className="form-control" placeholder="Hypoallergenic (yes/no)" onChange={(event) => { setAlergy(event.target.value) }} /></div>
          <div className="col-md-6"><input type="text" className="form-control" placeholder="Dietary restrictions" onChange={(event) => { setDiet(event.target.value) }} /></div>
        </div>

        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1" >Biography:</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={bio} onChange={(event) => { setBio(event.target.value) }}></textarea>
        </div>
        <div className="mt-5 text-right d-flex justify-content-between"></div>




        <div className="buttons">
          <Button type="submit" className="btn add-task-btn">
            {editItem ? 'Edit Pet' : 'Add Pet'}
          </Button>
          <Button className="btn clear-btn" onClick={clearList}>
            Return All Pets
        </Button>

        </div>
      </form>
    </>
  )
}

export default PetsForm