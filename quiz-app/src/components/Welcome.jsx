import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-[#103778] text-white p-4">
      <img
  src="/WELCOME.jpg"
  alt="Quiz"
  className="w-[340px] h-[200px] sm:w-[300px] sm:h-[150px] md:w-[380px] md:h-[300px] 
             lg:w-[460px] lg:h-[250px] xl:w-[500px] xl:h-[280px] 
             mt-8 border-[5px] border-[#ff7a48] rounded-lg"
/>

      
<h2 className="text-center text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] xl:text-[48px]
  font-semibold leading-tight mt-8 w-full sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
  Find Interesting Quizzes to boost up your Knowledge
</h2>


      <button 
        className="bg-orange-500 text-white font-bold py-2 px-6 rounded-full mt-[62px] 
          w-64 sm:w-72 md:w-80 lg:w-96 xl:w-[28rem] 2xl:w-[32rem]"
        onClick={() => navigate("/CreateAccount")}
      >
        GET STARTED
      </button>

      <button 
        className="border-[3px] border-white text-white font-bold py-2 px-6 rounded-full mt-4 
          w-64 sm:w-72 md:w-80 lg:w-96 xl:w-[28rem] 2xl:w-[32rem] bg-[#103778]"
        onClick={() => navigate("/signin")}
      >
        I HAVE AN ACCOUNT
      </button>
    </div>
  );
};

export default Welcome;
