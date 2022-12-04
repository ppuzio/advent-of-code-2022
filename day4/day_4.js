console.clear();
const findOverlaps = (input) =>
  input.split("\n").reduce((acc, curr) => {
    const [firstElf, secondElf] = curr.split(",");
    const [bottomFirst, topFirst] = firstElf.split("-");
    const [bottomSecond, topSecond] = secondElf.split("-");

    if (
      (Number(bottomFirst) >= Number(bottomSecond) &&
        Number(topFirst) <= Number(topSecond)) ||
      (Number(bottomFirst) <= Number(bottomSecond) &&
        Number(topFirst) >= Number(topSecond))
    ) {
      return acc + 1;
    }
    return acc;
  }, 0);

const findAllOverlaps = (input) =>
  input.split("\n").reduce((acc, curr) => {
    const [firstElf, secondElf] = curr.split(",");
    const [bottomFirst, topFirst] = firstElf.split("-");
    const [bottomSecond, topSecond] = secondElf.split("-");

    if (
      (Number(bottomFirst) >= Number(bottomSecond) &&
        Number(topFirst) <= Number(topSecond)) ||
      (Number(bottomFirst) <= Number(bottomSecond) &&
        Number(topFirst) >= Number(topSecond)) ||
      (Number(bottomSecond) <= Number(topFirst) &&
        Number(bottomFirst) <= Number(topSecond))
    ) {
      console.log(
        bottomFirst,
        topFirst,
        bottomSecond,
        topSecond,
        Number(bottomFirst) >= Number(bottomSecond) &&
          Number(topFirst) <= Number(topSecond),
        Number(bottomFirst) <= Number(bottomSecond) &&
          Number(topFirst) >= Number(topSecond),
        Number(bottomSecond) <= Number(topFirst),
        Number(bottomFirst) <= Number(topSecond)
      );
      return acc + 1;
    }
    return acc;
  }, 0);

console.log(findAllOverlaps(input));
