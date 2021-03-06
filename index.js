const chalk = require('chalk');
const sym = require('log-symbols');
const greenI = chalk.green.inverse;
const green = chalk.green;
const redI = chalk.red.bold.inverse
const red = chalk.red.bold
const orangeI = chalk.keyword('orange').inverse;
const orange = chalk.keyword('orange');
const blueI = chalk.blue.inverse;
const blue = chalk.blue

module.exports = options => {
  const defaultOptions = { type: "error", msg: "You have not provided all options", name: "" }
  const opts = { ...defaultOptions, ...options }

  const { type, msg, name } = opts;

  const printName = name ? name : type.toUpperCase();

  if (type === 'success') {
    console.log(`\n${sym.success} ${greenI(` ${printName} `)} ${green(msg)}\n`)
  }

  if (type === 'error') {
    console.log(`\n${sym.error} ${redI(` ${printName} `)} ${red(msg)}\n`)
  }

  if (type === 'warning') {
    console.log(`\n${sym.warning} ${orangeI(` ${printName} `)} ${orange(msg)}\n`)
  }

  if (type === 'info') {
    console.log(`\n${sym.info} ${blueI(` ${printName} `)} ${blue(msg)}\n`)
  }
};
