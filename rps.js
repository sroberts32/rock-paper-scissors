const hands = ["rock", "paper", "scissors"];

function getHand() {
  let randomNumber = parseInt(Math.random() * 10) % 3;
  return hands[randomNumber];
}

let userHand = {
  name: "User",
  getHand: function () {
    return getHand();
  },
  winCount: 0,
};

let computerHand = {
  name: "Computer",
  getHand: function () {
    return getHand();
  },
  winCount: 0,
};

let userWin = 0;
let computerWin = 0;
let totalGameCount = 0;

function playRound(userHand, computerHand) {
  let userChoice = userHand.getHand();
  let computerChoice = computerHand.getHand();

  console.log(userHand.name + " threw " + userChoice);
  console.log(computerHand.name + " threw " + computerChoice);

  if (userChoice == computerChoice) {
    totalGameCount += 1;
    console.log(totalGameCount + ". " + "It's a tie.");
  } else if (userChoice == "rock") {
    if (computerChoice == "paper") {
      computerWin += 1;
      totalGameCount += 1;
      console.log(
        totalGameCount + ". " + computerHand.name + " wins the game."
      );
    }
    if (computerChoice == "scissors") {
      userWin += 1;
      totalGameCount += 1;
      console.log(totalGameCount + ". " + userHand.name + " wins the game.");
    }
  } else if (userChoice == "scissors") {
    if (computerChoice == "paper") {
      userWin += 1;
      totalGameCount += 1;
      console.log(totalGameCount + ". " + userHand.name + " wins the game.");
    }
    if (computerChoice == "rock") {
      computerWin += 1;
      totalGameCount += 1;
      console.log(
        totalGameCount + ". " + computerHand.name + " wins the game."
      );
    }
  } else if (userChoice == "paper") {
    if (computerChoice == "scissors") {
      computerWin += 1;
      totalGameCount += 1;
      console.log(
        totalGameCount + ". " + computerHand.name + " wins the game."
      );
    }
    if (computerChoice == "rock") {
      userWin += 1;
      totalGameCount += 1;
      console.log(totalGameCount + ". " + userHand.name + " wins the game.");
    }
  } else {
    console.log("Null");
  }
}
function playGame(userHand, computerHand, playUntil) {
  if (userWin < playUntil && computerWin < playUntil) {
    playRound(userHand, computerHand);
    playGame(userHand, computerHand, playUntil);
  }
}
function winnerAndNew() {
  playGame(userHand, computerHand, 5);
  if (userWin === 5) {
    console.log(
      userHand.name +
        " wins " +
        userWin +
        " out of " +
        totalGameCount +
        " games. And is the new RPS Champion."
    );
  } else if (computerWin === 5) {
    console.log(
      computerHand.name +
        " wins " +
        computerWin +
        " out of " +
        totalGameCount +
        " games. And is the new RPS Champion."
    )
  }
}

winnerAndNew();

// module.exports = [userHand,computerHand];
// module.exports = hands;