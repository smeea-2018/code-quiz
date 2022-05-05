// Questions to be presented
const questions = [
  {
    text: "Which of the following keywords is used to define a variable in Javascript?",
    options: ["var", "let", "Both var and let", "none"],
    correctAnswer: "Both var and let",
  },
  {
    text: "Inside which HTML element do we put the JavaScript?",
    options: ["<js>", "<javascript>", "<script>"],
    correctAnswer: "<script>",
  },
  {
    text: "Which of the following will write the message “Hello DataFlair!” in an alert box?",
    options: [
      " alertBox(“Hello DataFlair!”)",
      "alert(Hello DataFlair!)",
      " alert(“Hello DataFlair!”)",
    ],
    correctAnswer: " alert(“Hello DataFlair!”)",
  },
  {
    text: "Which of the following statements will throw an error?",
    options: [
      "  var fun = function bar( ){ }",
      "var fun = function bar{ }",
      "  function fun( ){ }",
    ],
    correctAnswer: "var fun = function bar{ }",
  },
  {
    text: "Which are the correct “if” statements to execute certain code if “x” is equal to 2?",
    options: ["  if(x = 2)", " if(x == 2)", " if(x 2)"],
    correctAnswer: "  if(x == 2)",
  },
];

let questionIndex = 0;
let timer = 10 * questions.length;

//const answer = ["var", "let", "Both var and let", "none"];
const startButton = document.getElementById("start-quiz-button");
const main = document.getElementById("main");
const timerSpan = document.getElementById("timer-span");
const formElement = document.getElementById("submit-score-button");

let arrayFromLS = JSON.parse(localStorage.getItem("feedbackResults"));

if (!arrayFromLS) {
  localStorage.setItem("feedbackResults", JSON.stringify([]));
}

//function to record click on available options.

const selectAnswer = (event) => {
  //check if answer is selected from one of the options
  const target = event.target;

  if (target.tagName === "LI") {
    const userAnswer = target.getAttribute("data-value");
    //const question = questions[questionIndex].text;
    /*const userAnswers = {
      question,
      value,
    };*/

    compareResults(userAnswer);
  }
  //Remove current Question

  const deleteSection = document.getElementById("question-container");
  deleteSection.remove();

  if (questionIndex < questions.length - 1 && timer > 0) {
    questionIndex += 1;
    renderQuestion();
  } else if (questionIndex === questions.length - 1 && timer >= 0) {
    renderForm();
  } else {
    // render game over
  }
};

//Store values in LS
const storeInLS = (key, value) => {
  if (!arrayFromLS) {
    arrayFromLS = [];
  }
  arrayFromLS.push(value);
  localStorage.setItem(key, JSON.stringify(arrayFromLS));
};

const compareResults = (userAnswer) => {
  //get user answers

  //check if user's answer matches the correct answer

  if (userAnswer !== questions[questionIndex].correctAnswer) {
    timer -= 5;
    if (timer < 0) {
      timerSpan.textContent = 0;
    } else {
      timerSpan.textContent = timer;
    }
  }
};

const displayResults = (event) => {
  //display name
  event.preventDefault();
  //get initials from form
  const initials = document.getElementById("name-initials").value;
  if (initials) {
    const yourScore = {
      initials,
      score: timer,
    };
    storeInLS("feedbackResults", yourScore);
  } else {
    alert("Please enter your initials");
  }

  // display high score
  //console.log(score);
};

const setTimer = () => {
  const updateTimerValue = () => {
    //start timer and increment by 1

    timer -= 1;

    //span : value pf timer
    //set text
    timerSpan.textContent = timer;

    //setInterval(function-counter,delay)
    //function-counter
    //-5
    //stop set interval function.

    // increment timer by 1

    // set text to new timer value

    // check if timer is equal to 0
    if (timer <= 0) {
      clearInterval(timerId);

      //Delete Timer
      const removeTimer = document.getElementById("timer-section");
      removeTimer.remove();
      //Delete question
      const deleteSection = document.getElementById("question-container");

      if (deleteSection) {
        deleteSection.remove();
      }
    } else if (questionIndex === questions.length - 1) {
      clearInterval(timerId);
    }
  };
  //Start Timer
  const timerId = setInterval(updateTimerValue, 1000);
};

// Render results

//Render form
const renderForm = () => {
  document.getElementById("timer-section").remove();
  section = document.createElement("section");
  section.setAttribute("class", "form-container");
  h6 = document.createElement("h6");
  h6.setAttribute("class", "timer-score-value");
  h6.textContent = `your score is ${timer}`;

  const form = document.createElement("form");
  form.setAttribute("id", "user-score-form");

  const nameInputDiv = document.createElement("div");
  nameInputDiv.setAttribute("class", "initials-div");

  const textBox = document.createElement("input");
  textBox.setAttribute("type", "text");
  textBox.setAttribute("placeholder", "Enter Initials");
  textBox.setAttribute("id", "name-initials");
  textBox.setAttribute("class", "name-input");
  nameInputDiv.append(textBox);

  const buttonDiv = document.createElement("div");
  buttonDiv.setAttribute("class", "button-input");
  const button = document.createElement("button");
  button.setAttribute("type", "submit");
  button.setAttribute("class", "submit-button");
  button.setAttribute("class", "submit-score-button");
  button.textContent = "Submit";
  buttonDiv.append(button);

  form.append(nameInputDiv, buttonDiv);

  section.append(h6, form);

  main.append(section);

  form.addEventListener("submit", displayResults);
};

const renderQuestion = () => {
  //Render the first question

  const currentQuestion = questions[questionIndex];

  const section = document.createElement("section");
  // section.setAttribute("class", "form-section");
  section.setAttribute("class", "question-section");
  section.setAttribute("id", "question-container");
  //section.setAttribute("data-correct-answer", "Both var and let");

  const h2 = document.createElement("h2");
  h2.setAttribute("class", "subtitle");
  h2.textContent = currentQuestion.text;

  const ul = document.createElement("ul");
  ul.setAttribute("class", "unordered-list");
  for (let i = 0; i < currentQuestion.options.length; i += 1) {
    const li = document.createElement("li");
    li.setAttribute("class", "list-item");
    li.setAttribute("data-value", currentQuestion.options[i]);
    li.textContent = currentQuestion.options[i];
    ul.appendChild(li);
  } //end for

  section.append(h2, ul);
  main.append(section);
  section.addEventListener("click", selectAnswer);
};

const startQuiz = () => {
  //Remove start quiz section
  const sectionStart = document.getElementById("start-quiz-id");
  sectionStart.remove();

  renderQuestion();
  setTimer();
  timerSpan.textContent = timer;
};

startButton.addEventListener("click", startQuiz);
