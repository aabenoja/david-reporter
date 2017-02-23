import { getDependencies, isUpdated } from 'david';

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
  ]).then(results => results.map(deps =>
    Object.keys(deps).reduce((result, key) => {
      const dep = deps[key];
      result[key] = Object.assign({}, dep, {isUpdated: isUpdated(dep)});
      return result;
    }, {})
  )).then(([ deps, devDeps ]) => {
    return ({ deps, devDeps });
  });
}
