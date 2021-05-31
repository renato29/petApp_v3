import React, { useState, useEffect } from 'react'
import Footer from '../layout/Footer';
import SearchCard from '../layout/SearchComp/SearchCard'
import SearchSelect from '../layout/SearchComp/SearchSelect';
import Error from '../layout/SearchComp/Error'
import axios from 'axios'
import getDog from '../libs/getDog'
import '../layout/CSSPages/search.css'

const initDog = {

    images: "",
    breed: {
        id: 0,
        name: "",
    }
}

const Search = () => {
    const [dog, setDog] = useState(initDog);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [pets, setPets] = useState([]);

    useEffect(() => {
        updateDog();
        loadPets();
    }, [])

    const updateDog = (breedId) => {
        setLoading(true);
        getDog(breedId)
            .then((newDog) => {
                setDog(newDog)
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setError("Load again Dogs")
                setLoading(false);
            })

    }

    // Basic search 
    async function loadPets() {
        const url = "http://localhost:5050/api/pets";
        const response = await axios.get(url);
        console.log(response);
        setPets(response.data);
    }

    return (
        <>
            <div className='container'>
                <div className='container '>
                    <h1 className="display-5 text-uppercase py-2 text-center Title ">Select a Breed</h1>
                
                            <SearchSelect updateDog={updateDog} className="mx-5 my-4" />
                            {error && <Error error={error} />}
                            <div className='d-flex m-5' >
                                <div className='px-3' ><SearchCard dog={dog} updateDog={updateDog} loading={loading} /></div>
                            </div>
                      
                    </div>
            </div>
            <Footer styles={{ "background-color": "#239b4c" }}> </Footer>
        </>
    )
}


export default Search;