import { useNavigate } from "react-router-dom";
 
 const SignIn = () => {
   const navigate = useNavigate();
 
   return (
     <div className="h-screen flex flex-col items-center justify-center bg-[#103778] text-white p-4">
       {/* Heading */}
       <h2 className="text-center text-[36px] font-semibold leading-tight mb-[49px] w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%]
">
         Welcome Back!
       </h2>
 
       {/* Email Input */}
       <input
         type="email"
         placeholder="Email"
         className="w-[354px] p-3 px-4 rounded-md text-black placeholder:text-gray-600 w-[90%], sm:w-[80%], md:w-[70%], lg:w-[60%"
       />
 
       {/* Password Input */}
       <input
         type="password"
         placeholder="Password"
         className="w-[354px] p-3 px-4 rounded-md text-black placeholder:text-gray-600 mt-[19px] w-[90%], sm:w-[80%], md:w-[70%], lg:w-[60%"
       />
 
       {/* Sign In Button */}
       <button
         className="bg-orange-500 text-white font-bold py-3 px-6 rounded-full mt-[80px] w-[354px] w-[90%], sm:w-[80%], md:w-[70%], lg:w-[60%"  onClick={() => navigate("/QuizSetup")}
       >
         SIGN IN
       </button>
 
       {/* "I Have an Account" Button */}
       <button
         className="border-[3px] border-white text-white font-bold py-2 px-6 rounded-full mt-4 w-[354px] bg-[#103778]"
         onClick={() => navigate("/CreateAccount")}
       >
         I DON'T HAVE AN ACCOUNT
       </button>
     </div>
   );
 };
 
 export default SignIn;