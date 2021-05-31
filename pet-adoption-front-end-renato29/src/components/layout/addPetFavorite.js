import React from 'react'
import axios from 'axios';

function addPetFavorite() {


    useEffect(() => {
        const variable = {  
            
        }
        axios.post( 'api/pet/favorite/',variable)
        .then(response=>{ 
            if (response.data.success) {

            } else{ 
                 alert( 'Error to set  favorite  ')
            }
        })
    }, [])

    return (
        <div>
            <h1>Adopted Pets from user </h1>
        </div>
    )
}

export default addPetFavorite
