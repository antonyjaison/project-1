import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Loading from "../../Loading/Loading";
import "./UsersTab.css";

const UsersTab = () => {
    const [loading, setLoading] = useState(true);
    const [userLoading, setUserLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const user = useSelector((state) => state.user.user);
    const fetchUsers = async () => {
        setLoading(true);
        const res = await fetch("http://localhost:4000/user/", {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${user.token}`,
            },
        });
        if (res.ok) {
            const json = await res.json();
            setUsers(json);
        }
        setLoading(false);
    };
    useEffect(() => {
        fetchUsers();
    }, []);

    const deleteUser = async (id) => {
        setUserLoading(true);
        const res = await fetch(`http://localhost:4000/user/${id}`, {
            method: "DELETE",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${user.token}`,
            },
        });
        await fetchUsers();
        setUserLoading(false);
    };
    const handleUserChange = async (e, id) => {
        setUserLoading(true);
        const res = await fetch(`http://localhost:4000/user/${id}`, {
            method: "PATCH",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${user.token}`,
            },
            body: JSON.stringify({
                userType: e.target.value,
            }),
        });
        await fetchUsers();
        setUserLoading(false);
    };
    if (loading) return <Loading />;

    if (users.length === 0)
        return (
            <h2 className="mt-3 text-center text-lg text-danger">No Users</h2>
        );

    return (
        <div className="users_tab">
            {users.map((user) => (
                <div key={user._id} className="card my-2 mx-4">
                    <div className="card-body">
                        <span>
                            Name:
                            <h3 className="card-title"> {user.name}</h3>
                        </span>
                        <p className="card-text">Email: {user.email}</p>
                        <div className="d-flex mt-3 justify-content-between">
                            <select
                                className="select"
                                onChange={(e) => handleUserChange(e, user._id)}
                                name="userType"
                                value={user.userType}
                                id="userType"
                                disabled={userLoading}
                            >
                                <option value="ADMIN">ADMIN</option>
                                <option value="NORMAL">NORMAL</option>
                            </select>
                            <button
                                onClick={() => deleteUser(user._id)}
                                className="btn btn-danger mt-3"
                            >
                                DELETE USER
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UsersTab;
