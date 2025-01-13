import axios from "axios";
import { useEffect, useState } from "react";
import User from "./User";


const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
            setUsers(res.data);
        });
    },[users]);

    return (
        <div className="row">
            <h1>Users</h1>
            {users.map(user => (
                <User key={user.id} user={user} />
            ))}
        </div>
    );
};

export default Users;