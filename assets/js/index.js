let questionIndex = 0;
const questions = [
  {
    text: "Which of the following keywords is used to define a variable in Javascript?",
    options: ["var", "let", "Both var and let", "none"],
    correctAnswer: "Both var and let",
  },
  {},
];
const answer = ["var", "let", "Both var and let", "none"];
const startButton = document.getElementById("start-quiz-button");
const main = document.getElementById("main");

//Start Timer
const setTimer = () => {
  //start timer
  //span : value pf timer
  //set text
  //increment timer
  //setInterval(function-counter,delay)
  //function-counter :
  //-5
  //stop set interval function.
};

const renderQuestion = () => {
  //Render the first question
  const currentQuestion = questions[questionIndex];
  const section = document.createElement("section");
  section.setAttribute("class", "question-section");
  //section.setAttribute("data-correct-answer", "Both var and let");

  const h2 = document.createElement("h2");
  h2.setAttribute("class", "subtitle");
  h2.textContent = currentQuestion.text;

  const ul = document.createElement("ul");
  ul.setAttribute("class", "unordered-list");
  for (let i = 0; i < answer.length; i += 1) {
    const li = document.createElement("li");
    li.setAttribute("class", "list-item");
    li.classlist.add("list-item");
    li.setAttribute("data-option", answer[i]);
    li.setAttribute("class", "list-item");
    li.textContent = answer[i];
    ul.appendChild(li);
  }

  section.append(h2, ul);
  main.append(section);
};

const startQuiz = () => {
  //Remove start quiz section
  const sectionStart = document.getElementById("start-quiz-id");
  sectionStart.remove();
  const renderQuestionVariable = renderQuestion();
};

startButton.addEventListener("click", startQuiz);
