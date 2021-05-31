import React, { useState, useEffect } from 'react'
import Footer from '../layout/Footer';
import SearchBar from '../layout/SearchBar';
import SearchType from '../layout/SearchComp/SearchType';
import axios from 'axios'
import getDog from '../libs/getDog'
import '../layout/CSSPages/search.css'
import SearchAdv from '../layout/SearchAdv'
import PetList from '../layout/SearchComp/PetList'


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
                    <h1 className="display-5 text-uppercase py-2 text-center Title ">Search</h1>
                    <div className='form-box'>
                        <div >Components: Conditional Rendering to basic/ advanced components
                            <div className='p-3'>
                                <SearchType />
                            </div>
                            <SearchBar className="mx-4 my-4" />
                            {/* <SearchSelect updateDog={updateDog} className="mx-4 my-4" />
                            {error && <Error error={error} />}
                            <div className='d-flex m-5' >
                                <div className='px-3' >
                                    <SearchCard dog={dog} updateDog={updateDog} loading={loading} /></div>
                            </div> */}
                        </div>

                        <div style={{ border: "1px solid black " }}>
                            Advanced Search 
                            
                            <SearchAdv pets={pets} />
                        </div>
                        <div>
			                <PetList pets={pets} />
		                </div>
                    </div>
                </div>
            </div>
            <Footer styles={{ "background-color": "#239b4c" }}> </Footer>
        </>
    )
}


export default Search;