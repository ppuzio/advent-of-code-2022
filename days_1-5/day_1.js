const convertItemlistToArrayOfSums = (itemList) =>
  itemList
    .split("\n\n")
    .map((t) => t.split("\n"))
    .map((a) => a.reduce((acc, curr) => acc + Number(curr), 0));

// How many total Calories is that Elf carrying?
const findMax = (itemList) =>
  Math.max(...convertItemlistToArrayOfSums(itemList));

// sum of 3 most carrying elves
const findThreeMax = (itemList) =>
  convertItemlistToArrayOfSums(itemList)
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((a, b) => a + b, 0);
