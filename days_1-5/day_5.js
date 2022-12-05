const columns = `    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 `;

const moves = `move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;

const firstTask = () => {
  const input = columns.split("\n");
  const lastElLength = input.pop().length;
  const store = new Array((lastElLength + 1) / 4).fill(null).map(() => []);

  input.forEach((val) => {
    const matches = [...val.matchAll(/(\[)(.)(\])/g)];
    matches.forEach((val) => store[val.index / 4].unshift(val[2]));
  });

  moves.split("\n").forEach((row) => {
    const [, iterations, , from, , to] = row.split(" ");
    for (i = 0; i < iterations; i++) {
      const taken = store[from - 1].pop();
      store[to - 1].push(taken);
    }
  });

  return store.reduce((acc, curr) => acc + curr[curr.length - 1], "");
};

const secondTask = () => {
  const input = columns.split("\n");
  const lastElLength = input.pop().length;
  const store = new Array((lastElLength + 1) / 4).fill(null).map(() => []);

  input.forEach((val) => {
    const matches = [...val.matchAll(/(\[)(.)(\])/g)];
    matches.forEach((val) => store[val.index / 4].unshift(val[2]));
  });

  moves.split("\n").forEach((row) => {
    const [, iterations, , from, , to] = row.split(" ");
    const taken = store[from - 1].splice(store[from - 1].length - iterations);
    store[to - 1] = [...store[to - 1], ...taken];
  });

  return store.reduce((acc, curr) => acc + curr[curr.length - 1], "");
};
