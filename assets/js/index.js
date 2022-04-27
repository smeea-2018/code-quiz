const question =
  "Which of the following keywords is used to define a variable in Javascript?";

const answer = ["var", "let", "Both var and let", "none"];
const startButton = document.getElementById("start-quiz-button");
const main = document.getElementById("main");

const startQuiz = () => {
  //Remove start quiz section
  const sectionStart = document.getElementById("start-quiz-id");
  sectionStart.remove();
  //Start Timer
  //Render the first question
  const section = document.createElement("section");
  section.setAttribute("class", "question-section");
  section.setAttribute("correct-answer", "Both var and let");

  const h2 = document.createElement("h2");
  h2.setAttribute("class", "subtitle");
  h2.textContent = question;

  const ul = document.createElement("ul");
  for (let i = 0; i < answer.length; i += 1) {
    const li = document.createElement("li");
    li.setAttribute("data-option", answer[i]);
    li.textContent = answer[i];
    ul.appendChild(li);
  }

  section.append(h2, ul);
  main.append(section);
};

startButton.addEventListener("click", startQuiz);
