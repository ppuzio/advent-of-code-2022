const countRucksackWorth = (i) =>
  i.split("\n").reduce((acc, curr) => {
    const firstRucksack = curr.substring(0, curr.length / 2);
    const secondRucksack = curr.substring(curr.length / 2, curr.length);

    const firstRucksackLetters = {};
    const secondRucksackLetters = {};

    for (f of firstRucksack) {
      firstRucksackLetters[f] = true;
    }
    for (s of secondRucksack) {
      secondRucksackLetters[s] = true;
    }

    const matchingLetterAscii = Object.keys(firstRucksackLetters)
      .find((k) => secondRucksackLetters[k])
      .charCodeAt(0);

    // in ASCII lowercase a is 97, uppercase Z is 90, uppercase A is 65
    return (
      acc +
      (matchingLetterAscii > 90
        ? matchingLetterAscii - 96
        : matchingLetterAscii - 38)
    );
  }, 0);

const countRucksackGroupWorth = (i) =>
  i.split("\n").reduce((acc, curr, i, arr) => {
    if (i % 3 === 0) {
      const firstRucksackLetters = {};
      const secondRucksackLetters = {};
      const thirdRucksackLetters = {};

      for (f of curr) {
        firstRucksackLetters[f] = true;
      }
      for (s of arr[i + 1]) {
        secondRucksackLetters[s] = true;
      }
      for (s of arr[i + 2]) {
        thirdRucksackLetters[s] = true;
      }

      const matchingLetterAscii = Object.keys(firstRucksackLetters)
        .find((k) => secondRucksackLetters[k] && thirdRucksackLetters[k])
        .charCodeAt(0);

      return (
        acc +
        (matchingLetterAscii > 90
          ? matchingLetterAscii - 96
          : matchingLetterAscii - 38)
      );
    }
    return acc;
  }, 0);
