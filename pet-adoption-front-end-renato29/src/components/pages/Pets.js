import React, { useEffect, useState } from "react";
import axios from "axios";
import PetListContextProvider from '../context/PetListContextProvider'
import PetList from '../context/PetList'


const Pets = () => {

    const [petId, setPet] = useState([]);

    let urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("_id");

    useEffect(() => {
        loadPets();
    }, []);

    async function loadPets() {
        const url = `http://localhost:5050/api/pets/${id}`;
        const response = await axios.get(url);
        console.log(response);
        setPet(response.data.pet);

    }
    return (
        <>
            <PetListContextProvider>
                <PetList />
            </PetListContextProvider>
        </>
    );
};

export default Pets