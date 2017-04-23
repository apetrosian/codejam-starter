const readline = require('readline');

// Solve problem
const solve = (data) => {

  // Your bloody algorithm

  return data;
};

// Print output
const formatOutput = (test, result) => {
  process.stdout.write('Case #'+ test +': ' + result + '\n');
};

// Parse input data
const parseInput = (data) => {

  const total = +data.shift();

  for(let test=1; test<=total; test++) {

    // 1 test correspond to 1 line
    formatOutput(test, solve(data.shift()));

    // 1 test correspond to N lines
    // const [n, m] = data.shift().split(' ').map(Number);
    // const params = [];
    //
    // params.push(data.splice(0, m));
    //
    // formatOutput(test, solve(n,params));
  }
};

// Read data stream
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

const data = [];

rl.on('line', line => data.push(line));

rl.on('close', () => parseInput(data));
