import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center py-3">
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
                <NavLink><button className="px-5 py-2 border">Login</button></NavLink>
                <NavLink><button className="px-5 py-2 border">Register</button></NavLink>
            </div>
        </div>
    );
};

export default Navbar;