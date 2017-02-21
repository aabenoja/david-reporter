import { isUpdated } from 'david';

export default function simpleReport({ deps, devDeps }) {
  const allDeps = Object.assign({}, deps, devDeps);
  const keys = Object.keys(allDeps);
  const outdatedCount = keys.reduce((total, key) => total + (isUpdated(allDeps[key]) ? 1 : 0), 0);
  console.log(`${keys.length} dependencies found`);
  console.log(`${outdatedCount} out of date`);
}
