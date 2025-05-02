import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreateQuiz from "./pages/CreateQuiz";
import JoinQuiz from "./pages/JoinQuiz";
import QuizRoom from "./pages/QuizRoom";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-4">
        <nav className="mb-4 flex space-x-4 text-blue-600">
          <Link to="/">Home</Link>
          <Link to="/create">Create Quiz</Link>
          <Link to="/join">Join Quiz</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateQuiz />} />
          <Route path="/join" element={<JoinQuiz />} />
          <Route path="/quiz/:quizId" element={<QuizRoom />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
