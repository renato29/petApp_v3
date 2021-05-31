import React, { createContext, useState, useEffect } from 'react'
import uuid from 'uuid'

export const PetListContext = createContext()

const PetListContextProvider = props => {

  // const [pets,setPets]=useState( 
  //   [ {title:"Marley", id: 1, img: "  "},
  //     {title:"Garfield",id: 2},
  //     {title:"Heros",id: 3},
  //     {title:"Joe",id: 4},
  //     {title:"Leo",id: 5}
  //   ]
  // )

  const initialState = JSON.parse(localStorage.getItem('pets')) || []

  const [pets, setPets] = useState(initialState)

  useEffect(() => {
    localStorage.setItem('pets', JSON.stringify(pets))
  }, [pets])

  const [editItem, setEditItem] = useState(null)

  // Add pets
  const addPet = title => {
    setPets([...pets, { title , id: uuid() }])
  }

  // Remove pet
  const removePet = id => {
    setPets(pets.filter(task => task.id !== id))
  }

  // Clear pet
  const clearList = () => {
    setPets([])
  }

  // Find task
  const findItem = id => {
    const item = pets.find(task => task.id === id)
    setEditItem(item)
  }

  // Edit task
  const editPet = (title, id) => {
    const newPets = pets.map(pet => (pet.id === id ? { title, id } : pet))
    setPets(newPets)
    setEditItem(null)
  }

  return (
    <PetListContext.Provider
      value={{
        pets,
        addPet,
        removePet,
        clearList,
        findItem,
        editPet,
        editItem
      }}
    >
      {props.children}
    </PetListContext.Provider>
  )
}

export default PetListContextProvider