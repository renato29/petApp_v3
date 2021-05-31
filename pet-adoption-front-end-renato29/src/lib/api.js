import axios from "axios";
const BaseUrl = 'http://localhost:5050/api';

//READ HEADER token
function getAuthConfig(token) {
	return {
		headers: {
			Authorization: "Bearer " + token,
		},
	};
}

//Sign UP 
export async function signUp({firstName, lastName, phoneNum,  email, password }) {
    const response = await axios.post(`${BaseUrl}/user/register`, {firstName, lastName, phoneNum,  email, password }).catch(function (error) {
        if (error.response) {
          return error;
        }
    });
    return response.data;
}

//Login
export async function login(data) {
    const response = await axios.post(`${BaseUrl}/user/login`, data).catch(function (error) {
        if (error.response) {
          return error;
        }
    });  
      return response.data;   
}

//Edit Accout 
export async function editAccount(id,user,token) {
  const response = await axios.put(
		`${BaseUrl}/users/account/${id}`,
		{ data: user },
      // getAuthConfig(token)
	);
	return response.data;
}
////////////////////////////////////////////////////////////////////////////////////////////////

// GET pets from user id 
export async function getMyPets(token) {
	const response = await axios.get(BaseUrl + "/pets/myPetsPage", getAuthConfig(token)
	);
	return response.data;
}

//GET 1 user especific
export async function getUser(userId) {
  const response = await axios.get(`${BaseUrl}/users/${userId}`);
return response.data;
};


//POST 1 A pets By Id
export const getPetsByIds = async (petsIdsArr) => {
	const response = await axios.post(`${BaseUrl}/pets/petsByIds`, {
		petsIds: petsIdsArr,
	});
	return response.data;
};


/////////////////////////////////////////////////////////////

//post 1 new pet

export async function setNewPet( name,breed,type,status,color,weight,height,diet,alergy,bio ) {
	const response = await axios.post(`${BaseUrl}/pets/insert`, 
	{  "name":name,
	   "breed":breed,
	   "height": height, 
	   "weight": weight ,
	   "color":color ,
	   "diet":diet,
	   "alergy": alergy,
	   "status": status, 
	   "type":type,
	   "bio": bio 
   }).catch(function (error) {
        if (error.response) {
          return error;
        }
    });
    return response.data;
}
