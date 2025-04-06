import { useEffect, useState } from "react";
import axios from "axios";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const QuizQuestion = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answers, setAnswers] = useState(Array(10).fill(null));
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const navigate = useNavigate();

  // Fetch questions
  useEffect(() => {
    axios
      .get("https://opentdb.com/api.php?amount=10&type=multiple")
      .then((res) => {
        const formatted = res.data.results.map((q) => ({
          question: q.question,
          correct: q.correct_answer,
          options: shuffleArray([q.correct_answer, ...q.incorrect_answers]),
        }));
        setQuestions(formatted);
      })
      .catch((err) => console.error("Error fetching questions:", err));
  }, []);

  // Restore selected answer when index changes
  useEffect(() => {
    setSelectedAnswer(answers[currentIndex]);
  }, [currentIndex]);

  // Timer countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          clearInterval(timer);
          alert("Time's up!");
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

  const handleOptionClick = (option) => {
    const updated = [...answers];
    updated[currentIndex] = option;
    setAnswers(updated);
    setSelectedAnswer(option);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    let score = 0;
    answers.forEach((answer, idx) => {
      if (answer === questions[idx].correct) {
        score++;
      }
    });

    navigate("/QuizResult", {
      state: {
        score,
        total: questions.length,
      },
    });
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  if (questions.length === 0) return <div className="text-white p-4">Loading...</div>;

  const currentQ = questions[currentIndex];

  return (
    <div className="p-6 bg-[#103778] min-h-screen text-white flex flex-col items-center">
      {/* Top Bar: Back & Forward */}
      <div className="flex justify-between items-center w-full max-w-md mb-6">
        <button onClick={handlePrev} disabled={currentIndex === 0}>
          <ChevronLeft size={28} className={currentIndex === 0 ? "opacity-30" : "text-[#103778]"} />
        </button>

        <div className="text-sm">
          {currentIndex + 1} / {questions.length}
        </div>

        <button onClick={handleNext}>
          <ChevronRight size={28} className="text-[#103778]" />
        </button>
      </div>

      {/* Timer */}
      <div className="mb-4 text-lg font-bold text-orange-400">Time Left: {formatTime(timeLeft)}</div>

      {/* Question */}
      <h2
        className="text-center text-xl font-semibold mb-6"
        dangerouslySetInnerHTML={{ __html: currentQ.question }}
      />

      {/* Options */}
      <div className="grid gap-4 w-full max-w-md">
        {currentQ.options.map((option, idx) => {
          const optionLabels = ["A", "B", "C", "D"];
          return (
            <button
              key={idx}
              onClick={() => handleOptionClick(option)}
              className={`p-3 rounded-md text-left transition-all duration-200 ${
                selectedAnswer === option
                  ? "bg-orange-500 text-white"
                  : "bg-white text-black hover:bg-gray-200"
              }`}
            >
              <span className="font-bold mr-2">{optionLabels[idx]}.</span>
              <span dangerouslySetInnerHTML={{ __html: option }} />
            </button>
          );
        })}
      </div>

      {/* Next / Submit Button */}
      <button
        onClick={handleNext}
        className="mt-8 bg-white text-[#103778] font-semibold grid gap-4 w-full max-w-md hover:bg-orange-500 hover:text-white transition"
        disabled={selectedAnswer === null}
      >
        {currentIndex === questions.length - 1 ? "Submit" : "Next"}
      </button>
    </div>
  );
};

export default QuizQuestion;
