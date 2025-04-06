import { useNavigate, useLocation } from "react-router-dom";

const QuizResult = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { score = 0, totalQuestions = 10 } = location.state || {};

  const percentage = (score / totalQuestions) * 100;

  const resultImage =
    percentage > 60
      ? "/Trophy.jpg"
      : "/Failure.jpg";

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-[#103778] text-white p-4">
      <h2 className="text-2xl font-bold">Quiz Result</h2>

      {/* Pass or Fail message */}
      <p className="text-lg mt-4">
        {percentage > 60 ? "🎉 Congratulations!" : "😞 Sorry, you didn't pass"}
      </p>

      {/* Score Display */}
      <div className="bg-blue-500 text-white px-4 py-2 rounded-md text-lg font-bold mt-2">
        Your Score <br /> {score}/{totalQuestions}
      </div>

      {/* Result Image */}
      <img
        src={resultImage}
        alt="Quiz Result"
        className="w-full max-w-[300px] mt-4 rounded-lg border-4 border-orange-500"
      />

      {/* Buttons */}
      <div className="flex gap-4 mt-6">
        <button className="bg-white text-[#103778] px-4 py-2 rounded-md flex items-center gap-2 border-2 border-white">
          🔗 Share Results
        </button>

        <button
          onClick={() => navigate("/quiz")}
          className="bg-orange-500 px-4 py-2 rounded-md text-white font-bold"
        >
          🔄 Retake Quiz
        </button>
      </div>

      {/* Close Button */}
      <button
        onClick={() => navigate("/QuizSetup")}
        className="text-white mt-6 text-3xl"
      >
        ❌
      </button>
    </div>
  );
};

export default QuizResult;
