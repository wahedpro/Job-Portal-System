import { useContext } from "react";
import { IoMdLock } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import AuthContext from "../context/AuthContext";


const LoginPage = () => {

    const {loginUser,signWithGoogle} = useContext(AuthContext);

    const handleToLogin = e=>{
        e.preventDefault();

        const email = e.target.email.value;
        const password =e.target.password.value;
        
        loginUser(email,password)
        .then(result => {
            console.log(result);
        })
        .catch(error =>{
            console.log(error.message);
        })
    }

    const loginWithGoogle=()=>{
        signWithGoogle()
        .then(result => console.log(result))
        .catch(error => console.log(error.message))
    }


    return (
        <div className="w-[50%] mx-auto py-10">
            <div className="flex flex-col items-center gap-1 pb-5">
                <p className="text-[#3C65F7]">Welcome Back!</p>
                <h1 className="text-3xl font-semibold">Member Login</h1>
                <h3 className="text-xl">Sign in to continue.</h3>
            </div>

            <div className="flex flex-col gap-3">
                <button onClick={loginWithGoogle} className="py-2 border flex items-center justify-center gap-2"> <FcGoogle size={20}/>Login With Google</button>

                <div className="flex items-center gap-2 text-gray-600 text-sm py-5">
                    <span className="flex-grow border-t border-gray-300"></span>
                    <p className="text-center">Or Continue with</p>
                    <span className="flex-grow border-t border-gray-300"></span>
                </div>
            </div>

            <form onSubmit={handleToLogin}>
                <div className="flex flex-col gap-3">

                    <label className="flex items-center gap-2 border pl-2">
                        <MdEmail size={20}/>
                        <input className="grow py-2" type="email" name="email" placeholder="Enter Your Email Address" />
                    </label>

                    <label className="flex items-center gap-2 border pl-2">
                        <IoMdLock size={20} />
                        <input className="grow py-2" type="password" name="password" placeholder="Enter Your Password" />
                    </label>

                    <button className="py-2 border bg-[#3C65F7] text-white hover:bg-[#05264E]">Login</button>
                    
                </div>
            </form>  
            <p className="text-center pt-5">Do not have an account? <NavLink className={'text-[#3C65F7]'} to='/register'>Sign Up</NavLink></p>
        </div>
    );
};

export default LoginPage;