import React from "react";


export default ({ user, update, index}) => {
	return (
      <tr onClick={() => update({active: index})}>
        <td><img src={`../../media/${user.image}.jpg`} alt="" className="user-image" /></td>
        <td>{user.name}</td>
        <td>{user.phone}</td>
      </tr>
    );
}