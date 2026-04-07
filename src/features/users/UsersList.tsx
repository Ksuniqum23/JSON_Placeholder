import "../users/components/usersList.css";
import {useAppDispatch} from "../../app/hooks.ts";
import {fetchUsers} from "./usersSlice.ts";
import {useEffect} from "react";
import type {RootState} from "../../app/store.ts";
import {useSelector} from "react-redux";
import UserCard from "./components/UserCard.tsx";

const UsersList = () => {
    const { users, loading, error } = useSelector((state: RootState) => state.users);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <div className="users-grid-container">
            {loading && <div>Loading...</div>}
            {error && <div>Error: {error}</div>}
            <div className="users-grid">
                {users && users.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
            </div>
        </div>
    )
}

export default UsersList;
