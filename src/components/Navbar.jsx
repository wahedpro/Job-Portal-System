import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Navbar = () => {

    const {user,logoutUser} = useContext(AuthContext);

    const handleToLogout =()=>{
        logoutUser()
        .then(result =>{
            console.log("Log out",result);
        })
        .catch(e=>{
            console.log(e.message);
        })
    }

    return (
        <div className="flex justify-between items-center py-3 mb-5">
            <NavLink to='/'><h1 className="text-2xl font-semibold">Job Portal</h1></NavLink>
            <div className="flex gap-3">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/'>All Jobs</NavLink>
                <NavLink to='/'>Add Jobs</NavLink>
                <NavLink to='/'>Application Page</NavLink>
                <NavLink to='/'>My Applications</NavLink>
                <NavLink to='/'>My JobPost</NavLink>
            </div>
            <div className="flex gap-2">
                {
                    user ? 
                    <>
                        <button onClick={handleToLogout} className="px-5 py-2 border ">Log Out</button>
                    </> 
                    : 
                    <>
                        <NavLink to='/login'><button className="px-5 py-2 border">Login</button></NavLink>
                        <NavLink to='/register'><button className="px-5 py-2 border">Register</button></NavLink>
                    </>
                }
            </div>
        </div>
    );
};

export default Navbar;