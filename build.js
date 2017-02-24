const { rollup } = require('rollup');
const babel = require('rollup-plugin-babel');

rollup({
  entry: './src/cli.js',
  plugins: [ babel({
      presets: [
        ["env", {
          "targets": { "node": 6 },
          modules: false
        }]
      ],
      babelrc: false,
      exclude: 'node_modules/**',
    })
  ]
}).then(bundle => {
  bundle.write({
    format: 'cjs',
    dest: 'cli.js'
  });
});
