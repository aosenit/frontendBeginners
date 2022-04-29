const playerTurn = document.querySelector(".playerTurn");

const resetBtn = document.querySelector(".reset");
const endGame = document.querySelector(".endGame");
const endGameCover = document.querySelector(".endGameCover");

const grids = [...document.querySelectorAll(".grid")];
let winnerDisplay = "";
let drawDisplay;
let winnerStatus = false;

grids.forEach((grid) => {
  grid.addEventListener("click", gameStart);
});

resetBtn.addEventListener("click", () => {
  reset();
});

window.addEventListener("load", () => {
  endGameCover.classList.add("hide");
});

function gameStart() {
  if (this.textContent == "") {
    if (playerTurn.textContent === "X") {
      this.textContent = "X";
      playerTurn.textContent = "O";
    } else {
      this.textContent = "O";
      playerTurn.textContent = "X";
    }

    checkWinner();
    checkDraw();
    endGameHandler();
    if (winnerStatus == true) {
      endGameCover.classList.remove("hide");
      if (!drawDisplay) {
        endGameCover.innerHTML = `<h1>${winnerDisplay}wins!</h1>`;
      } else {
        endGameCover.innerHTML = `<h1>Draw</h1>`;
      }

      winnerStatus = false;
    }
  }
}

function endGameHandler() {
  if (winnerDisplay !== "") {
    endGame.textContent = `${winnerDisplay}  wins!`;
    endGame.style.display = "block";
    winnerStatus = true;
  }
}

function checkWinner() {
  if (
    grids[0].textContent == grids[1].textContent &&
    grids[1].textContent == grids[2].textContent &&
    grids[0].textContent != ""
  ) {
    winnerDisplay = grids[0].textContent;
    winnerStatus = true;
  } else if (
    grids[3].textContent == grids[4].textContent &&
    grids[4].textContent == grids[5].textContent &&
    grids[3].textContent != ""
  ) {
    winnerDisplay = grids[3].textContent;
    winnerStatus = true;
  } else if (
    grids[6].textContent == grids[7].textContent &&
    grids[7].textContent == grids[8].textContent &&
    grids[6].textContent != ""
  ) {
    winnerDisplay = grids[6].textContent;
    winnerStatus = true;
  } else if (
    grids[0].textContent == grids[3].textContent &&
    grids[3].textContent == grids[6].textContent &&
    grids[0].textContent != ""
  ) {
    winnerDisplay = grids[0].textContent;
    winnerStatus = true;
  } else if (
    grids[1].textContent == grids[4].textContent &&
    grids[4].textContent == grids[7].textContent &&
    grids[1].textContent != ""
  ) {
    winnerDisplay = grids[1].textContent;
    winnerStatus = true;
  } else if (
    grids[2].textContent == grids[5].textContent &&
    grids[5].textContent == grids[8].textContent &&
    grids[2].textContent != ""
  ) {
    winnerDisplay = grids[2].textContent;
    winnerStatus = true;
  } else if (
    grids[0].textContent == grids[4].textContent &&
    grids[4].textContent == grids[8].textContent &&
    grids[0].textContent != ""
  ) {
    winnerDisplay = grids[0].textContent;
    winnerStatus = true;
  } else if (
    grids[2].textContent == grids[4].textContent &&
    grids[4].textContent == grids[6].textContent &&
    grids[2].textContent != ""
  ) {
    winnerDisplay = grids[2].textContent;
    winnerStatus = true;
  }
}

function checkDraw() {
  if (
    grids[0].textContent !== "" &&
    grids[1].textContent !== "" &&
    grids[2].textContent !== "" &&
    grids[3].textContent !== "" &&
    grids[4].textContent !== "" &&
    grids[5].textContent !== "" &&
    grids[6].textContent !== "" &&
    grids[7].textContent !== "" &&
    grids[8].textContent !== ""
  ) {
    drawDisplay = "Draw!";
    endGame.textContent = "Draw";
    winnerStatus = true;
  }
}

function reset() {
  window.location.reload();
}
