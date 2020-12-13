import axios from 'axios';

axios.defaults.baseUrl = '';
const BASE_URL = '';

const getAllUsersItems = () =>
  axios.get (BASE_URL).then(response => {
    return response.data.users;
  });    
  
const deleteUserItem = id => 
  axios.delete (`${BASE_URL}/${id}`).then(response => response.status === 200)
   
const addUserItem = item =>
  axios.post(BASE_URL, item).then(response => {
      return response.data.users;
    });
	
export { getAllUsersItems, deleteUserItem, addUserItem };
    

