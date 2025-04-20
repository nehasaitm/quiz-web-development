const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "HyperText Markup Language",
      "HyperText Makeup Language",
      "HyperText Machine Language",
      "HyperText Master Language"
    ],
    answer: "HyperText Markup Language"
  },
  {
    question: "Which of the following is a popular web development framework?",
    options: ["React", "Angular", "Vue.js", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "What is CSS used for?",
    options: [
      "Creating database queries",
      "Styling web pages",
      "Writing server-side code",
      "Creating images"
    ],
    answer: "Styling web pages"
  },
  {
    question: "What is JavaScript used for?",
    options: [
      "Creating database queries",
      "Styling web pages",
      "Adding interactivity to web pages",
      "Creating images"
    ],
    answer: "Adding interactivity to web pages"
  },
  {
    question: "What does URL stand for?",
    options: [
      "Uniform Resource Locator",
      "Universal Resource Locator",
      "Uniform Resource Link",
      "Universal Resource Link"
    ],
    answer: "Uniform Resource Locator"
  }
];

let current = 0;
let score = 0;
let timeLeft = 60;

const questionBox = document.getElementById("question-box");
const nextBtn = document.getElementById("next-btn");
const result = document.getElementById("result");
const timer = document.getElementById("timer");

const correctSound = document.getElementById("correctSound");
const wrongSound = document.getElementById("wrongSound");

function loadQuestion() {
  const q = questions[current];
  questionBox.innerHTML = `<p>Question ${current + 1}: ${q.question}</p>` +
    q.options.map(opt =>
      `<label><input type="radio" name="answer" value="${opt}"> ${opt}</label>`
    ).join('');
}

nextBtn.onclick = () => {
  const selected = document.querySelector('input[name="answer"]:checked');
  if (!selected) {
    alert("Please select an answer!");
    return;
  }

  if (selected.value === questions[current].answer) {
    score++;
    correctSound.play();
  } else {
    wrongSound.play();
  }

  current++;
  if (current < questions.length) {
    loadQuestion();
  } else {
    clearInterval(countdown);
    finishQuiz();
  }
};

function finishQuiz() {
  questionBox.style.display = "none";
  nextBtn.style.display = "none";
  result.innerHTML = `🎉 You got <strong>${score}</strong> out of <strong>${questions.length}</strong> correct!`;
}

loadQuestion();

const countdown = setInterval(() => {
  timeLeft--;
  timer.textContent = `Time Left: ${timeLeft}s`;

  if (timeLeft <= 0) {
    clearInterval(countdown);
    finishQuiz();
  }
}, 1000);
