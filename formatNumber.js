const { outputFormattedNumber } = require('./functions');


let result = outputFormattedNumber(process.stdout.columns, process.argv.slice(2));
if(result.error) {
  console.error(result.error);
} else {
  console.log(result.result);
}

return result;
  