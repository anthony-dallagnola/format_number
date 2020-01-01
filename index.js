import { formatNumber } from './formatter.js';

try {
  let result = formatNumber(process.stdout.columns, process.argv.slice(2)).result;
  console.log(result);
}
catch(err) {
  console.error('format number failed: ', err);
}