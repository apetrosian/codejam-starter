const readline = require('readline');

const solve = (data) => {
  return data;
};

const formatOutput = (test, result) => {
  process.stdout.write('Case #'+ test +': ' + result + '\n');
}

const readInput = () => {

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  });

  // Total number of test cases
  let total = 0;

  // Current test case
  let test = 0;

  // Read data stream line by line
  rl.on('line', (line) => {

    // The first line of the input gives the number of test cases
    if(!total) {
      total = parseInt(line, 10);
      return;
    }

    if (test < total) {
      let result = solve(line);
      formatOutput(++test, result);
    }
  });
}

readInput();
