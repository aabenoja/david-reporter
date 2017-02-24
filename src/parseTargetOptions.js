export default function parseTargetOptions({ deps, devDeps, optional, peer }) {
  const targets = [];

  if (deps) {
    targets.push({});
  }

  if (devDeps) {
    targets.push({ dev: true });
  }

  if (optional) {
    targets.push({ optional: true });
  }

  if (peer) {
    targets.push({ peer: true });
  }

  return targets;
}
