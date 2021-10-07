let resultTitle = document.querySelector("#result-game-title"),
  gameSelects = ["paper", "rock", "scissors"],
  computerSelect = document.querySelector(".computer-select"),
  cStable = document.querySelector(".computer-select-table"),
  cStableWrapper = document.querySelector(".computer-select-table-wrapper"),
  rockHand = '<i class="fas fa-hand-rock"></i>',
  paperHand = '<i class="fas fa-hand-paper"></i>',
  scissorsHand = '<i class="fas fa-hand-scissors"></i>',
  cHandName = document.querySelector("#computer-hand-name"),
  cHand = document.querySelector("#computer-hand"),
  playerScore = document.querySelector("#player-score"),
  computerScore = document.querySelector("#computer-score"),
  restartButton = document.querySelector("#restart-button"),
  cScore = 0,
  pScore = 0;

computerSelect.addEventListener("click", () => {
  computerSelect.style.display = "none";
  cStableWrapper.style.display = "none";
  cStable.style.opacity = "0";
});

function userSelect(param) {
  computerSelect.style.display = "flex";
  cStable.style.opacity = "1";
  cStableWrapper.style.display = "block";
  restartButton.style.display = "inline-block";
  let randNum = parseInt(Math.random() * 3),
    compSelect = gameSelects[randNum];
  resultComment = winLose(param, compSelect);
  resultTitle.innerHTML = `${resultComment}`;
  if (compSelect === "paper") {
    cHandName.innerHTML = "Qog'oz";
  } else if (compSelect === "scissors") {
    cHandName.innerHTML = "Qaychi";
  } else {
    cHandName.innerHTML = "Bochka";
  }

  if (result === 1) {
    resultTitle.style.color = "green";
    pScore += 1;
    playerScore.textContent = pScore;
  } else if (result === 0) {
    resultTitle.style.color = "yellow";
  } else {
    cScore += 1;
    computerScore.textContent = cScore;
    resultTitle.style.color = "red";
  }
}

function winLose(uSelect, cSelect) {
  if (cSelect === "paper") {
    cHand.innerHTML = paperHand;
    if (uSelect === "rock") {
      result = -1;
      return "Siz Yutqazdingiz";
    }
    if (uSelect === "scissors") {
      result = 1;
      return "Siz Yutdingiz";
    }
    result = 0;
    return "Durang";
  }
  if (cSelect === "rock") {
    cHand.innerHTML = rockHand;
    if (uSelect === "scissors") {
      result = -1;
      return "Siz Yutqazdingiz";
    }
    if (uSelect === "paper") {
      result = 1;
      return "Siz Yutdingiz";
    }
    result = 0;
    return "Durang";
  }
  cHand.innerHTML = scissorsHand;
  if (uSelect === "paper") {
    result = -1;
    return "Siz Yutqazdingiz";
  }
  if (uSelect === "rock") {
    result = 1;
    return "Siz Yutdingiz";
  }
  result = 0;
  return "Durang";
}
let reset = () => {
  cScore = 0;
  pScore = 0;
  playerScore.textContent = pScore;
  computerScore.textContent = cScore;
  restartButton.style.display = "none";
};
