import { useState } from "react";
import controlImage from './../../assets/control.png';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth-context";
import { useNavigate } from "react-router-dom";

const SideBarNav = () => {
    const auth = useContext(AuthContext);
    const [open, setOpen] = useState(true);
    const [hover, setHover] = useState(false);
    const navigate = useNavigate();
    const logoutHandler = event => {
        event.preventDefault();
        auth.logout();
        navigate('/');
    };
    // eslint-disable-next-line no-unused-vars
    const mouseEnterHandler = _event => {
        setHover(true);
    };
    // eslint-disable-next-line no-unused-vars
    const mouseExitHandler = _event => {
        setHover(false);
    };
    const publicMenuList = [
        { title: "Home", to: "/" },
    ];

    const authMenuList = [
        { title: "User List", to: "/users", gap: true },
        { title: "Create User", to: "/" },
        { title: "Post List ", to: "/", gap: true },
        { title: "Create Post", to: "/" },
    ];

    const anonMenuList = [
        { title: "Login", to: "/Login", gap: true },
    ];
    const shouldOpen = (open || hover);
    return (
        <div  className='' onMouseEnter={mouseEnterHandler} onMouseLeave={mouseExitHandler}>
            <div className={`${shouldOpen? 'w-48' : 'w-[30px]'}  transition-all 
                duration-500 relative p-4 bg-gray-800`}>
                <img
                    src={controlImage}
                    onClick={() => setOpen(!open)}
                    onMouseEnter={(event) => {event.stopPropagation();}}
                    className={`w-[20px] absolute -right-3 border-2 rounded-full 
                            transition-all duration-500
                        border-dark-purple bg-dark-purple ${!shouldOpen && "rotate-180"} `} />
                

                {shouldOpen ? <ul className='mt-10'>
                    {publicMenuList
                        .map((item) => (
                            <li className={`flex gap-4 p-2
                            cursor-pointer
                            ${!shouldOpen && "justify-center"}
                            group hover:bg-blue-800 rounded-md transition-all duration-300
                            ${item.gap ? "mt-9" : "mt-2"} `} key={item.title}>
                                <Link to={item.to}>
                                    {shouldOpen ? <span className='text-white group-hover:font-bold'>{item.title}</span> : null}
                                </Link>
                            </li>
                        ))}
                    {auth.isLoggedIn && authMenuList
                        .map((item) => (
                            <li className={`flex gap-4 p-2
                            cursor-pointer
                            ${!shouldOpen && "justify-center"}
                            group hover:bg-blue-800 rounded-md transition-all duration-300
                            ${item.gap ? "mt-9" : "mt-2"} `} key={item.title}>
                                <Link to={item.to}>
                                    {shouldOpen ? <span className='text-white group-hover:font-bold'>{item.title}</span> : null}
                                </Link>
                            </li>
                        ))}{!auth.isLoggedIn && anonMenuList
                            .map((item) => (
                                <li className={`flex gap-4 p-2
                            cursor-pointer
                            ${!shouldOpen && "justify-center"}
                            group hover:bg-blue-800 rounded-md transition-all duration-300
                            ${item.gap ? "mt-9" : "mt-2"} `} key={item.title}>
                                    <Link to={item.to}>
                                        {shouldOpen ? <span className='text-white group-hover:font-bold'>{item.title}</span> : null}
                                    </Link>
                                </li>
                            ))}
                    {auth.isLoggedIn && (
                        <li className={`flex gap-4 p-2
                        cursor-pointer
                        ${!shouldOpen && "justify-center"}
                        group hover:bg-blue-800 rounded-md transition-all duration-300 mt-9`}
                            key='logout'>
                            {shouldOpen ? <button type="button" onClick={logoutHandler}
                                className='text-white group-hover:font-bold'
                            >Logout</button> : null}
                        </li>
                    )}
                </ul> : null}
            </div>
        </div>
    );
};

export default SideBarNav;
