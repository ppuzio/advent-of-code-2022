// pt. 1
const opponent = {
  A: "rock",
  B: "paper",
  C: "scissors",
};

const mine = {
  X: "rock",
  Y: "paper",
  Z: "scissors",
};

const mineKeys = Object.keys(mine);
const opponentKeys = Object.keys(opponent);

const returnResult = (opp, me) => {
  if (opponent[opp] === mine[me]) return 3;
  if (
    (opp === "A" && me === "Z") ||
    (opp === "B" && me === "X") ||
    (opp === "C" && me === "Y")
  ) {
    return 0;
  }
  return 6;
};

const findScore = (input) => {
  return input.split("\n").reduce((acc, curr) => {
    const [opp, me] = curr.split(" ");
    return acc + returnResult(opp, me) + mineKeys.indexOf(me) + 1;
  }, 0);
};

// pt. 2

const mapOppToWinningScore = {
  A: "B",
  B: "C",
  C: "A",
};

const mapOppToLosing = {
  A: "C",
  B: "A",
  C: "B",
};

const returnResultSecond = (opp, me) => {
  if (me === "Y") return opponentKeys.indexOf(opp) + 1 + 3;
  if (me === "X") return opponentKeys.indexOf(mapOppToLosing[opp]) + 1;
  return 6 + opponentKeys.indexOf(mapOppToWinningScore[opp]) + 1;
};

const findScoreSecondTactics = (input) => {
  return input.split("\n").reduce((acc, curr) => {
    const [opp, me] = curr.split(" ");
    return acc + returnResultSecond(opp, me);
  }, 0);
};
