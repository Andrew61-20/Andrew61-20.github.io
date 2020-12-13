
// const BASE_URL = 'https://my-json-server.typicode.com/Andrew61-20/DB/users'
// const getAllUsersItems = () => fetch(BASE_URL)
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         return data
//       });
  
// const deleteUserItem = (id) => 
//        fetch(`${BASE_URL}/${id}`, {
//         method: 'DELETE'
//        })
//       .then((response) => {
//         return response.json();
//       })
      
// const addUserItem = item => fetch(BASE_URL, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//            },
//           body: JSON.stringify(item)
//         })
//         .then((response) => {
//           return response.json();
//         })
        	
// export { getAllUsersItems, deleteUserItem, addUserItem };

import axios from 'axios';

//axios.defaults.baseUrl = 'https://my-json-server.typicode.com/Andrew61-20/DB/users';
const BASE_URL = 'https://my-json-server.typicode.com/Andrew61-20/DB/users';

const getAllUsersItems = () =>
  axios.get (BASE_URL).then(response => {
    return response.data;
  });    
  
const deleteUserItem = id => 
  axios.delete (`${BASE_URL}/${id}`).then(response => response.status === 200)
   
const addUserItem = item =>
  axios.post(BASE_URL, item).then(response => {
      return response.data;
    });
	
export { getAllUsersItems, deleteUserItem, addUserItem };