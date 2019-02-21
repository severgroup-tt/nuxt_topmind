const path = require('path');

const defaultOptions = {
  trackPathChange: false,
};

module.exports = function topMind(moduleOptions) {
  // Don't include on dev mode
  if (this.options.dev && process.env.NODE_ENV !== 'production') {
    return;
  }

  this.options.head.script.push({
    src: 'https://topmind.talenttechlab.org/static/tracker.js',
    async: true,
  });

  // Collect all options
  const options = Object.assign({}, defaultOptions, this.options.topmind, moduleOptions);

  // Verify options
  if (!options.id) {
    throw new Error('TopMind module must have \'id\' option!');
  }

  // Register plugin
  this.addPlugin({ src: path.resolve(__dirname, 'plugin.js'), ssr: false, options });
};

module.exports.meta = require('./package.json');
