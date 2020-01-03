import { formatNumber } from './formatter';

try {
  const result: string = formatNumber(process.stdout.columns, process.argv.slice(2)).result;
  console.log(result);
} catch (err) {
  console.error('format number failed: ', err);
};
