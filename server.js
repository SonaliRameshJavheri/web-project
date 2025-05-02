const quizzes = {
    general: [
      { question: "What is the capital of France?", options: ["Paris", "Rome", "London", "Madrid"], answer: "Paris" },
      { question: "How many continents are there?", options: ["5", "6", "7", "8"], answer: "7" }
    ],
    tech: [
      { question: "What does CPU stand for?", options: ["Central Process Unit", "Central Processing Unit", "Computer Personal Unit", "Control Panel Unit"], answer: "Central Processing Unit" },
      { question: "HTML is used for?", options: ["Styling", "Structure", "Logic", "Speed"], answer: "Structure" }
    ],
    science: [
      { question: "H2O is?", options: ["Oxygen", "Water", "Hydrogen", "Carbon"], answer: "Water" },
      { question: "Which planet is known as the Red Planet?", options: ["Earth", "Venus", "Mars", "Jupiter"], answer: "Mars" }
    ],
    history: [
      { question: "Who was the first president of USA?", options: ["Abraham Lincoln", "George Washington", "John Adams", "Thomas Jefferson"], answer: "George Washington" },
      { question: "In which year did WW2 end?", options: ["1940", "1942", "1945", "1950"], answer: "1945" }
    ],
    sports: [
      { question: "How many players in a soccer team?", options: ["9", "10", "11", "12"], answer: "11" },
      { question: "Olympics are held every?", options: ["2 years", "3 years", "4 years", "5 years"], answer: "4 years" }
    ],
    math: [
      { question: "What is 8 × 7?", options: ["54", "56", "58", "64"], answer: "56" },
      { question: "What is the square root of 49?", options: ["5", "6", "7", "8"], answer: "7" }
    ]
  };
  
  const params = new URLSearchParams(window.location.search);
  const selectedCategory = params.get("category");
  const quizData = quizzes[selectedCategory] || [];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const nextBtn = document.getElementById("nextBtn");
  const resultEl = document.getElementById("result");
  
  function loadQuestion() {
    const current = quizData[currentQuestion];
    questionEl.textContent = current.question;
    optionsEl.innerHTML = "";
    current.options.forEach(option => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.onclick = () => selectAnswer(option);
      optionsEl.appendChild(btn);
    });
  }
  
  function selectAnswer(answer) {
    const correct = quizData[currentQuestion].answer;
    if (answer === correct) score++;
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    questionEl.style.display = "none";
    optionsEl.style.display = "none";
    nextBtn.style.display = "none";
    resultEl.innerHTML = `<h2>Quiz Complete!</h2><p>You scored ${score} out of ${quizData.length}</p>`;
  }
  
  window.onload = () => {
    if (quizData.length === 0) {
      resultEl.innerHTML = `<p>No quiz found for category: ${selectedCategory}</p>`;
      return;
    }
    loadQuestion();
  };
  