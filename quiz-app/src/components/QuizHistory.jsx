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
    <div className="bg-[#103778] min-h-screen p-6 text-white">
      <h2 className="text-2xl font-bold mb-4">Quiz History</h2>

      {history.length === 0 ? (
        <p>No quiz attempts yet.</p>
      ) : (
        <div className="space-y-8">
          {history.map((attempt, i) => (
            <div key={i} className="bg-white text-black p-4 rounded-lg shadow-md">
              <h3 className="font-semibold">Attempt #{i + 1}</h3>
              <p className="mb-2">Score: {attempt.score} / {attempt.questions.length}</p>
              <div className="space-y-2">
                {attempt.questions.map((q, index) => {
                  const isCorrect = attempt.answers[index] === q.correct;
                  return (
                    <div key={index} className="text-sm">
                      <p dangerouslySetInnerHTML={{ __html: `Q${index + 1}: ${q.question}` }} />
                      <p className={`ml-4 ${isCorrect ? "text-green-600" : "text-red-600"}`}>
                        Your Answer: {attempt.answers[index]}
                      </p>
                      {!isCorrect && (
                        <p className="ml-4 text-green-600">
                          Correct Answer: {q.correct}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-6 flex gap-4">
        <button
          onClick={handleClear}
          className="bg-red-500 text-white px-4 py-2 rounded-md"
        >
          🗑 Clear History
        </button>
        <button
          onClick={() => navigate("/quizsetup")}
          className="bg-orange-500 px-4 py-2 rounded-md"
        >
          🔙 Back to Setup
        </button>
      </div>
    </div>
  );
};

export default QuizHistory;
