const inp = `bvwbjplbgvbhsrlpgdmjqwftvncz`;

const findNonRepetetive = (input) => {
  let nonRepetitiveIndex = 4;
  let nonRepetetiveChainFound = false;
  while (!nonRepetetiveChainFound) {
    const helperObj = {};
    const letterWindow = input.substring(
      nonRepetitiveIndex - 4,
      nonRepetitiveIndex
    );
    for (l of letterWindow) {
      helperObj[l] = (helperObj[l] ?? 0) + 1;
    }
    nonRepetetiveChainFound = Object.values(helperObj).every((v) => v === 1);
    nonRepetitiveIndex++;
  }

  return nonRepetitiveIndex - 1;
};

const findNonRepetetiveWith14 = (input) => {
  let nonRepetitiveIndex = 14;
  let nonRepetetiveChainFound = false;
  while (!nonRepetetiveChainFound) {
    const helperObj = {};
    const letterWindow = input.substring(
      nonRepetitiveIndex - 14,
      nonRepetitiveIndex
    );
    for (l of letterWindow) {
      helperObj[l] = (helperObj[l] ?? 0) + 1;
    }
    nonRepetetiveChainFound = Object.values(helperObj).every((v) => v === 1);
    nonRepetitiveIndex++;
  }

  return nonRepetitiveIndex - 1;
};
