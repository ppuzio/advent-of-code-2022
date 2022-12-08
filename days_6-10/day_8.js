console.clear();
const countTrees = (input) =>
  input
    .split("\n")
    .map((s) => s.split(""))
    .reduce((acc, curr, idx, arr) => {
      if (idx === 0 || idx === arr.length - 1) {
        return acc + curr.length;
      }

      return (
        acc +
        curr.reduce((accInner, currInner, idxInner, arrInner) => {
          if (idxInner === 0 || idxInner === arrInner.length - 1) {
            return accInner + 1;
          }
          const searchLeft = arrInner
            .slice(0, idxInner)
            .some((v, i) => v >= currInner);
          const searchRight = arrInner
            .slice(idxInner + 1)
            .some((v, i) => v >= currInner);
          const searchTop = arr
            .slice(0, idx)
            .some((v) => v[idxInner] >= currInner);
          const searchBot = arr
            .slice(idx + 1)
            .some((v) => v[idxInner] >= currInner);
          return (
            accInner + !(searchLeft && searchRight && searchTop && searchBot)
          );
        }, 0)
      );
    }, 0);

let max = 0;

const findBestTree = (input) =>
  input
    .split("\n")
    .map((s) => s.split(""))
    .forEach((arrInner, idx, arr) => {
      console.log(" ");
      arrInner.forEach((currInner, idxInner) => {
        if (
          idx === arr.length - 1 ||
          idx === 0 ||
          idxInner === 0 ||
          idxInner === arrInner.length - 1
        )
          return;
        let searchLeft = arrInner
          .slice(0, idxInner)
          .findLastIndex((v, i) => v >= currInner);
        searchLeft = searchLeft === -1 ? idxInner : idxInner - searchLeft;

        let searchRight = arrInner
          .slice(idxInner + 1)
          .findIndex((v, i) => v >= currInner);
        searchRight =
          searchRight === -1 ? arrInner.length - idxInner - 1 : searchRight + 1;

        let searchTop = arr
          .slice(0, idx)
          .findLastIndex((v, i) => v[idxInner] >= currInner);
        searchTop = searchTop === -1 ? idx : idx - searchTop;
        let searchBot = arr
          .slice(idx + 1)
          .findIndex((v, i) => v[idxInner] >= currInner);
        searchBot = searchBot === -1 ? arr.length - idx - 1 : searchBot + 1;

        const treeVal = searchLeft * searchRight * searchTop * searchBot;
        if (max < treeVal) {
          max = treeVal;
        }
      });
    });

findBestTree(`30373
25512
65332
33549
35390`);
console.log(max);
