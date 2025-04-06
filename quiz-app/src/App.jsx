import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import SignIn from "./components/SignIn";
import CreateAccount from "./components/CreateAccount";
import QuizSetup from "./components/QuizSetup";
import QuizQuestion from "./components/QuizQuestion";
import QuizResult from "./components/QuizResult";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/CreateAccount" element={<CreateAccount />} />
        <Route path="/QuizSetup" element={<QuizSetup />} />
        <Route path="/quiz" element={<h1>Quiz Page (To be developed)</h1>} />
        <Route path="/home" element={<h1>Home Page</h1>} />
        <Route path="/history" element={<h1>History Page</h1>} />
        <Route path="/profile" element={<h1>Profile Page</h1>} />
        <Route path="/QuizQuestion" element={<QuizQuestion />} />
        <Route path="/QuizResult" element={<QuizResult />} />
      </Routes>
    </Router>
  );
}

export default App;
