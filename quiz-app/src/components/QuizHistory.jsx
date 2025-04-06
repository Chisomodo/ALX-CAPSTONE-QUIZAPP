import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const QuizHistory = () => {
  const [history, setHistory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedHistory = localStorage.getItem("quizHistory");
    if (storedHistory) {
      setHistory(JSON.parse(storedHistory));
    }
  }, []);

  const handleClear = () => {
    localStorage.removeItem("quizHistory");
    setHistory([]);
  };

  return (
    <div className="bg-[#103778] min-h-screen p-9 text-white">
      <h2 className="text-6xl font-bold mb-4">Quiz History</h2>

      {history.length === 0 ? (
        <p>No quiz attempts yet.</p>
      ) : (
        <div className="space-y-8">
          {history.map((attempt, i) => (
            <div key={i} className="bg-white text-black p-4 rounded-lg shadow-md">
              <h3 className="font-semibold">Attempt #{i + 1}</h3>
              <p className="mb-2">Score: {attempt.score} / {attempt.questions.length}</p>
              <div className="space-y-2">
                {attempt.questions.map((question, idx) => (
                  <div key={idx} className="text-sm">
                    <strong>{idx + 1}. </strong>
                    <span dangerouslySetInnerHTML={{ __html: question.question }} />
                    <p>Your Answer: {attempt.answers[idx]}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      <button
        onClick={handleClear}
        className="bg-red-500 text-white px-6 py-2 mt-8 rounded-md"
      >
        Clear History
      </button>

      <button
        onClick={() => navigate("/quizsetup")}
        className="bg-orange-500 text-white px-6 py-2 mt-4 rounded-md"
      >
        Go to Quiz Setup
      </button>
    </div>
  );
};

export default QuizHistory;
