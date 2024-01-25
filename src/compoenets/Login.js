import { useState } from "react";
import Header from "./Header";

const Login = () => {
    const[isSignIn, setIsSignIn] = useState(true);
    return(
        <div>
         <Header />
         <div className="absolute">

         <img src="https://assets.nflxext.com/ffe/siteui/vlv3/32c47234-8398-4a4f-a6b5-6803881d38bf/eed3a573-8db7-47ca-a2ce-b511e0350439/IN-en-20240122-popsignuptwoweeks-perspective_alpha_website_large.jpg"
           alt="movies-img" className="w-screen h-screen"/>
         </div>
         <form className="absolute w-3/12 bg-black right-0 left-0 mx-auto my-36 p-12 text-white text-lg rounded-lg bg-opacity-80">
            <h1 className="font-bold text-3xl py-4">Sign{isSignIn ? " up" : " in"}</h1>
            {
                isSignIn && (

                    <input type="text" placeholder="Full Name" className=" p-2 my-2 w-full bg-gray-700 "/>
                )
            }
            <input type="text" placeholder="Email address" className=" p-2 my-2 w-full bg-gray-700 "/>
            <input type="password" placeholder="Password" className=" p-2 my-2 w-full bg-gray-700" />
            <button className="bg-red-700 p-4 my-4 w-full rounded-lg">Sign {isSignIn ? " up" : " in"}</button>
            <p className="py-6 cursor-pointer" onClick={()=>setIsSignIn(!isSignIn)}>{isSignIn ? "Already registered Sign in now" : "New to Netflix? Sign up Now"}</p>
         </form>
       </div>
    )
}

export default Login;