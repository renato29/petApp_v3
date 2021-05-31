import React from 'react'
function PetList({pets}) {

  function mapPetsToItems(petsArr=[]){
    
    return petsArr.map(pet =>({
      header: pet.name,
      image: pet.Picture,
      meta: pet.status,

      href: `/pet?_id=${pet._id}`
    }))
  }
  
  return <div
  
  stackable
  itemsPerRow="3"
  centered
   items={mapPetsToItems(pets) }
   ></div>;
 
   
  
}

export default PetList;
