import simpleReport from './simple-report';
import path from 'path';

export default function getReporter(reporterPath) {
  if (!reporterPath) return simpleReport;
  if (!/^\.{1,2}\//.test(reporterPath)) return require(reporterPath);
  return require(path.join(process.cwd(), reporterPath));
}
