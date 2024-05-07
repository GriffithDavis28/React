import React from "react";
import { useParams } from "react-router-dom";
import "./UserDetails.scss";
import User from "./Users";

const UserDetails:React.FC = () =>{
    const {id}:any = useParams();
    console.log(id)
    const selectedUser = User.filter((user) => user.id === +id)
    console.log(selectedUser);

    const backToUsers = () => {
        window.location.pathname="/users"
    }

    return(
        <div>
            <button onClick={backToUsers}>{"Back"}</button>
            <div className="UserDetails">
                <img src={selectedUser[0].logo} alt={selectedUser[0].name} />
                <h1>{selectedUser[0].name}</h1>
                <p>Address: {selectedUser[0].address[0].address}</p>
                <p>City: {selectedUser[0].address[0].city}</p>
            </div>
        </div>
    )
}

export default UserDetails;
