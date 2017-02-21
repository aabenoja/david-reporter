import { getDependencies } from 'david';

function getDependenciesAsPromised(manifest, opts = {}) {
  return new Promise((resolve, reject) => {
    getDependencies(manifest, opts, (err, deps) => {
      if (err) return reject(err);

      resolve(deps);
    });
  });
}

export default function getAllDependencies(manifest) {
  return Promise.all([
    getDependenciesAsPromised(manifest),
    getDependenciesAsPromised(manifest, { dev: true })
  ]).then(([ deps, devDeps ]) => ({ deps, devDeps }));
}
