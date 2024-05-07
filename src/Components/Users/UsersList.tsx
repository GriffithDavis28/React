import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import { Users } from "../Types/UserType";
import User from "./Users";
import "./UsersList.scss";

//Function to display the list of users

const UsersList: React.FC<any> = () => {

    const u = useContext(UserContext);

    const showDetails = (user: Users) => {
        u?.detail(user);
    }

    return(
        <div className="Users-list">
            {User.map((eachUser) => {
                return(
                    <div className="users" key={eachUser.id}>
                        <h1>{eachUser.id}. {eachUser.name}</h1>
                        <Link to={`/users/${eachUser.id}`}>
                        <button onClick={() => showDetails(eachUser)}>details</button></Link>
                    </div>
                );
            })}
        </div>
    )
}
export default UsersList;



