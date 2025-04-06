import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Home, History, User, Bell, Search } from "lucide-react";
import QuizQuestion from "./QuizQuestion";

const QuizSetup = () => {
  const navigate = useNavigate();
  const [quizData, setQuizData] = useState({
    numQuestions: "",
    category: "",
    difficulty: "",
  });

  const handleChange = (e) => {
    setQuizData({ ...quizData, [e.target.name]: e.target.value });
  };

  const handleStartQuiz = () => {
    if (!quizData.numQuestions || !quizData.category || !quizData.difficulty) {
      alert("Please fill in all fields.");
      return;
    }
    navigate("/quiz");
  };

  return (
    <div className="h-screen flex flex-col justify-between bg-[#103778] text-white p-4 md:p-8 lg:p-12">
      {/* Header Icons */}
      <div className="flex justify-end items-center gap-5 mb-[21px]">
        <Search size={24} className="hover:text-gray-300 transition" />
        <Bell size={24} className="hover:text-gray-300 transition" />
      </div>

      {/* Quiz Banner with stroke */}
      <div className="flex justify-center">
  <div className="p-4 bg-gray-200 border-[4px] border-orange-400 rounded-lg">
    <img
      src="/QUIZ.jpg"
      alt="Quiz Banner"
      className="w-full max-w-[120px] sm:max-w-[160px] md:max-w-[180px] rounded-lg object-cover h-full"
    />
  </div>
</div>


      {/* Form */}
      <div className="flex flex-col items-center w-full max-w-md mx-auto mt-6">
        <input
          type="number"
          name="numQuestions"
          placeholder="Number of Questions"
          value={quizData.numQuestions}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded-md text-black placeholder-gray-600 border border-gray-300 focus:ring-2 focus:ring-blue-500"
          required
        />

        <select
          name="category"
          value={quizData.category}
          onChange={handleChange}
          className="w-full  p-3 mb-4 rounded-md text-black placeholder-gray-600"
        >
          <option value="">Select Category</option>
          <option value="science">Science</option>
          <option value="history">History</option>
          <option value="math">Mathematics</option>
        </select>

        <select
          name="difficulty"
          value={quizData.difficulty}
          onChange={handleChange}
          className="w-full  p-3 mb-6 rounded-md text-black placeholder-gray-600"
        >
          <option value="">Select Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>

        <button
          onClick={() => navigate("/QuizQuestion")}
          className="bg-transparent border-2 border-white text-white font-bold py-3 rounded-md w-full  hover:bg-white hover:text-[#103778] transition"
        >
          Start Quiz
        </button>
      </div>

      {/* Bottom Navigation */}
      <div className="flex justify-around bg-[#0b2b5e] py-1 rounded-t-md mt-3">
        <button onClick={() => navigate("/Quizsetup")} className="text-orange-400">
          <Home size={24} />
        </button>
        <button onClick={() => navigate("/history")} className="text-black">
          <History size={24} />
        </button>
        <button onClick={() => navigate("/profile")} className="text-black">
          <User size={24} />
        </button>
      </div>
    </div>
  );
};

export default QuizSetup;
