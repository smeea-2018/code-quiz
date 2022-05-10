highScoreIndex = 0;
//finalHighScore = ;

const highScoresForm = (finalHighScore) => {
  const section = document.createElement("section");

  section.setAttribute("class", "high-score-section");

  h2 = document.createElement("h2");
  h2.setAttribute("class", "high-scores-value");
  h2.textContent = "High Scores";

  const ul = document.createElement("ul");
  ul.setAttribute("class", "unordered-list");
  for (let i = 0; i < finalHighScore.length; i++) {
    const li = document.createElement("li");
    li.setAttribute("class", "highScore-list-item");
    //li.setAttribute("data-value", finalHighScore[i]);
    li.textContent = `${finalHighScore[i].initials}: ${finalHighScore[i].score}`;
    ul.appendChild(li);
  } //end for

  section.append(h2, ul);
  main.append(section);
};

const sortHighScores = (highScore) => {
  highScore.sort((a, b) => b.score - a.score);
  return highScore;
};

const onLoad = () => {
  const highScore = JSON.parse(localStorage.getItem("feedbackResults"));
  if (!highScore) {
    alert("No value found. Please select Home to play");
  } else {
    //sort array in descending order
    const finalHighScore = sortHighScores(highScore);

    highScoresForm(finalHighScore);
  }
};
window.addEventListener("load", onLoad);
