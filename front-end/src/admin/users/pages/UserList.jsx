import { useContext } from "react";
import { AuthContext } from "../../../shared/context/auth-context";
// import { useNavigate } from 'react-router-dom';

const UserList = () => {
    const auth = useContext(AuthContext);
    // const navigate = useNavigate();
    if (!auth.isLoggedIn) {
        return (
            <div className="w-full p-6 bg-red-300 text-lg">Not allowed!</div>
        );
    }
    return (
        <div className="w-full p-6 bg-red-300 text-lg">UserList!</div>
    );
};

export default UserList;