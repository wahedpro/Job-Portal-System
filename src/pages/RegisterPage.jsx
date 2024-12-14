import { useContext } from "react";
import { IoIosPerson, IoMdLock } from "react-icons/io";
import { MdEmail, MdInsertPhoto } from "react-icons/md";
import { NavLink } from "react-router-dom";
import AuthContext from "../context/AuthContext";


const RegisterPage = () => {

    const {createUser} = useContext(AuthContext);

    const handleToRegister = e=>{
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password =e.target.password.value;
        console.log(name,photo);

        createUser(email,password)
        .then(result => {
            console.log(result);
        })
        .catch(error =>{
            console.log(error.message);
        })
    }
    return (
        <div className="w-[50%] mx-auto">
            <div className="flex flex-col items-center gap-1 pb-5">
                <p className="text-[#3C65F7]">Register</p>
                <h1 className="text-3xl font-semibold">Lets Get Started</h1>
                <h3 className="text-xl">Sign Up and get access to all the features.</h3>
            </div>
            <form onSubmit={handleToRegister}>
                <div className="flex flex-col gap-3">

                    <label className="flex items-center gap-2 border pl-2">
                        <IoIosPerson size={20} />
                        <input className="grow py-2" type="text" name="name" placeholder="Enter Your Full Name" />
                    </label>

                    <label className="flex items-center gap-2 border pl-2">
                        <MdInsertPhoto size={20}/>
                        <input className="grow py-2" type="text" name="photo" placeholder="Enter Your Photo URL" />
                    </label>
                    
                    <label className="flex items-center gap-2 border pl-2">
                        <MdEmail size={20}/>
                        <input className="grow py-2" type="email" name="email" placeholder="Enter Your Email Address" />
                    </label>

                    <label className="flex items-center gap-2 border pl-2">
                        <IoMdLock size={20} />
                        <input className="grow py-2" type="password" name="password" placeholder="Enter Your Password" />
                    </label>

                    <button className="py-2 border bg-[#3C65F7] text-white hover:bg-[#05264E]">Register</button>
                    
                </div>
            </form>
            <p className="text-center pt-5">Already have an account? <NavLink className={'text-[#3C65F7]'} to='/login'>Sign In</NavLink></p>
        </div>
    );
};

export default RegisterPage;