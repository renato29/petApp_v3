import React, { useContext } from "react";
import { PetListContext } from "../context/PetListContextProvider";
import Pet from "./Pet";

const PetList = () => {
  const { pets } = useContext(PetListContext);
  console.log(pets)
  return (
    <div className='d-flex'  >
      {pets.length ? (
        <ul className="list ">
          {pets.map(pet => {
            return <Pet pet={pet} key={pet.id} />;
          })}
        </ul>
      ) : (
        <div className="no-pets">No pets</div>
      )}
    </div>
  );
};

export default PetList;
